define([
  'app',
],

function(app) {
  function NavigationCtrl($scope, admin) {
    $scope.isLoggedIn = admin.isLoggedIn;
    $scope.logOut     = admin.logOut;
  }

  app.controller('NavigationCtrl', NavigationCtrl);
});
