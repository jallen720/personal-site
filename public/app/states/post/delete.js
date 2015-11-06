define([
  'modules/blog',
  'promises/post',
],

function(blog, postPromise) {
  blog.config(function($stateProvider) {
    $stateProvider.state('postDelete', {
      url:         '/postDelete/{id}',
      templateUrl: '/partials/post.delete',
      controller:  'post.DeleteCtrl',

      resolve: {
        post: postPromise,
      },
    });
  });
});
