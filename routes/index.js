var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About page', pageText:'here som info'});
});

router.get ('/', function(req,res,next){
  res.render('index');
});

module.exports = router;
