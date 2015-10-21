define([
  'modules/blog',
  'states/helpers/getViews',
  'states/helpers/adminReroute',
],

function(blog, getViews, adminReroute) {
  blog.config(function($stateProvider) {
    $stateProvider.state('login', {
      url: '/login',

      views: getViews({
        templateUrl: '/partials/login.login',
        controller:  'LoginCtrl',
      }),

      onEnter: adminReroute(false),
    });
  });
});
