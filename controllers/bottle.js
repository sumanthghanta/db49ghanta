var bottle = require('../models/bottle'); 
 
// List of all bottle 
exports.bottle_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: bottle list'); 
}; 
 
// for a specific bottle. 
exports.bottle_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: bottle detail: ' + req.params.id); 
}; 
 
// Handle bottle create on POST. 
exports.bottle_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: bottle create POST'); 
}; 
 
// Handle bottle delete form on DELETE. 
exports.bottle_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: bottle delete DELETE ' + req.params.id); 
}; 
 
// Handle bottle update form on PUT. 
exports.bottle_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: bottle update PUT' + req.params.id); 
}; 