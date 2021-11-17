  
var express = require('express');
const bottle_controlers= require('../controllers/bottle');
var router = express.Router();

/* GET bottle */
router.get('/', bottle_controlers.bottle_view_all_Page); 
module.exports = router;

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('bottle', { title: 'Search Results bottle' });
});


/* GET detail bottle page */ 
router.get('/detail', bottle_controlers.bottle_view_one_Page); 

/* GET create bottle page */ 
router.get('/create', bottle_controlers.bottle_create_Page);

/* GET create bottle page */ 
router.get('/update', bottle_controlers.bottle_update_Page);

module.exports = router;
