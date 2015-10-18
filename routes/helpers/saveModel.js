var sendError        = require('./sendError'),
    getErrorMessages = require('../../utils/getErrorMessages');

function saveCheck(res) {
  return function(err) {
    if (err) {
      sendError(res, getErrorMessages(err.errors));
    } else {
      res.sendStatus(200);
    }
  };
}

module.exports = function(model, res) {
  model.save(saveCheck(res));
};
