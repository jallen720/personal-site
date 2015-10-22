define([
  'modules/blog',
  'states/helpers/getViews',
],

function(blog, getViews) {
  blog.config(function($stateProvider) {
    $stateProvider.state('postCreate', {
      url: '/postCreate',

      views: getViews({
        templateUrl: '/partials/post.editor.editor',
        controller:  'post.CreateCtrl',
      }),
    });
  });
});
