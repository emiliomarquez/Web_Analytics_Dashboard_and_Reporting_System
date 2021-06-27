// userModel.js

'use strict';

var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

/**
 * User Schema
 * For Access:
 *     0/false = Basic Access
 *     1/true = Admin Access
 * 
 */
var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    unique:true,
    lowercase: true,
    trim: true
  },
  access: {
    type: String,
    default: "basic"
  },
  hash_password: {
    type: String
  },
  created: {
    type: Date,
    default: Date.now
  }
});

UserSchema.methods.comparePassword = function(password) {
  return bcrypt.compareSync(password, this.hash_password);
};

//mongoose.model('User', UserSchema);

var User = module.exports = mongoose.model('User', UserSchema);

module.exports.get = function (callback, limit) {
  User.find(callback).limit(limit);
}


