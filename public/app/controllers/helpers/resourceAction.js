define(function() {
  return function($state, resourceName) {
    return function(action, id) {
      $state.go(resourceName + action, { id: id });
    };
  };
});
