define([
  'modules/blog',
],

function(blog) {
  function ReadCtrl($scope, post) {
    $scope.post = post;
  }

  blog.controller('post.ReadCtrl', ReadCtrl);
});
