var mongoose = require('mongoose');

var EditSchema = new mongoose.Schema({
  reason: String,

  date: {
    type:    Date,
    default: Date.now,
  },

  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref:  'Post',
  },
});

mongoose.model('Edit', EditSchema);
