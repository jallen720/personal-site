var mongoose      = require('mongoose'),
    bodyValidator = require('./helpers/tinymceValidator');

const REQUIRED_MESSAGE = 'Portfolio item must have a {PATH}!'

var PortfolioItemSchema = new mongoose.Schema({
  title: {
    type:     String,
    required: REQUIRED_MESSAGE,
  },

  summary: {
    type:     String,
    required: REQUIRED_MESSAGE,
  },

  imageURL: {
    type:     String,
    required: REQUIRED_MESSAGE,
  },

  playStoreURL: String,
  iTunesURL:    String,

  priority: {
    type:     Number,
    required: REQUIRED_MESSAGE,
    min:      0,
    default:  0,
  },

  body: {
    type: String,

    validate: {
      validator: bodyValidator,
      message:   REQUIRED_MESSAGE,
    },
  },
});

mongoose.model('PortfolioItem', PortfolioItemSchema);
