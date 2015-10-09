var app = angular.module('angular-express');

app.controller('admin', [
  '$scope',
  '$state',
  function($scope, $state) {
    $scope.admin = {};

    $scope.submit = function() {
      $state.go('home');
    }
  }
]);
