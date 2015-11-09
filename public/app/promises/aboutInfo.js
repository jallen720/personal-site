define(function() {
  return function(about) {
    return about.getInfo().then(function(res) {
      return res.data;
    });
  };
});
