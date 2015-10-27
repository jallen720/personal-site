define([
  'modules/blog',
],

function(blog) {
  function DeleteCtrl($scope, $state, $stateParams, posts, post) {
    $scope.post = post;

    $scope.cancel = function() {
      $state.go('home');
    };

    $scope.deletePost = function() {
      posts.delete($stateParams.id)
        .success(function() {
          $state.go('home');
        });
    };
  }

  blog.controller('post.DeleteCtrl', DeleteCtrl);
});
