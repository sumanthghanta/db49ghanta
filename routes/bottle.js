var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('bottle', { title: 'Search Results Bottle' });
});

module.exports = router;