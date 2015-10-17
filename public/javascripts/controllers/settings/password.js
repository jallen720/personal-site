app.controller('settingsPassword',

function($scope, $state, admin) {
  $scope.headingName = 'Change Password';
  $scope.password = {};

  $scope.submit = function() {
    admin.update('password', $scope.password)
      .error(function(error) {
        $scope.error = error;
      })

      .success(function() {
        $state.go($state.current, {}, { reload: true });
      });
  };
}

);
