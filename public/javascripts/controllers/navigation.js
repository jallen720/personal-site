app.controller('navigation',

function($scope, admin) {
  $scope.isLoggedIn = admin.isLoggedIn;
  $scope.logOut = admin.logOut;
}

);
