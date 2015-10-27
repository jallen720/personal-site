define([
  'modules/blog',
  'states/helpers/getViews',
],

function(blog, getViews) {
  blog.config(function($stateProvider) {
    $stateProvider.state('login', {
      url: '/login',

      views: getViews({
        templateUrl: '/partials/login.login',
        controller:  'LoginCtrl',
      }),
    });
  });
});
