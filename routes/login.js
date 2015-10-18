var express         = require('express'),
    sendError       = require('./helpers/sendError'),
    isValidPassword = require('./helpers/isValidPassword'),
    getAdminAccount = require('./helpers/getAdminAccount');

var router = express.Router();

function isValidEmail(admin, email) {
  return email && admin.email == email;
}

function isValidCredentials(admin, credentials) {
  return isValidEmail(admin, credentials.email) &&
         isValidPassword(admin, credentials.password)
}

function checkLogin(admin, credentials, res) {
  if (!isValidCredentials(admin, credentials)) {
    sendError(res, [ 'Invalid e-mail and/or password!' ]);
  } else {
    res.send({
      token: admin.generateJWT(),
    });
  }
}

// Login to admin account.
router.post('/login', function(req, res, next) {
  getAdminAccount(next, function(admin) {
    checkLogin(admin, req.body, res);
  });
});

module.exports = router;
