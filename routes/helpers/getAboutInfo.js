var mongoose = require('mongoose');

var AboutInfo = mongoose.model('AboutInfo');

module.exports = function(next, callback) {
  AboutInfo.findOne(function(err, aboutInfo) {
    if (err) {
      next(err);
    }
    else if (!aboutInfo) {
      next(new Error('Admin "about" info has not been set up!'));
    }
    else {
      callback(aboutInfo);
    }
  });
};
