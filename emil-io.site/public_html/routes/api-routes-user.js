// api-routes-user.js
//'use strict';

// Initialize express router
let router = require('express').Router();
const bodyParse = require('body-parser');

// Import activity controller
var userController = require('./../controllers/userController.js');

/*
    TODO:
    - need to add a get, update, and delete option for users
    which will look like something below

    // GET emil-io.site/api/users
    router.route('/')
        .get(userController.index)
*/

// User routes

// GET emil-io.site/api/users/
router.route('/')
    .get(userController.index)
    .put(userController.update)
    .delete(userController.delete)
    .post(userController.register);
    


// POST emil-io.site/api/users/tasks
router.route('/tasks')
    .post(userController.loginRequired, userController.profile);
    //.post(userController.profile);
    //.post(userController.loginRequired, userController.profile);



// POST emil-io.site/api/users/auth/register
/*
router.route('/auth/register')
    .post(userController.register);
    */

// POST emil-io.site/api/users/auth/sign_in 
router.route('/auth/sign_in')
    .post(userController.sign_in);

/*
router.route('/:username')
    .delete(userController.delete);
    */



module.exports = router;

/*
module.exports = function(app) {
    var userHandlers = require('./../controllers/userController.js');
    app.route('/tasks')
        .post(userHandlers.loginRequired, userHandlers.profile);
    app.route('/auth/register')
        .post(userHandlers.register);
   app.route('/auth/sign_in')
        .post(userHandlers.sign_in);
};
*/