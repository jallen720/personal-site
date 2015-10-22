define([
  'modules/blog',
  'states/helpers/getViews',
  'promises/post',
],

function(blog, getViews, postPromise) {
  blog.config(function($stateProvider) {
    $stateProvider.state('postUpdate', {
      url: '/postUpdate/{id}',

      views: getViews({
        templateUrl: '/partials/post.editor.editor',
        controller:  'post.UpdateCtrl',
      }),

      resolve: {
        post: postPromise,
      },
    });
  });
});
