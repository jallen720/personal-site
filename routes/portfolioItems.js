var express   = require('express'),
    mongoose  = require('mongoose'),
    auth      = require('./middleware/auth'),
    saveModel = require('./helpers/saveModel');

var router        = express.Router(),
    PortfolioItem = mongoose.model('PortfolioItem');

function createItem(newItem, res) {
  saveModel(new PortfolioItem(newItem), res);
}

router.route('/portfolioItems')
  // Get all portfolio items.
  .get(function(_, res, next) {
    PortfolioItem.find({}, function(err, items) {
      if (err) {
        next(err);
      } else {
        res.json(items);
      }
    });
  })

  // Create new portfolio item.
  .post(auth, function(req, res) {
    createItem(req.body, res);
  });

router.param('item', function(req, _, next, id) {
  PortfolioItem.findById(id).exec(function(err, item) {
    if (err) {
      next(err);
    } else if (!item) {
      next(new Error('Can\'t find portfolio item!'));
    } else {
      req.item = item;
      next();
    }
  });
});

function updateItem(item, data, res) {
  item.imageURL     = data.item.imageURL;
  item.playStoreURL = data.item.playStoreURL;
  item.iTunesURL    = data.item.iTunesURL;
  item.title        = data.item.title;
  item.summary      = data.item.summary;
  item.body         = data.item.body;
  saveModel(item, res);
}

router.route('/portfolioItems/:item')
  .get(function(req, res) {
    res.json(req.item);
  })

  .patch(auth, function(req, res) {
    updateItem(req.item, req.body, res);
  })

  .delete(auth, function(req, res, next) {
    req.item.remove(function(err) {
      if (err) {
        next(err);
      } else {
        res.sendStatus(200);
      }
    });
  });

module.exports = router;
