// activityController.js

// Import contact model
Activity = require('./../models/activityModel.js');

// Handle index actions
exports.index = function (req, res) {
    Activity.get(function (err, act) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            //status: "success",
            //message: "OG Activity Object retrieved successfully",
             data: act
            //actid: req.params.act_id
        });
    });
};


// Handle create activity object actions
exports.new = function (req, res) {
    var act = new Activity();
    //console.log(req.userAgent);
    act.session = req.sessionID; //? req.sessionID : act.session; 
    // was using req.body.session b4 express sesssions
    act.cursorCoord = req.body.cursorCoord;
    act.mouseClicked = req.body.mouseClicked;
    act.scrollingCoord = req.body.scrollingCoord;
    //act.scrollingCoord.push(req.body.scrollingCoord);
    act.keyPressed = req.body.keyPressed;
    act.idleTime = req.body.idleTime;
    act.timeUserEnteredPage = req.body.timeUserEnteredPage;
    act.timeUserLeftPage = req.body.timeUserLeftPage;
    act.pageUserOn = req.body.pageUserOn;


    //static.session = req.get('X-Session-ID');
    //static.session = req.body.session;
    //console.log("sessionid = ");
    //console.log(static.sessionid);

    // save the contact and check for errors
    act.save(function (err) {
        if (err)
         res.json(err);

res.json({
            //message: 'New OG activity object created!',
            data: act
            //sessiontest: act.session, actData: act
            //actid: req.params.act_id

        });
    });
};

// Handle view activity info
exports.view = function (req, res) {
    // Activity.findById(req.params.act_id, function (err, act) {
    //Activity.find({session: 'sm3lvm2las1c0lo4vtcunl761n'}, function (err, act) { // this works
    Activity.find({session: `${req.params.act_id}`}, function (err, act) {
        if (err)
            res.send(err);
        res.json({
            //message: 'OG Activity details loading..',
            data: act
            //sessiontest: act.session, actData: act
            //actid: req.params.act_id

        });
    });
};


// Handle update contact info
exports.update = function (req, res) {
    //Activity.findById(req.params.act_id, function (err, act) {
    //Activity.findById(req.body.session, function (err, act) {
    // Activity.find({session: 'sm3lvm2las1c0lo4vtcunl761n'}, function (err, act) { // this works
    // find() doc: https://www.geeksforgeeks.org/mongoose-find-function/
    Activity.find({session: `${req.params.act_id}`}, function (err, act) {
            if (err)
                res.send(err);
            
            //act.session = req.body.session;
            act.cursorCoord = req.body.cursorCoord ? req.body.cursorCoord : act.cursorCoord;
            act.mouseClicked = req.body.mouseClicked;
            act.scrollingCoord = req.body.scrollingCoord;
            //act.scrollingCoord.push(req.body.scrollingCoord);
            act.keyPressed = req.body.keyPressed;
            act.idleTime = req.body.idleTime;
            act.timeUserEnteredPage = req.body.timeUserEnteredPage;
            act.timeUserLeftPage = req.body.timeUserLeftPage;
            act.pageUserOn = req.body.pageUserOn;            

    // save the contact and check for errors
            act.save(function (err) {
                if (err)
                    res.json(err);
                res.json({
                    //message: 'OG Activity Info updated',
                    data: act
                    //sessiontest: act.session, actData: act
                    
                });
            });
        });
    };


// Handle delete activity object
// may need to change this in the future or revert previous code
// that handles req.params.act_id
exports.delete = function (req, res) {
    Activity.remove({
        _id: req.params.act_id
    }, function (err, act) {
        if (err)
            res.send(err);
res.json({
            //status: "success",
            //message: 'OG Activity Object deleted'
        });
    });
};


