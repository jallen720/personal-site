var sendError   = require('./sendError'),
    getMessages = require('../../utils/getMessages');

module.exports = function(model, res) {
  model.save(function(err) {
    if (err) {
      sendError(res, getMessages(err.errors));
    }
    else {
      res.sendStatus(200);
    }
  });
};
