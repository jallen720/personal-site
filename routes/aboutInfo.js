var express      = require('express'),
    getAboutInfo = require('./helpers/getAboutInfo');

var router = express.Router();

router.all('/aboutInfo*', function(req, _, next) {
  getAboutInfo(next, function(aboutInfo) {
    req.aboutInfo = aboutInfo;
    next();
  });
});

router.route('/aboutInfo')
  // Get about info.
  .get(function(req, res) {
    res.send(req.aboutInfo);
  });

module.exports = router;
