define([
  'modules/blog',
  'states/helpers/getViews',
  'states/helpers/adminReroute',
],

function(blog, getViews, adminReroute) {
  blog.config(function($stateProvider) {
    $stateProvider.state('settings', {
      url: '/settings',

      views: getViews({
        templateUrl: '/partials/settings.settings',
      }),

      onEnter: adminReroute(true),
    });
  });
});
