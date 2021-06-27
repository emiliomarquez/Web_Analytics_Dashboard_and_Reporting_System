// activityModel.js
var mongoose = require('mongoose');

// cursorCoord
// mouseClicked
// scrollingCoord
// keyPressed
// idleTime Object
 // timeIdleEnded
 // totalTimeIdle
// timeUserEnteredPage
// timeUserLeftPage
// pageUserOn

// Setup schema
var activitySchema = mongoose.Schema({
    session: {
        type: String,
        default: ""
    },
    cursorCoord: {
        type: {},
        default: {cursorCoordX: 0, cursorCoordY: 0}
    },
    mouseClicked: {
        type: {},
        default: {buttonClicked: "", clickCoordX: 0, clickCoordY: 0}
    },
    scrollingCoord: {
        type: {},
        default: {scrollCoordX: 0, scrollCoordY: 0}
    },
    keyPressed: {
        type: String,
        default: ""
    },
    idleTime: {
        type: {},
        default: {timeIdleEnded: 0, totalTimeIdle: 0}
    },
    timeUserEnteredPage: {
        type: Number,
        default: 0
    },
    timeUserLeftPage: {
        type: String,
        default: ""
    },
    pageUserOn: {
        type: String,
        default: ""
    }
});

// Export Activity model
var Activity = module.exports = mongoose.model('activity', activitySchema);
module.exports.get = function (callback, limit) {
    Activity.find(callback).limit(limit);
}

