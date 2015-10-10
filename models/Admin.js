var mongoose = require('mongoose'),
    crypto   = require('crypto');

var regexes = {
  username: /^[a-zA-Z0-9_]{6,24}$/,
  password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,24}$/
};

var AdminSchema = new mongoose.Schema({
  username: {
    type: String,

    validate: {
      validator: function(username) {
        return regexes.username.test(username);
      },

      message:
        'Username must have 6-24 characters and contain only alpha-numeric ch' +
        'aracters and underscores, no spaces.'
    }
  },

  hash: {
    type: String,

    required:
      'Password must have 6-24 characters and have atleast one lower case let' +
      'ter, one upper case letter, one digit, and no spaces'
  },

  salt: String
});

function isValidPassword(password) {
  return regexes.password.test(password);
}

function createHash(password, salt) {
  return crypto.pbkdf2Sync(password, salt, 1000, 64).toString('hex');
}

AdminSchema.methods.setPassword = function(password) {
  if (isValidPassword(password)) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = createHash(password, this.salt);
  } else {
    this.salt =
    this.hash = '';
  }
};

AdminSchema.methods.isPassword = function(password) {
  return this.hash === createHash(password, this.salt);
};

// function daysFromNow(days) {
//   return new Date(new Date().getDate() + days);
// }

// AdminSchema.methods.generateJWT = function() {
//   return jwt.sign(
//     {
//       _id: this._id,
//       username: this.username,
//       expiration: parseInt(daysFromNow(60).getTime() / 1000),
//     },
//     process.env.SECRET
//   );
// };

mongoose.model('Admin', AdminSchema);
