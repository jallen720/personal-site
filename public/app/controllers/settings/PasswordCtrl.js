define([
  'modules/blog',
  'controllers/settings/helpers/submitFunc',
],

function(blog, submitFunc) {
  function PasswordCtrl($scope, $state, admin) {
    $scope.heading  = 'Change Password';
    $scope.password = {};
    $scope.submit   = submitFunc($scope, admin, 'password');
  }

  blog.controller('settings.PasswordCtrl', PasswordCtrl);
});
