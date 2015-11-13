var express         = require('express'),
    sendError       = require('./helpers/sendError'),
    getAdminAccount = require('./helpers/getAdminAccount');

var router = express.Router();

function checkLogin(admin, credentials, res) {
  if (!admin.isValidCredentials(credentials)) {
    sendError(res, 'Invalid e-mail and/or password!');
  }
  else {
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
