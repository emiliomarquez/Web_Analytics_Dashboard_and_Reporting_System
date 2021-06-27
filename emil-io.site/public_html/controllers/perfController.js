// perfController.js

// Import perf model
Perf = require('./../models/perfModel.js');

// Handle index actions
exports.index = function (req, res) {
    Perf.get(function (err, perf) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            //status: "success",
            //message: "Perf Activity Object retrieved successfully",
            data: perf
        });
    });
};


// Handle create perf object actions
exports.new = function (req, res) {
    var perf = new Perf();
    perf.session = req.sessionID; // ? req.body.session : perf.session;
    perf.timingObject = req.body.timingObject;
    perf.pageStartLoadTime = req.body.pageStartLoadTime;
    perf.pageEndLoadTime = req.body.pageEndLoadTime;
    perf.pageTotalLoadTime = req.body.pageTotalLoadTime;
    

    // save the contact and check for errors
    perf.save(function (err) {
        if (err)
         res.json(err);
res.json({
            //message: 'New perf activity object created!',
            data: perf
        });
    });
};

// Handle view contact info
exports.view = function (req, res) {
    Perf.findById(req.params.perf_id, function (err, perf) {
        if (err)
            res.send(err);
        res.json({
            //message: 'Perf Activity details loading..',
            data: perf
        });
    });
};

// Handle update perf info
exports.update = function (req, res) {
    Perf.findById(req.params.perf_id, function (err, perf) {
            if (err)
                res.send(err);
            // need session or else it will be default value
            perf.session = req.body.session;
            perf.timingObject = req.body.timingObject
            perf.pageStartLoadTime = req.body.pageStartLoadTime;
            perf.pageEndLoadTime = req.body.pageEndLoadTime;
            perf.pageTotalLoadTime = req.body.pageTotalLoadTime;

    // save the perf and check for errors
            perf.save(function (err) {
                if (err)
                    res.json(err);
                res.json({
                    //message: 'Perf Activity Info updated',
                    data: perf
                });
            });
        });
    };


// Handle delete perf object
exports.delete = function (req, res) {
    Perf.remove({
        _id: req.params.perf_id
    }, function (err, perf) {
        if (err)
            res.send(err);
res.json({
            //status: "success",
            //message: 'Perf Activity Object deleted'
        });
    });
};
