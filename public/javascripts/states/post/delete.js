define([
  'modules/blog',
  'states/helpers/getViews',
  'states/helpers/adminReroute',
  'promises/post',
],

function(blog, getViews, adminReroute, postPromise) {
  blog.config(function($stateProvider) {
    $stateProvider.state('postDelete', {
      url: '/postDelete/{id}',

      views: getViews({
        templateUrl: '/partials/post.delete',
        controller:  'post.DeleteCtrl',
      }),

      onEnter: adminReroute(true),

      resolve: {
        post: postPromise,
      },
    });
  });
});
