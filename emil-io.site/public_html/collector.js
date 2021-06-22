//const session = require("express-session");

// session_id should be ignored in post requests
// now that we are using express-session
// - have not confirmed entirely but should be the case
//   based on recieved data in mongo database
var session_id = "";
var currTime = 0;
var firstScroll = 0;



// utilized solution here: 
// https://stackoverflow.com/questions/31740637/detect-if-browser-disables-images
// returns true if images are disabled in users browser
// else returns false
function disabledImageCheck() {
    if ((document.getElementById('flag').offsetWidth==1 
    && document.getElementById('flag').readyState=='complete')
    ||(document.getElementById('flag').offsetWidth==1
    && document.getElementById('flag').readyState==undefined)){
        return true;
    }else{
        return false;
    }
}

// utilized ideas from here: https://developer.mozilla.org/en-US/docs/Web/API/ElementCSSInlineStyle/style
// and here: https://stackoverflow.com/questions/4758805/detecting-when-styles-disabled
// returns true if css is disabled in users browsers
// else returns false
function disabledCssCheck() {
    // check color style of 'cssCheck' div tag (should be set to red)
    if(window.getComputedStyle(document.getElementById("cssCheck"), null)["color"] == "rgb(255, 39, 39)" || 
    window.getComputedStyle(document.getElementById("cssCheck"), null)["color"] == "rgb(255, 0, 0)"){
        return true;
    }
    return false;
}

function getUserAgentString() {
    return navigator.userAgent;
}

function getUserLang() {
    return navigator.language;
}

function cookiesEnabled() {
    return  navigator.cookieEnabled;
}

function getNetworkType() {
    // need to find diff options for safari and firefox
    return navigator.connection.effectiveType;
}

function getTimingObject() {
    let time_a = performance.getEntriesByType("navigation");
    return window.performance.timing;
}
 // https://developer.mozilla.org/en-US/docs/Web/Performance/Navigation_and_resource_timings
 // https://developer.mozilla.org/en-US/docs/Glossary/Page_load_time
function getPageStartTime() {
    return window.performance.timing.loadEventStart;
}

function getPageEndTime() {
    return window.performance.timing.navigationStart;
}

function getTotalLoadTime() {
    return (getPageStartTime()-getPageEndTime());
}

function getScreenDim() {
    let screenDim = {
        screen_x : screen.width,
        screen_y : screen.height
    };

    return screenDim;
}

// USE Window TO RECORD USERS SCREEN DIMENSIONS   
function getWindowDim() {
    let windowDim = {
        window_x : window.innerWidth,
        window_y : window.innerHeight
    };

    return windowDim;
}

// removing php session
/*
async function assignSessionId() {
    session_id = await getSessionId();
}

async function getSessionId(){
    const session = await fetch('session.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return session.text();
}
assignSessionId();
*/
var pageUserOn;
// collected after page has loaded
// https://stackoverflow.com/questions/11936816/execute-function-after-complete-page-load
// https://developer.mozilla.org/en-US/docs/Web/API/Document/readystatechange_event
window.addEventListener('load', function() {
    // = getSessionId();
    //console.log(session_id);
    // timeEnteredPage =  new Date().getTime();
    const timeEnteredPage =  window.performance.timing.loadEventStart;
    pageUserOn = window.location.pathname;
    console.log("timeEnteredPage: ");
    console.log(timeEnteredPage);
    console.log("pageUserOn: ");
    console.log(pageUserOn);
   
    // solution with 248 votes helped formulate fetch below:
    // https://stackoverflow.com/questions/29775797/fetch-post-json-data
    fetch('https://emil-io.site/api/static', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
           // 'X-Session-ID': session_id
          },
        body: JSON.stringify({
            //session: session_id,
            userAgent: getUserAgentString(),
            userLang: getUserLang(),
            cookiesEnabled: cookiesEnabled(),
            jsEnabled: true,
            imagesEnabled: disabledImageCheck(),
            cssEnabled: disabledCssCheck(),
            screenDim: getScreenDim(),
            windowDim: getWindowDim(),
            networkType: getNetworkType()
        })
    })
        .then(response => response.json())
        .catch((error) => {
            console.error('Error:', error);
        });

    fetch('https://emil-io.site/api/performance', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
            //'X-Session-ID': session_id
            },
        body: JSON.stringify({
            //session: session_id,
            timingObject: getTimingObject(),
            pageStartLoadTime: getPageStartTime(),
            pageEndLoadTime: getPageEndTime(),
            pageTotalLoadTime: getTotalLoadTime()
        })
    })
        .then(response => response.json())
        .catch((error) => {
            console.error('Error:', error);
        });

    // post to activity api
    fetch('https://emil-io.site/api/activity', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
            },
        body: JSON.stringify({
            //session: session_id,
            timeUserEnteredPage: timeEnteredPage,
            pageUserOn: pageUserOn
        })
    })
        .then(response => response.json())
        .catch((error) => {
            console.error('Error:', error);
        });

    // begin to track idle time that is more than 2 seconds
    trackIdleTime();

 }, false);

 function trackIdleTime() {
    currTime = setInterval(inc, 10);

    function inc () {
        currTime += 1;
    }
}

function checkTimer() {
    console.log("checkTimer time");
    console.log(currTime);
    if(currTime > 2000){
        // post the idleTime Object to activity api
        var idleTime = {timeIdleEnded: new Date().getTime(), totalTimeIdle: currTime};
        
        const totalTimeIdle = currTime;
        const timeIdleEnded = new Date().getTime();
        // console.log("reached max time");

        // PUT to activity api
        fetch('https://emil-io.site/api/activity', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
                },
            body: JSON.stringify({
                //session: session_id,
                idleTime: idleTime,
                pageUserOn: pageUserOn
            })
        })
            .then(response => response.json())
            .catch((error) => {
                console.error('Error:', error);
            });

        
    }
    // reset timer
    //console.log("Resetting time");
    clearInterval(currTime);
    currTime = 0;
    
}

window.addEventListener('beforeunload', function () {
    checkTimer();
    const timeLeftPage = new Date().getTime();
    // post this data to activity api
    fetch('https://emil-io.site/api/activity', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
                },
            body: JSON.stringify({
                //session: session_id,
                timeUserLeftPage: timeLeftPage,
                pageUserOn: pageUserOn 
            })
        })
            .then(response => response.json())
            .catch((error) => {
                console.error('Error:', error);
            });

});

 // Activity data is collected CONTINUOUSLY 
 // not only once page is loaded

// Tracking keydown events
// https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event
 window.addEventListener('keydown', (event) => {
    checkTimer();
    const clickedKey = event.code;
    console.log("keyDown");
    console.log(event.code);
    // have to post data to activity stream
    fetch('https://emil-io.site/api/activity', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
                },
            body: JSON.stringify({
                //session: session_id,
                keyPressed: clickedKey,
                pageUserOn: pageUserOn
            })
        })
            .then(response => response.json())
            .catch((error) => {
                console.error('Error:', error);
            });
 });

var timer;
 // scrolling coordinates
 // https://developer.mozilla.org/en-US/docs/Web/API/Document/scroll_event
 window.addEventListener('scroll', (event) => {
    if(timer) {
		window.clearTimeout(timer);
	}

	timer = window.setTimeout(function() {
		// actual callback
		console.log( "Firing scroll function!" );
        checkTimer();

        var scrollDimX = window.pageXOffset;
        var scrollDimY = window.pageYOffset;
        var scrollCoords = {scrollCoordX: window.pageXOffset, scrollCoordY: window.pageYOffset};
        // return object var
        console.log("scroll dims");
        console.log(window.pageXOffset);
        console.log(window.pageYOffset);

        fetch('https://emil-io.site/api/activity', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                    },
                body: JSON.stringify({
                    //session: session_id,
                    scrollingCoord: scrollCoords,
                    pageUserOn: pageUserOn
                })
            })
                .then(response => response.json())
                .catch((error) => {
                    console.error('Error:', error);
                });
	}, 100);

    // checkTimer();
    // setTimeout(function() {
    //     var scrollDimX = window.pageXOffset;
    //     var scrollDimY = window.pageYOffset;
    //     var scrollCoords = {scrollCoordX: window.pageXOffset, scrollCoordY: window.pageYOffset};
    //     // return object var
    //     console.log("scroll dims");
    //     console.log(window.pageXOffset);
    //     console.log(window.pageYOffset);

    //     fetch('https://emil-io.site/api/activity', {
    //             method: 'POST',
    //             headers: {
    //                 'Accept': 'application/json, text/plain, */*',
    //                 'Content-Type': 'application/json'
    //                 },
    //             body: JSON.stringify({
    //                 session: session_id,
    //                 scrollingCoord: scrollCoords
    //             })
    //         })
    //             .then(response => response.json())
    //             .catch((error) => {
    //                 console.error('Error:', error);
    //             });

    // }, 6000);
 });


 var timer2;
 // records cursor coordinates
 // https://developer.mozilla.org/en-US/docs/Web/API/Element/mousedown_event
 window.addEventListener('mousemove', (event) => {

    if(timer2) {
		window.clearTimeout(timer2);
	}

	timer2 = window.setTimeout(function() {
		// actual callback
		console.log( "Firing cursor coord function!@#%" );
        checkTimer();

        const cursorDimX = event.pageX;
        const cursorDimY = event.pageY;
        var cursorDim = {cursorCoordX: cursorDimX, cursorCoordY: cursorDimY};
        // post cursorDim to activity
        console.log("CURSOR coordinates");
        console.log(event.pageX);
        console.log(event.pageY);

        fetch('https://emil-io.site/api/activity', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                    },
                body: JSON.stringify({
                    //session: session_id,
                    cursorCoord: cursorDim,
                    pageUserOn: pageUserOn
                })
            })
                .then(response => response.json())
                .catch((error) => {
                    console.error('Error:', error);
                });


	}, 100);

    // checkTimer();
    // setTimeout(function() {
    //     const cursorDimX = event.pageX;
    //     const cursorDimY = event.pageY;
    //     var cursorDim = {cursorCoordX: cursorDimX, cursorCoordY: cursorDimY};
    //     // post cursorDim to activity
    //     //console.log("CURSOR coordinates");
    //     //console.log(event.pageX);
    //     //console.log(event.pageY);

    //     fetch('https://emil-io.site/api/activity', {
    //             method: 'POST',
    //             headers: {
    //                 'Accept': 'application/json, text/plain, */*',
    //                 'Content-Type': 'application/json'
    //                 },
    //             body: JSON.stringify({
    //                 session: session_id,
    //                 cursorCoord: cursorDim
    //             })
    //         })
    //             .then(response => response.json())
    //             .catch((error) => {
    //                 console.error('Error:', error);
    //             });
        
        
            

    // }, 2000);

 });

 // cursor coords and button click
 window.addEventListener('mousedown', (event) => {
    checkTimer();
    // event.button notes
    // event.button == 0 -> left mouse button clicked
    // event.button == 1 -> middle mouse button clicked
    // event.button == 2 -> right mouse button clicked
    const mouseButtonClicked = event.button;
    
    const cursorDimX = event.pageX;
    const cursorDimY = event.pageY;

    var mouseButtonObject = {buttonClicked: mouseButtonClicked, clickCoordX: cursorDimX, clickCoordY: cursorDimY};
    //console.log("mouse button clicked:");
    // console.log(event.button);
    //console.log("mouse click cursor coordinates");
    //console.log(event.pageX);
    //console.log(event.pageY);

    fetch('https://emil-io.site/api/activity', {
            method: 'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
                //'X-Session-ID': session_id
                },
            body: JSON.stringify({
                //session: session_id,
                mouseClicked: mouseButtonObject,
                pageUserOn: pageUserOn
            })
        })
            .then(response => response.json())
            .catch((error) => {
                console.error('Error:', error);
            });
 });
