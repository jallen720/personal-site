var sendError        = require('./sendError'),
    getErrorMessages = require('../../utils/getErrorMessages');

module.exports = function(model, res) {
  model.save(function(err) {
    if (err) {
      sendError(res, getErrorMessages(err.errors));
    } else {
      res.sendStatus(200);
    }
  });
};
