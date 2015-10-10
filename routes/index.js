var express          = require('express'),
    mongoose         = require('mongoose'),
    getErrorMessages = require('../utils/getErrorMessages');

var router = express.Router(),
    Post   = mongoose.model('Post');

function sendError(res, messages) {
  res.status(400).send({
    messages: messages
  });
}

function savePost(post, res) {
  post.save(function(err) {
    if (err) {
      sendError(res, getErrorMessages(err.errors));
    } else {
      res.sendStatus(200);
    }
  });
}

function createPost(newPost, res) {
  // Create Post with request body, which contains the post data (title, body,
  // and date). Not to be confused with the posts body. Then save the post, and
  // send it in the result.
  savePost(new Post(newPost), res);
}

function updatePost(post, updatedPost, res) {
  post.title = updatedPost.title;
  post.body = updatedPost.body;
  savePost(post, res);
}

// Home page.
router.get('/', function(_, res) {
  res.render('index', {
    title: 'My Blog'
  });
});

// Partial templates for Angular.
router.get('/partials/:name', function(req, res) {
  res.render('partials/' + req.params.name);
});

router.route('/posts')
  // Get all posts.
  .get(function(_, res, next) {
    Post.find(function(err, posts) {
      if (err) {
        return next(err);
      }

      // Send all posts as JSON (empty object if no posts exist) to client.
      res.json(posts);
    });
  })

  // Create new post.
  .post(function(req, res, next) {
    createPost(req.body, res);
  });

router.param('post', function(req, res, next, id) {
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

router.route('/posts/:post')
  .get(function(req, res) {
    res.send(req.post);
  })

  .post(function(req, res, next) {
    updatePost(req.post, req.body, res);
  })

  .delete(function(req, res, next) {
    req.post.remove(function(err) {
      if (err) {
        return next(err);
      }

      res.sendStatus(200);
    });
  });

module.exports = router;
