define([
  'modules/blog',
  'states/helpers/getViews',
],

function(blog, getViews) {
  blog.config(function($stateProvider) {
    $stateProvider.state('settings', {
      url: '/settings',

      views: getViews({
        templateUrl: '/partials/settings.settings',
      }),
    });
  });
});
