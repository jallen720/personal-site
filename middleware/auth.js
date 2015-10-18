var jwt = require('express-jwt');

module.exports = jwt({
  secret:       process.env.SECRET,
  userProperty: 'payload'
});
