// userController.js

'use strict';

var mongoose = require('mongoose');
let jwt = require('jsonwebtoken');
let bcrypt = require('bcrypt');

let User = require('./../models/userModel.js');

// Handle index actions
exports.index = function (req, res) {
  User.get(function (err, users) {
      if (err) {
          res.json({
              status: "error",
              message: err,
          });
      }
      
      res.json({
          //status: "success",
          //message: "Static Activity Object retrieved successfully",
          data: users
      }); 
  });
};

exports.register = function(req, res) {
  var newUser = new User(req.body);
  newUser.hash_password = bcrypt.hashSync(req.body.password, 10);
  newUser.save(function(err, user) {
    if (err) {
      return res.status(400).send({
        message: err
      });
    } else {
      user.hash_password = undefined;
      return res.json(user);
    }
  });
};

// find out how to include email and password in findOne function
// for now we will settle for just username
exports.sign_in = function(req, res) {

  var cond;
  if(req.body.username){
    cond = {username: req.body.username};
  }else{
    cond = {email: req.body.email};
  }

  //let conditions = !!req.body.username ? {username: req.body.username} : {email: req.body.email};
  /*
  var condition = {};
  var test = 420;
  if(req.body.username && !!req.body.email){
    test = 0;
     condition = {username: req.body.username};
  }
  
  if(req.body.email && !!req.body.username){
    test = 1;
    condition = {email: req.body.email};
  }
  test = 2323; */
  
  // solution found from here:
  // https://stackoverflow.com/questions/64017660/node-js-how-to-allow-user-to-login-with-username-or-email

  User.findOne({
    $or: [ {email: req.body.username}, {username: req.body.username} ]
    /*
    function () {
      if(test===1){
        return {email: req.body.email};
      }else if(test===0){
        return {username: req.body.username};
      } 
    } */
  }, function(err, user) {
    if (err) throw err;
    if (!user || !user.comparePassword(req.body.password)) {
      return res.status(401).json({ message: 'Authentication failed. Invalid user or password.' });
    }
    return res.json({ token: jwt.sign({ email: user.email, username: user.username, access: user.access, _id: user._id }, 'RESTFULAPIs') });
  });
};

// Handle update User info via PUT request
exports.update = function (req, res) {
  let user = req.body.username;
  let sentPass = req.body.password;
  let checkPass = sentPass.substr(0, 1);
  var finalPass;

  

  if(checkPass.valueOf() == new String("$").valueOf()){
    // dont encrypt pass again just set sentPass as hash_password
    finalPass = sentPass;
  }else{
    // encrypt pass
    finalPass = bcrypt.hashSync(req.body.password, 10);
  } 
  // what if they decide to update username then what???
  //newUser.hash_password = bcrypt.hashSync(req.body.password, 10);


  User.findOneAndUpdate(
    {"_id": req.body._id},
    //{$or: [ {email: req.body.email}, {username: req.body.username}, {access: req.body.access}, {hash_password: req.body.password} ]},
    { $set: { "access": req.body.access, "username": req.body.username, "email": req.body.email, "hash_password": finalPass, } },
    {upset: false, returnNewDocument: true }
    
    )
    .exec((err, user) => {
      if(err)
        return res.status(500).json({code: 500, message: 'There was an error updating the user', error: err})
      res.status(200).json({code: 200, message: 'User updated via PUT ', updatedUser: user})
    });


  };


exports.loginRequired = function(req, res, next) {
  if (req.user) {
    next();
  } else {

    return res.status(401).json({ message: 'Unauthorized user!!' });
  }
};

exports.profile = function(req, res, next) {
  if (req.user) {
    res.send(req.user);
    next();
  } 
  else {
   return res.status(401).json({ message: 'Invalid tokent' });
  }
};

// Handle delete user object
// utilized this resource to achieve code below:
// https://www.codota.com/code/javascript/functions/express/Router/delete
exports.delete = function (req, res) {
  let user = req.body.username;

  User.findOneAndDelete({
    username: user
    })
    .exec((err, user) => {
      if(err)
        return res.status(500).json({code: 500, message: 'There was an error deleting the post', error: err})
      res.status(200).json({code: 200, message: 'User deleted', deletedUser: user})
    });

};

