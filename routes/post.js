var express   = require('express'),
    mongoose  = require('mongoose'),
    auth      = require('./middleware/auth'),
    saveModel = require('./helpers/saveModel');

var router = express.Router(),
    Post   = mongoose.model('Post');

router.param('post', function(req, _, next, id) {
  Post.findById(id).exec(function(err, post) {
    if (err) {
      next(err);
    } else if (!post) {
      next(new Error('Can\'t find post!'));
    } else {
      req.post = post;
      next();
    }
  });
});

function updatePost(post, updatedPost, res) {
  post.title    = updatedPost.title;
  post.imageURL = updatedPost.imageURL;
  post.body     = updatedPost.body;
  saveModel(post, res);
}

router.route('/posts/:post')
  .get(function(req, res) {
    res.send(req.post);
  })

  .patch(auth, function(req, res) {
    updatePost(req.post, req.body, res);
  })

  .delete(auth, function(req, res, next) {
    req.post.remove(function(err) {
      if (err) {
        next(err);
      } else {
        res.sendStatus(200);
      }
    });
  });

module.exports = router;
