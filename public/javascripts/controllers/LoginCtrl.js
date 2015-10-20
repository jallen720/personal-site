define([
  'app',
],

function(app) {
  function LoginCtrl($scope, $state, admin) {
    $scope.heading     = 'Admin Login';
    $scope.credentials = {};

    $scope.submit = function() {
      admin.logIn($scope.credentials)
        .error(function(error) {
          $scope.error = error;
        })

        .success(function() {
          $state.go('home');
        });
    };
  }

  app.controller('LoginCtrl', LoginCtrl);
});
