function messageArray(messages) {
  return messages.constructor === Array
         ? messages
         : [ messages ]
}

module.exports = function(res, messages) {
  res.status(400).send({
    messages: messageArray(messages)
  });
};
