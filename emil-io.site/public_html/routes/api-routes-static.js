// api-routes-static.js
// Initialize express router
let router = require('express').Router();

// Set default API response
/*
router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!'
    });
});
*/

// Import static controller
var staticController = require('./../controllers/staticController.js');

// Static routes
router.route('/')
    .get(staticController.index)
    .post(staticController.new);

router.route('/:static_id')
    .get(staticController.view)
    .patch(staticController.update)
    .put(staticController.update)
    .delete(staticController.delete); 

// Export API routes
module.exports = router;