var read        = require('read'),
    mongoose    = require('mongoose'),
    adminModel  = require('../models/Admin.js'),
    getMessages = require('./getMessages');

mongoose.connect('mongodb://localhost/blog');

var Admin = mongoose.model('Admin');

function displayResult(err) {
  if (err) {
    getMessages(err.errors).forEach(function(errorMessage) {
      console.log('[ERROR] %s', errorMessage);
    });
  } else {
    console.log('Admin account created successfully!');
  }
}

function setAdmin(email, password) {
  Admin.findOne(function(err, existingAdmin) {
    var admin = existingAdmin || new Admin();
    admin.email = email;
    admin.setPassword(password);

    admin.save(function(err) {
      displayResult(err);
      mongoose.disconnect();
    });
  });
}

read({ prompt: 'Admin E-mail: ' }, function(_, email) {
read({ prompt: 'Admin Password: ', silent: true }, function(_, password) {
  setAdmin(email, password);
});
});
