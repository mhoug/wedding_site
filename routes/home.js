var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render(
    'home', 
    {
      title: 'James Byrd and Teresa Parler Wedding! - #lovebyrds2017 #byrdsofafeather',
      url: req.params.url
    }
  );
});

module.exports = router;
