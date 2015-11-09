var express      = require('express'),
    auth         = require('./middleware/auth'),
    getAboutInfo = require('./helpers/getAboutInfo'),
    saveModel    = require('./helpers/saveModel');

var router = express.Router();

router.all('/aboutInfo', function(req, _, next) {
  getAboutInfo(next, function(aboutInfo) {
    req.aboutInfo = aboutInfo;
    next();
  });
});

function updateAboutInfo(aboutInfo, updatedAboutInfo, res) {
  aboutInfo.title    = updatedAboutInfo.title;
  aboutInfo.summary  = updatedAboutInfo.summary;
  aboutInfo.imageURL = updatedAboutInfo.imageURL;
  aboutInfo.body     = updatedAboutInfo.body;
  saveModel(aboutInfo, res);
}

router.route('/aboutInfo')
  // Get about info.
  .get(function(req, res) {
    res.send(req.aboutInfo);
  })

  .patch(auth, function(req, res) {
    updateAboutInfo(req.aboutInfo, req.body, res);
  });

module.exports = router;
