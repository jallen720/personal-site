var mongoose = require('mongoose');

var Edit = mongoose.model('Edit');

function isValid(reason) {
  return reason !== undefined &&
         reason !== '';
}

function createNewEdit(reason, post) {
  var edit = new Edit();
  edit.reason = reason;
  edit.post   = post;
  edit.save();
  return edit;
}

module.exports = function(reason, post, callback) {
  if (isValid(reason)) {
    callback(createNewEdit(reason, post));
  }
};
