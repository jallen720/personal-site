define(function() {
  return function(shouldBeLoggedIn) {
    return function($state, admin) {
      if (admin.isLoggedIn() !== shouldBeLoggedIn) {
        $state.go('home');
      }
    };
  };
});
