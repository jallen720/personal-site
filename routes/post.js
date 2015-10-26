var express      = require('express'),
    mongoose     = require('mongoose'),
    auth         = require('./middleware/auth'),
    saveModel    = require('./helpers/saveModel'),
    checkNewEdit = require('./helpers/checkNewEdit');

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

function updatePost(post, data, res) {
  checkNewEdit(data.reason, post, function(edit) {
    post.edits.push(edit);
  });

  post.imageURL = data.post.imageURL;
  post.title    = data.post.title;
  post.body     = data.post.body;
  saveModel(post, res);
}

router.route('/posts/:post')
  .get(function(req, res) {
    req.post.populate('edits', function(err, post) {
      if (err) {
        next(err);
      } else {
        res.json(req.post);
      }
    });
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
