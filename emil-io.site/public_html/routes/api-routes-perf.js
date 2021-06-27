// api-routes-perf.js
// Initialize express router
let router = require('express').Router();

// Import perf controller
var perfController = require('./../controllers/perfController.js');

// Perf routes
router.route('/')
    .get(perfController.index)
    .post(perfController.new);

router.route('/:perf_id')
    .get(perfController.view)
    .patch(perfController.update)
    .put(perfController.update)
    .delete(perfController.delete); 

// Export API routes
module.exports = router;