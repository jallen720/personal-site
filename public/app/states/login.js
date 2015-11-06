define([
  'modules/blog',
],

function(blog) {
  blog.config(function($stateProvider) {
    $stateProvider.state('login', {
      url:         '/login',
      templateUrl: '/partials/login.login',
      controller:  'LoginCtrl',
    });
  });
});
