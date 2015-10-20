define([
  'app',
  'controllers/settings/helpers/submitFunc',
],

function(app, submitFunc) {
  function EmailCtrl($scope, $state, admin) {
    $scope.heading = 'Change E-mail';
    $scope.email   = {};
    $scope.submit  = submitFunc($scope, admin, 'email');
  }

  app.controller('settings.EmailCtrl', EmailCtrl);
});
