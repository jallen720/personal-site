var mongoose      = require('mongoose'),
    bodyValidator = require('./helpers/tinymceValidator');

const REQUIRED_MESSAGE = 'Post must have a {PATH}!'

var PostSchema = new mongoose.Schema({
  imageURL: String,

  title: {
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

  date: {
    type:    Date,
    default: Date.now,
  },

  edits: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref:  'Edit',
    },
  ],
});

mongoose.model('Post', PostSchema);
