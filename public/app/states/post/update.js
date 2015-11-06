define([
  'modules/blog',
  'promises/post',
],

function(blog, postPromise) {
  blog.config(function($stateProvider) {
    $stateProvider.state('postUpdate', {
      url:         '/postUpdate/{id}',
      templateUrl: '/partials/post.editor.update',
      controller:  'post.UpdateCtrl',

      resolve: {
        post: postPromise,
      },
    });
  });
});
