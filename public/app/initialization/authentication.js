define([
  'modules/blog',
  'initialization/helpers/states',
],

function(blog, states) {
  blog.run(function($rootScope, $state, admin) {
    function redirect(event) {
      event.preventDefault();
      $state.go('about');
    }

    function checkRedirect(event, toState) {
      if (states.requiresLoggedIn(toState)) {
        if (!admin.isLoggedIn()) {
          redirect(event);
        }
      }
      else if (states.requiresLoggedOut(toState)) {
        if (admin.isLoggedIn()) {
          redirect(event);
        }
      }
    }

    $rootScope.$on('$stateChangeStart', checkRedirect);
  });
});
