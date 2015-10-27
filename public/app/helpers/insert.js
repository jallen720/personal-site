define(function() {
  return function(value, string, index) {
    return [
      string.slice(0, index),
      value,
      string.slice(index)
    ].join('');
  };
});
