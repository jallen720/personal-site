var express         = require('express'),
    auth            = require('./middleware/auth'),
    saveModel       = require('./helpers/saveModel'),
    sendError       = require('./helpers/sendError'),
    getAdminAccount = require('./helpers/getAdminAccount');

var router = express.Router();

var updaters = {
  email: function(admin, email, res) {
    admin.email = email;
    saveModel(admin, res);
  },

  password: function(admin, password, res) {
    admin.setPassword(password);
    saveModel(admin, res);
  },

  bio: function(admin, bio, res) {
    admin.bio = bio;
    saveModel(admin, res);
  },
};

function isValidNewPassword(password) {
  return password.new && password.confirm &&
         password.new === password.confirm;
}

var updateChecks = {
  email: function(admin, email, res) {
    if (!admin.isPassword(email.password)) {
      sendError(res, [ 'Invalid password!' ]);
    } else {
      updaters.email(admin, email.content, res);
    }
  },

  password: function(admin, password, res) {
    if (!admin.isPassword(password.current)) {
      sendError(res, [ 'Current password is invalid!' ]);
    } else if (!isValidNewPassword(password)) {
      sendError(res, [ 'New password does not match confirmation password!' ]);
    } else {
      updaters.password(admin, password.new, res);
    }
  },

  bio: function(admin, bio, res) {
    if (!admin.isPassword(bio.password)) {
      sendError(res, [ 'Invalid password!' ]);
    } else {
      updaters.bio(admin, bio.content, res);
    }
  },
};

router.all('/admin*', function(req, _, next) {
  getAdminAccount(next, function(admin) {
    req.admin = admin;
    next();
  });
});

// Get admin account info.
router.get('/admin', function(req, res) {
  res.send({
    email: req.admin.email,
    bio:   req.admin.bio,
  });
});

router.param('property', function(req, _, next, property) {
  if (!updateChecks.hasOwnProperty(property)) {
    next(new Error('Cannot update "' + req.property + '" property!'));
  } else {
    req.property = property;
    next();
  }
});

// Update admin property.
router.patch('/admin/:property', auth, function(req, res) {
  updateChecks[req.property](
    req.admin,
    req.body,
    res
  );
});

module.exports = router;
