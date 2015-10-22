define([
  'modules/blog',
  'states/helpers/getViews',
  'promises/post',
],

function(blog, getViews, postPromise) {
  blog.config(function($stateProvider) {
    $stateProvider.state('postDelete', {
      url: '/postDelete/{id}',

      views: getViews({
        templateUrl: '/partials/post.delete',
        controller:  'post.DeleteCtrl',
      }),

      resolve: {
        post: postPromise,
      },
    });
  });
});
