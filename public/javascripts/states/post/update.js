define([
  'modules/blog',
  'states/helpers/getViews',
  'states/helpers/adminReroute',
  'promises/post',
],

function(blog, getViews, adminReroute, postPromise) {
  blog.config(function($stateProvider) {
    $stateProvider.state('postUpdate', {
      url: '/postUpdate/{id}',

      views: getViews({
        templateUrl: '/partials/post.editor.editor',
        controller:  'post.UpdateCtrl',
      }),

      onEnter: adminReroute(true),

      resolve: {
        post: postPromise,
      },
    });
  });
});
