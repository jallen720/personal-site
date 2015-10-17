app.controller('admin',

function($scope, $state, admin) {
  $scope.headingName = 'Admin Login';
  $scope.credentials = {};

  $scope.submit = function() {
    admin.logIn($scope.credentials)
      .error(function(error) {
        $scope.error = error;
      })

      .success(function() {
        $state.go('home');
      });
  };
}

);
