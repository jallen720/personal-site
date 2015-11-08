define([
  'modules/blog',
],

function(blog) {
  blog.config(function($stateProvider) {
    $stateProvider.state('about', {
      url:         '/about',
      templateUrl: '/partials/about',
      controller:  'AboutCtrl',
    });
  });
});
