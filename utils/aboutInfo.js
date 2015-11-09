var loadEnvironment = require('./loadEnvironment');

loadEnvironment();

var mongoose       = require('mongoose'),
    aboutInfoModel = require('../models/AboutInfo.js'),
    getMessages    = require('./getMessages'),
    mongoConnect   = require('./mongoConnect');

mongoConnect(mongoose);

var AboutInfo = mongoose.model('AboutInfo');

function displayResult(err) {
  if (err) {
    getMessages(err.errors).forEach(function(errorMessage) {
      console.log('[ERROR] %s', errorMessage);
    });
  } else {
    console.log('About info created successfully!');
  }
}

new AboutInfo().save(function(err) {
  displayResult(err);
  mongoose.disconnect();
});
