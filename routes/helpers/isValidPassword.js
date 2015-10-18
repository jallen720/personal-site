module.exports = function(admin, password) {
  return password && admin.isPassword(password);
};
