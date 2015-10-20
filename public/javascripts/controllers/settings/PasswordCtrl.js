define([
  'app',
  'controllers/settings/helpers/submitFunc',
],

function(app, submitFunc) {
  function PasswordCtrl($scope, $state, admin) {
    $scope.heading  = 'Change Password';
    $scope.password = {};
    $scope.submit   = submitFunc($scope, admin, 'password');
  }

  app.controller('settings.PasswordCtrl', PasswordCtrl);
});
