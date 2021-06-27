// staticController.js

// Import contact model
Static = require('./../models/staticModel.js');

// Handle index actions
exports.index = function (req, res) {
    Static.get(function (err, statics) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        
        res.json({
            //status: "success",
            //message: "Static Activity Object retrieved successfully",
            data: statics
        }); 
    });
};

// Handle create static object actions
exports.new = function (req, res) {
    var static = new Static();
    //console.log(req.body);
    static.session = req.sessionID; // ? req.body.session : static.session;
    static.userAgent = req.body.userAgent;
    static.userLang = req.body.userLang;
    static.cookiesEnabled = req.body.cookiesEnabled;
    static.imagesEnabled = req.body.imagesEnabled;
    static.jsEnabled = req.body.jsEnabled;
    static.cssEnabled = req.body.cssEnabled;
    static.screenDim = req.body.screenDim;
    static.windowDim = req.body.windowDim;
    static.networkType = req.body.networkType;
    //static.session = req.get('X-Session-ID');
    //static.session = req.body.session;
    //console.log("sessionid = ");
    //console.log(static.sessionid);

    // save the contact and check for errors
    static.save(function (err) {
        if (err)
         res.json(err);
res.json([{
            //message: 'New static activity object created!',
            data: static
        }]);
    });
};

// Handle view static info
exports.view = function (req, res) {
    Static.findById(req.params.static_id, function (err, static) {
        if (err)
            res.send(err);
        res.json({
            //message: 'Static Activity details loading..',
            data: static
        }); 
    });
};

// Handle update static info
exports.update = function (req, res) {
    Static.findById(req.params.static_id, function (err, static) {
            if (err)
                res.send(err);
            static.session = req.body.session;
            static.userAgent = req.body.userAgent;
            static.userLang = req.body.userLang;
            static.cookiesEnabled = req.body.cookiesEnabled;
            static.imagesEnabled = req.body.imagesEnabled;
            static.jsEnabled = req.body.jsEnabled;
            static.cssEnabled = req.body.cssEnabled;
            static.screenDim = req.body.screenDim;
            static.windowDim = req.body.windowDim;
            static.networkType = req.body.networkType;

    // save the contact and check for errors
            static.save(function (err) {
                if (err)
                    res.json(err);
                res.json({
                    //message: 'Static Activity Info updated',
                    data: static
                });
            });
        });
    };

// Handle delete static object
exports.delete = function (req, res) {
    Static.remove({
        _id: req.params.static_id
    }, function (err, static) {
        if (err)
            res.send(err);
res.json({
            //status: "success",
            //message: 'Static Activity Object deleted'
        });
    });
};