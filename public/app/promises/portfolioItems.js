define(function() {
  return function(portfolio) {
    return portfolio.getAll().then(function(res) {
      return res.data;
    });
  };
});
