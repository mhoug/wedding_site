var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: '#lovebyrds2017', url: req.params.url });
});

module.exports = router;
