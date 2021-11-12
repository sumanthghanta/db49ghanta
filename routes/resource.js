var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var bottle_controller = require('../controllers/bottle'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// COSTUME ROUTES /// 
 
// POST request for creating a Costume.  
router.post('/bottle', bottle_controller.bottle_create_post); 
 
// DELETE request to delete Costume. 
router.delete('/bottle/:id', bottle_controller.bottle_delete); 
 
// PUT request to update Costume. 
router.put('/bottle/:id', bottle_controller.bottle_update_put); 
 
// GET request for one bottle. 
router.get('/bottle/:id', bottle_controller.bottle_detail); 
 
// GET request for list of all bottle items. 
router.get('/bottle', bottle_controller.bottle_list);
 
module.exports = router; 