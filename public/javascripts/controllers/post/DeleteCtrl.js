define([
  'app',
],

function(app) {
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

  app.controller('post.DeleteCtrl', DeleteCtrl);
});
