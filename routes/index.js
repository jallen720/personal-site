var express  = require('express'),
    mongoose = require('mongoose');

var router = express.Router(),
    Post   = mongoose.model('Post');

function savePost(post, res, next) {
  post.save(function(err) {
    if (err) {
      return next(err);
    }

    res.sendStatus(200);
  });
}

function sendError(res, messages) {
  res.status(400).send({
    messages: messages
  });
}

function getErrorMessages(post, callback) {
  var messages = [];

  if (!post.title || post.title === '') {
    messages.push('Post title must be filled out!');
  }

  if (!post.body || post.body === '') {
    messages.push('Post body must be filled out!');
  }

  callback(messages);
}

function validatePost(post, res, success) {
  getErrorMessages(post, function(messages) {
    if (messages.length === 0) {
      success();
    } else {
      sendError(res, messages);
    }
  });
}

function createPost(newPost, res, next) {
  // Create Post with request body, which contains the post data (title, body,
  // and date). Not to be confused with the posts body. Then save the post, and
  // send it in the result.
  savePost(new Post(newPost), res, next);
}

function updatePost(post, updatedPost, res, next) {
  post.title = updatedPost.title;
  post.body = updatedPost.body;
  savePost(post, res, next);
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
    validatePost(req.body, res, function() {
      createPost(req.body, res, next);
    });
  });

router.param('post', function(req, res, next, id) {
  Post.findById(id).exec(function(err, post) {
    if (err) {
      return next(err);
    }

    if (!post) {
      return next(new Error('Can\'t find post!'));
    }

    req.post = post;
    return next();
  });
});

router.route('/posts/:post')
  .get(function(req, res) {
    res.send(req.post);
  })

  .post(function(req, res, next) {
    validatePost(req.body, res, function() {
      updatePost(req.post, req.body, res, next);
    });
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
