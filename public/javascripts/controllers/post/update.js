app.controller('postUpdate',

function($scope, $state, $stateParams, posts, post) {
  $scope.formName = 'Update post';
  $scope.post = post;

  $scope.submit = function() {
    posts.update($stateParams.id, $scope.post)
      .error(function(error) {
        $scope.error = error;
      })

      .success(function() {
        $state.go('home');
      });
  };
}

);
