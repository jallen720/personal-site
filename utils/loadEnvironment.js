var env2 = require('env2');

module.exports = function() {
  // Load development environment configuration.
  if (process.env.NODE_ENV === undefined) {
    env2('config.env');
  }
};
