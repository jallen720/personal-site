define(function() {
  return function($stateParams, portfolio) {
    return portfolio.get($stateParams.id).then(function(res) {
      return res.data;
    });
  };
});



