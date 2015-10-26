var mongoose = require('mongoose');

var EditSchema = new mongoose.Schema({
  reason: String,
  date:   Date,

  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref:  'Post',
  },
});

EditSchema.pre('save', function(next) {
  if (!this.date) {
    this.date = new Date();
  }

  next();
});

mongoose.model('Edit', EditSchema);
