define(function() {
  function reqdAttribsAreDefined(scope) {
    return typeof scope.identifier !== 'undefined' &&
           typeof scope.url !== 'undefined';
  }

  return function(scope) {
    // Ensure that the identifier and url attributes are set, otherwise there
    // will be identifier conflicts when using URLs with "#" in them.
    if (!reqdAttribsAreDefined(scope)) {
      throw 'Please ensure that the "disqus-identifier" and "disqus-url" ' +
            'attributes are both set.';
    }
  };
});
