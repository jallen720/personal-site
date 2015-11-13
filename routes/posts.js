var express   = require('express'),
    mongoose  = require('mongoose'),
    auth      = require('./middleware/auth'),
    saveModel = require('./helpers/saveModel');

var router = express.Router(),
    Post   = mongoose.model('Post');

function createPost(newPost, res) {
  saveModel(new Post(newPost), res);
}

router.route('/posts')
  // Get all posts (sorted in descending order by date).
  .get(function(_, res, next) {
    Post.find({}).sort('-date').exec(function(err, posts) {
      if (err) {
        next(err);
      }
      else {
        res.json(posts);
      }
    });
  })

  // Create new post.
  .post(auth, function(req, res) {
    createPost(req.body, res);
  });

module.exports = router;
