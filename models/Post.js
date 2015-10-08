var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
  title: String,
  body:  String,
  date:  String,
});

mongoose.model('Post', PostSchema);
