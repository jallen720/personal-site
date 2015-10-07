var express = require('express'),
    readdir = require('fs-readdir-recursive');

var router  = express.Router(),
    scripts = readdir('public/javascripts');

// Home page.
router.get('/', function(req, res) {
  res.render('index', {
    title:   'My Blog',
    scripts: scripts,
  });
});

// Partial templates for Angular.
router.get('/partials/:name', function(req, res) {
  res.render('partials/' + req.params.name);
});

module.exports = router;
