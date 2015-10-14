app.controller('postDelete',

function($scope, $state, $stateParams, posts, post) {
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

);
