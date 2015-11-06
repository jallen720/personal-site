define([
  'modules/blog',
],

function(blog) {
  blog.config(function($stateProvider) {
    $stateProvider.state('postCreate', {
      url:         '/postCreate',
      templateUrl: '/partials/post.editor.create',
      controller:  'post.CreateCtrl',
    });
  });
});
