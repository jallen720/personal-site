app.controller('settingsPassword',

function($scope, admin) {
  $scope.headingName = 'Change Password';

  $scope.submit = function() {
    console.log('Password submit()');
  };
}

);
