var mongoose      = require('mongoose'),
    bodyValidator = require('./helpers/tinymceValidator');

const REQUIRED_MESSAGE = 'Post must have a {PATH}!'

var PostSchema = new mongoose.Schema({
  title: {
    type:     String,
    required: REQUIRED_MESSAGE,
  },

  date:     Date,
  imageURL: String,

  body: {
    type: String,

    validate: {
      validator: bodyValidator,
      message:   REQUIRED_MESSAGE,
    },
  },
});

PostSchema.pre('save', function(next) {
  if (!this.date) {
    this.date = new Date();
  }

  next();
});

mongoose.model('Post', PostSchema);
