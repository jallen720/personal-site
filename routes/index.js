var express       = require('express'),
    readRecursive = require('fs-readdir-recursive');

var router = express.Router();
var ngScripts = readRecursive('public/javascripts');

// Home page.
router.get('/', function(req, res) {
  res.render('index', {
    title:   'My Blog',
    scripts: ngScripts,
  });
});

// Partial templates for Angular.
router.get('/partials/:name', function(req, res) {
  res.render('partials/' + req.params.name);
});

module.exports = router;
