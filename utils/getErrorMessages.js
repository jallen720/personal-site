module.exports = function(errors) {
  var messages = [];

  for (var error in errors) {
    if (errors.hasOwnProperty(error)) {
      messages.push(errors[error].message);
    }
  }

  return messages;
};

