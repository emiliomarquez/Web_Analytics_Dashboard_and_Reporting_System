// api-routes-activity.js

// Initialize express router
let router = require('express').Router();
const bodyParse = require('body-parser');

//router.use(bodyParse.json());

// Import activity controller
var actController = require('./../controllers/activityController.js');

// Activity routes
router.route('/')
    .get(actController.index)
    .post(actController.new);

// req.params.act_id is set below
// so a call to https://emil-io.site/api/activity/sm3lvm2las1c0lo4vtcunl761n
// will set req.params.act_id = sm3lvm2las1c0lo4vtcunl761n
// https://www.geeksforgeeks.org/express-js-req-params-property/
router.route('/:act_id')
    .get(actController.view)
    .patch(actController.update)
    .put(actController.update)
    .delete(actController.delete);

// Export API routes
module.exports = router;