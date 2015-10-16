var express          = require('express'),
    mongoose         = require('mongoose'),
    jwt              = require('express-jwt'),
    getErrorMessages = require('../utils/getErrorMessages');

var router = express.Router(),
    Post   = mongoose.model('Post'),
    Admin  = mongoose.model('Admin'),
    auth   = jwt({
               secret:       process.env.SECRET,
               userProperty: 'payload'
             });

// Home page.
router.get('/', function(_, res) {
  res.render('index', {
    title: 'My Blog'
  });
});

function getPartialPath(partialName) {
  return partialName.replace(/\./g, '/');
}

router.param('partialName', function(req, res, next, partialName) {
  req.partialPath = getPartialPath(partialName);
  next();
});

// Partial templates for Angular states.
router.get('/partials/:partialName', function(req, res, next) {
  res.render('partials/' + req.partialPath);
});

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
  savePost(new Post(newPost), res);
}

router.route('/posts')
  // Get all posts (sorted in descending order by date).
  .get(function(_, res, next) {
    Post.find({}).sort('-date').exec(function(err, posts) {
      if (err) {
        next(err);
      } else {
        res.json(posts);
      }
    });
  })

  // Create new post.
  .post(auth, function(req, res, next) {
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

function updatePost(post, updatedPost, res) {
  post.title    = updatedPost.title;
  post.imageURL = updatedPost.imageURL;
  post.body     = updatedPost.body;
  savePost(post, res);
}

router.route('/posts/:post')
  .get(function(req, res) {
    res.send(req.post);
  })

  .patch(auth, function(req, res, next) {
    updatePost(req.post, req.body, res);
  })

  .delete(auth, function(req, res, next) {
    req.post.remove(function(err) {
      if (err) {
        return next(err);
      }

      res.sendStatus(200);
    });
  });

function getAdminAccount(next, callback) {
  Admin.findOne(function(err, admin) {
    if (err) {
      next(err);
    } else if (!admin) {
      next(new Error('An admin account has not been set up!'));
    } else {
      callback(admin);
    }
  });
}

function isValidEmail(admin, credentials) {
  return credentials.email &&
         admin.email == credentials.email;
}

function isValidPassword(admin, credentials) {
  return credentials.password &&
         admin.isPassword(credentials.password);
}

function validateCredentials(admin, credentials, callback) {
  var errorMessages = [];

  if (!isValidEmail(admin, credentials)) {
    errorMessages.push('Invalid e-mail!');
  }

  if (!isValidPassword(admin, credentials)) {
    errorMessages.push('Invalid password!');
  }

  callback(errorMessages);
}

router.route('/admin')
  // Login to admin account.
  .post(function(req, res, next) {
    getAdminAccount(next, function(admin) {
      validateCredentials(admin, req.body, function(errorMessages) {
        if (errorMessages.length > 0) {
          sendError(res, errorMessages);
        } else {
          res.json({
            token: admin.generateJWT()
          });
        }
      });
    });
  })

  // Get admin account info.
  .get(function(req, res, next) {
    getAdminAccount(next, function(admin) {
      res.send({
        email: admin.email,
        bio: admin.bio,
      });
    })
  });

module.exports = router;
