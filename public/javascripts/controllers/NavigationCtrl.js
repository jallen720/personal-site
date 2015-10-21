define([
  'modules/blog',
],

function(blog) {
  function NavigationCtrl($scope, admin) {
    $scope.isLoggedIn = admin.isLoggedIn;
    $scope.logOut     = admin.logOut;
  }

  blog.controller('NavigationCtrl', NavigationCtrl);
});
