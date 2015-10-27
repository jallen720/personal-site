define([
  'modules/blog',
  'states/helpers/getViews',
  'promises/post',
],

function(blog, getViews, postPromise) {
  blog.config(function($stateProvider) {
    $stateProvider.state('postRead', {
      url: '/postRead/{id}',

      views: getViews({
        templateUrl: '/partials/post.read',
        controller:  'post.ReadCtrl',
      }),

      resolve: {
        post: postPromise,
      },
    });
  });
});
