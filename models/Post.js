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

  date: {
    type:     String,
    required: requiredMessage
  },
});

mongoose.model('Post', PostSchema);
