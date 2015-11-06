var mongoose      = require('mongoose'),
    bodyValidator = require('./helpers/tinymceValidator');

const REQUIRED_MESSAGE = 'Portfolio item must have a {PATH}!'

var PortfolioItemSchema = new mongoose.Schema({
  imageURL:     String,
  playStoreURL: String,
  iTunesURL:    String,

  title: {
    type:     String,
    required: REQUIRED_MESSAGE,
  },

  summary: {
    type:     String,
    required: REQUIRED_MESSAGE,
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
