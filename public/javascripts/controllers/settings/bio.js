app.controller('settingsBio',

function($scope, $state, admin) {
  $scope.headingName = 'Change Bio';
  $scope.bio = {};

  $scope.submit = function() {
    admin.updateBio($scope.bio)
      .error(function(error) {
        $scope.error = error;
      })

      .success(function() {
        $state.go($state.current, {}, { reload: true });
      });
  };

  admin.getInfo()
    .error(function(error) {
      $scope.error = error;
    })

    .success(function(admin) {
      $scope.bio.content = admin.bio;
    });
}

);
