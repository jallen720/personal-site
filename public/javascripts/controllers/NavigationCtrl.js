app.controller('NavigationCtrl',

function($scope, admin) {
  $scope.isLoggedIn = admin.isLoggedIn;
  $scope.logOut = admin.logOut;
}

);
