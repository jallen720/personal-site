var express         = require('express'),
    auth            = require('./middleware/auth'),
    getAdminAccount = require('./helpers/getAdminAccount'),
    updaters        = require('./helpers/updaters');

var router = express.Router();

router.all('/admin*', function(req, _, next) {
  getAdminAccount(next, function(admin) {
    req.admin = admin;
    next();
  });
});

router.param('property', function(req, _, next, property) {
  if (!updaters.hasOwnProperty(property)) {
    next(new Error('Cannot update "' + property + '" property!'));
  } else {
    req.updater = updaters[property];
    next();
  }
});

// Update admin property.
router.patch('/admin/:property', auth, function(req, res) {
  req.updater(
    req.admin,
    req.body,
    res
  );
});

module.exports = router;
