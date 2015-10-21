var saveModel = require('./saveModel'),
    sendError = require('./sendError');

function update(admin, res, updateCB) {
  updateCB();
  saveModel(admin, res);
}

function isValidNewPassword(password) {
  return password.new && password.confirm &&
         password.new === password.confirm;
}

module.exports = {
  email: function(admin, email, res) {
    if (!admin.isPassword(email.password)) {
      sendError(res, 'Invalid password!');
    } else {
      update(admin, res, function() {
        admin.email = email.content;
      });
    }
  },

  password: function(admin, password, res) {
    if (!admin.isPassword(password.current)) {
      sendError(res, 'Current password is invalid!');
    } else if (!isValidNewPassword(password)) {
      sendError(res, 'New password does not match confirmation password!');
    } else {
      update(admin, res, function() {
        admin.setPassword(password.new);
      });
    }
  },

  bio: function(admin, bio, res) {
    if (!admin.isPassword(bio.password)) {
      sendError(res, 'Invalid password!');
    } else {
      update(admin, res, function() {
        admin.bio = bio.content;
      });
    }
  },
};
