var read             = require('read'),
    mongoose         = require('mongoose'),
    adminModel       = require('../models/Admin.js'),
    getErrorMessages = require('./getErrorMessages');

mongoose.connect('mongodb://localhost/blog');

var Admin = mongoose.model('Admin');

function displayResult(err) {
  if (err) {
    getErrorMessages(err.errors)
      .forEach(function(errorMessage) {
        console.log('[ERROR] %s', errorMessage);
      });
  } else {
    console.log('Admin account created successfully!');
  }
}

function setAdmin(username, password) {
  Admin.findOne(function(err, existingAdmin) {
    var admin = existingAdmin || new Admin();
    admin.username = username;
    admin.setPassword(password);

    admin.save(function(err) {
      displayResult(err);
      mongoose.disconnect();
    });
  });
}

read({ prompt: 'Admin Username: ' }, function(_, username) {
read({ prompt: 'Admin Password: ', silent: true }, function(_, password) {
  setAdmin(username, password);
});
});
