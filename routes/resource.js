var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var bottle_controller = require('../controllers/bottle'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// bottle ROUTES /// 
 
// POST request for creating a bottle.  
router.post('/bottle', bottle_controller.bottle_create_post); 
 
// DELETE request to delete bottle. 
router.delete('/bottle/:id', bottle_controller.bottle_delete); 
 
// PUT request to update bottle. 
router.put('/bottle/:id', bottle_controller.bottle_update_put); 
 
// GET request for one bottle. 
router.get('/bottle/:id', bottle_controller.bottle_detail); 
 
// GET request for list of all bottle items. 
router.get('/bottle', bottle_controller.bottle_list);

/* GET detail bottle page */ 
router.get('/detail', bottle_controlers.bottle_view_one_Page);
 
module.exports = router; 