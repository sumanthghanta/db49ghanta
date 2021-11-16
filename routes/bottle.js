  
var express = require('express');
const bottle_controlers= require('../controllers/bottle');
var router = express.Router();

// A little function to check if we have an authorized user and continue on
//or redirect to login.
const secured = (req, res, next) => {
    if (req.user){
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
}

/* GET bottles */
router.get('/', bottle_controlers.bottle_view_all_Page );
module.exports = router;

/* GET detail bottle page */
router.get('/detail', bottle_controlers.bottle_view_one_Page);

/* GET create bottle page */
router.get('/create',secured, bottle_controlers.bottle_create_Page);

/* GET create update page */
router.get('/update',secured, bottle_controlers.bottle_update_Page);

/* GET create bottle page */
router.get('/delete',secured, bottle_controlers.bottle_delete_Page);