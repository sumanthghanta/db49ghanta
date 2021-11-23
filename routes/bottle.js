  
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

// A little function to check if we have an authorized user and continue on 
//or 
// redirect to login. 
const secured = (req, res, next) => { 
  if (req.user){ 
    return next(); 
  } 
  req.session.returnTo = req.originalUrl; 
  res.redirect("/login"); 
}

/* GET create bottle page */ 
router.get('/create', bottle_controlers.bottle_create_Page);

/* GET update bottle page */ 
router.get('/update',secured, bottle_controlers.bottle_update_Page);

/* GET delete bottle page */ 
router.get('/delete', bottle_controlers.bottle_delete_Page);

module.exports = router;
