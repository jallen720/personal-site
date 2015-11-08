define([
  'modules/blog',
  'initialization/helpers/states',
],

function(blog, states) {
  blog.run(function($rootScope, $state, admin) {
    function redirect() {
      $state.go('about');
    }

    function checkRedirect(_, toState) {
      if (states.requiresLoggedIn(toState)) {
        if (!admin.isLoggedIn()) {
          redirect();
        }
      } else if (states.requiresLoggedOut(toState)) {
        if (admin.isLoggedIn()) {
          redirect();
        }
      }
    }

    $rootScope.$on('$stateChangeSuccess', checkRedirect);
  });
});
