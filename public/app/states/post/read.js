define([
  'modules/blog',
  'promises/post',
],

function(blog, postPromise) {
  blog.config(function($stateProvider) {
    $stateProvider.state('postRead', {
      url:         '/postRead/{id}',
      templateUrl: '/partials/post.read',
      controller:  'post.ReadCtrl',

      resolve: {
        post: postPromise,
      },
    });
  });
});
