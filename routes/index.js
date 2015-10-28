var express  = require('express'),
    partials = require('./partials'),
    posts    = require('./posts'),
    post     = require('./post'),
    login    = require('./login'),
    admin    = require('./admin');

var router = express.Router();

router.use(partials);
router.use(posts);
router.use(post);
router.use(login);
router.use(admin);

// Home page.
router.get('/*', function(_, res) {
  res.render('index', {
    title: process.env.TITLE,
  });
});

module.exports = router;
