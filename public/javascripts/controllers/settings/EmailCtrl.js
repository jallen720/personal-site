app.controller('settings.EmailCtrl',

function($scope, $state, admin) {
  $scope.heading = 'Change E-mail';
  $scope.email   = {};
  $scope.submit  = submitFunc($scope, admin, 'email');
}

);