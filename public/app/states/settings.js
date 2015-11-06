define([
  'modules/blog',
],

function(blog) {
  blog.config(function($stateProvider) {
    $stateProvider.state('settings', {
      url:         '/settings',
      templateUrl: '/partials/settings.settings',
    });
  });
});
