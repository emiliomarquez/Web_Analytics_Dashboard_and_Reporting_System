// perfModel.js

var mongoose = require('mongoose');

// Setup schema
var perfSchema = mongoose.Schema({
    session: {
        type: String,
        default: ""
    },
    timingObject: {
        type: {},
        default: {connectEnd: 0, 
            connectStart: 0,
            domComplete: 0,
            domContentLoadedEventEnd: 0,
            domContentLoadedEventStart: 0,
            domInteractive: 0,
            domLoading: 0,
            domainLookupEnd: 0,
            domainLookupStart: 0,
            fetchStart: 0,
            loadEventEnd: 0,
            loadEventStart: 0,
            navigationStart: 0,
            redirectEnd: 0,
            redirectStart: 0,
            requestStart: 0,
            responseEnd: 0,
            responseStart: 0,
            secureConnectionStart: 0,
            unloadEventEnd: 0,
            unloadEventStart: 0 
        }
    },
    pageStartLoadTime: {
        type: Number,
        default: 0
    },
    pageEndLoadTime: {
        type: Number,
        default: 0
    },
    pageTotalLoadTime: {
        type: Number,
        default: 0
    }
});

// Export Static model
var Perf = module.exports = mongoose.model('perf', perfSchema);
module.exports.get = function (callback, limit) {
    Perf.find(callback).limit(limit);
}