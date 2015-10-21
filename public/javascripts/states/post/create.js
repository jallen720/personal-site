define([
  'modules/blog',
  'states/helpers/getViews',
  'states/helpers/adminReroute',
],

function(blog, getViews, adminReroute) {
  blog.config(function($stateProvider) {
    $stateProvider.state('postCreate', {
      url: '/postCreate',

      views: getViews({
        templateUrl: '/partials/post.editor.editor',
        controller:  'post.CreateCtrl',
      }),

      onEnter: adminReroute(true),
    });
  });
});
