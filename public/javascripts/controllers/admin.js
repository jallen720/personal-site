var app = angular.module('angular-express');

app.controller('admin', [
  '$scope',
  '$state',
  'admin',
  function($scope, $state, admin) {
    $scope.credentials = {};

    $scope.submit = function() {
      admin.login($scope.credentials)
        .error(function(error) {
          $scope.error = error;
        })

        .success(function() {
          console.log(admin.isLoggedIn());
          // $state.go('home');
        });

      // $state.go('home');
    };
  }
]);
