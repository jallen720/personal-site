var express = require('express');

var router = express.Router();

function getPartialPath(partialName) {
  return partialName.replace(/\./g, '/');
}

router.param('partialName', function(req, _, next, partialName) {
  req.partialPath = getPartialPath(partialName);
  next();
});

// Partial templates for Angular states.
router.get('/partials/:partialName', function(req, res) {
  res.render('partials/' + req.partialPath);
});

module.exports = router;
