app.controller('settingsEmail',

function($scope, $state, admin) {
  $scope.headingName = 'Change E-mail';
  $scope.email = {};

  $scope.submit = function() {
    admin.update('email', $scope.email)
      .error(function(error) {
        $scope.error = error;
      })

      .success(function() {
        $state.go($state.current, {}, { reload: true });
      });
  };
}

);
