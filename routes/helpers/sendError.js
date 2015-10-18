module.exports = function(res, messages) {
  res.status(400).send({
    messages: messages
  });
};
