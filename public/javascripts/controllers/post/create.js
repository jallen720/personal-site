app.controller('postCreate',

function($scope, $state, posts) {
  $scope.formName = 'New Post';
  $scope.post = {};

  $scope.submit = function() {
    posts.create($scope.post)
      .error(function(error) {
        $scope.error = error;
      })

      .success(function() {
        $state.go('home');
      });
  };
}

);
