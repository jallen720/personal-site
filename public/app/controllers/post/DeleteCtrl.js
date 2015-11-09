define([
  'modules/blog',
],

function(blog) {
  function DeleteCtrl($scope, $state, $stateParams, posts, post) {
    $scope.post = post;

    $scope.cancel = function() {
      $state.go('about');
    };

    $scope.deletePost = function() {
      posts.delete($stateParams.id)
        .success(function() {
          $state.go('about');
        });
    };
  }

  blog.controller('post.DeleteCtrl', DeleteCtrl);
});
