var mongoose = require('mongoose');

var requiredMessage = 'Post must have a {PATH}!'

var PostSchema = new mongoose.Schema({
  title: {
    type:     String,
    required: requiredMessage
  },

  body: {
    type:     String,
    required: requiredMessage
  },

  date: Date,
});

PostSchema.pre('save', function(next) {
  if (!this.date) {
    this.date = new Date();
  }

  next();
});

mongoose.model('Post', PostSchema);
