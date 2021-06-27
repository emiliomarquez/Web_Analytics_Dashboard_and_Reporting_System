// staticModel.js

var mongoose = require('mongoose');

// Setup schema
var staticSchema = mongoose.Schema({
    session: {
        type: String,
        default: ""
    },
    userAgent: {
        type: String,
        default: ""
    },
    userLang: {
        type: String,
        default: ""
    },
    cookiesEnabled: {
        type: Boolean,
        default: false,
    },
    imagesEnabled: {
        type: Boolean,
        default: false,
    },
    jsEnabled: {
        type: Boolean,
        default: false,
    },
    cssEnabled: {
        type: Boolean,
        default: false,
    },
    screenDim: {
        type: {},
        default: {screenWidth: 0, screenHeight: 0}
    },
    windowDim: {
        type: {},
        default: {windowWidth: 0, windowHeight: 0}
    },
    networkType: {
        type: String,
        default: ""
    }
});

// Export Static model
var Static = module.exports = mongoose.model('static', staticSchema);
module.exports.get = function (callback, limit) {
    Static.find(callback).limit(limit);
}