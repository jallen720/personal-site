define([
  'modules/blog',
],

function(blog) {
  blog.run(function($rootScope) {
    $rootScope.$on('$stateChangeSuccess', function() {
      // Scroll page to top when state changes.
      document.body.scrollTop =
      document.documentElement.scrollTop = 0;
    });
  });
});
