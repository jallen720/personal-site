var mongoose = require('mongoose');

var requiredMessage = 'Post must have a {PATH}!'

function stripped(body) {
  return body.replace(/(<([^>]+)>)/gi, '') // Remove HTML tags
             .replace(/&nbsp;/gi, '')      // Remove non-breakables spaces
             .trim();                      // Trim remaining trailing spaces
}

var PostSchema = new mongoose.Schema({
  title: {
    type:     String,
    required: requiredMessage,
  },

  date:     Date,
  imageURL: String,

  body: {
    type: String,

    validate: {
      validator: function(body) {
        return body && stripped(body) !== '';
      },

      message: requiredMessage,
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
