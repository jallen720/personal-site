var mongoose     = require('mongoose'),
    crypto       = require('crypto'),
    jwt          = require('jsonwebtoken'),
    bioValidator = require('./helpers/tinymceValidator');

var regexes = {
  email:    /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i,
  password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,24}$/,
};

const INVALID_EMAIL_MESSAGE = 'The e-mail you entered is invalid!';

var AdminSchema = new mongoose.Schema({
  email: {
    type: String,

    validate: {
      validator: function(email) {
        return regexes.email.test(email);
      },

      message: INVALID_EMAIL_MESSAGE,
    },

    required: INVALID_EMAIL_MESSAGE,
  },

  bio: {
    type:    String,
    default: 'This is your bio...',

    validate: {
      validator: bioValidator,
      message:   'Your bio can\'t be empty!',
    },
  },

  hash: {
    type: String,

    required:
      'Password must have 6-24 characters and atleast one lower-case letter, ' +
      'one upper-case letter, one digit, and no spaces.',
  },

  salt: String,
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
  return password && this.hash === createHash(password, this.salt);
};

AdminSchema.methods.isEmail = function(email) {
  return email && this.email === email
}

AdminSchema.methods.isValidCredentials = function(credentials) {
  return this.isEmail(credentials.email) &&
         this.isPassword(credentials.password);
};

function daysFromNow(days) {
  var today = new Date(),
      exp   = new Date(today);

  exp.setDate(today.getDate() + days);
  return exp;
}

function createPayload() {
  return {
    expiration: parseInt(daysFromNow(60).getTime() / 1000),
  };
}

AdminSchema.methods.generateJWT = function() {
  return jwt.sign(createPayload(), process.env.SECRET);
};

mongoose.model('Admin', AdminSchema);
