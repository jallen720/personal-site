app.controller('settings.PasswordCtrl',

function($scope, $state, admin) {
  $scope.heading  = 'Change Password';
  $scope.password = {};
  $scope.submit   = submitFunc($scope, admin, 'password');
}

);