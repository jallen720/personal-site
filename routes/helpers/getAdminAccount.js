var mongoose = require('mongoose');

var Admin = mongoose.model('Admin');

module.exports = function(next, callback) {
  Admin.findOne(function(err, admin) {
    if (err) {
      next(err);
    } else if (!admin) {
      next(new Error('An admin account has not been set up!'));
    } else {
      callback(admin);
    }
  });
};
