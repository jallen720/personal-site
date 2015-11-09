var mongoose      = require('mongoose'),
    bodyValidator = require('./helpers/tinymceValidator');

const REQUIRED_MESSAGE = '"About" info must have a {PATH}!'

var AboutInfoSchema = new mongoose.Schema({
  title: {
    type:     String,
    required: REQUIRED_MESSAGE,
    default:  'Your Name',
  },

  summary: {
    type:     String,
    required: REQUIRED_MESSAGE,
    default:  'Something about you',
  },

  imageURL: {
    type:     String,
    required: REQUIRED_MESSAGE,
    default:  'mysite.com/mypic',
  },

  body: {
    type: String,

    validate: {
      validator: bodyValidator,
      message:   REQUIRED_MESSAGE,
    },

    default: '<p>Hello, world!</p>',
  },
});

mongoose.model('AboutInfo', AboutInfoSchema);
