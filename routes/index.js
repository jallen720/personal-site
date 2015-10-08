var express  = require('express');

var router = express.Router();

// Home page.
router.get('/', function(_, res) {
  res.render('index', {
    title: 'My Blog'
  });
});

// Partial templates for Angular.
router.get('/partials/:name', function(req, res) {
  res.render('partials/' + req.params.name);
});

module.exports = router;
