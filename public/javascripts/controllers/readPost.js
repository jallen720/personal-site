var app = angular.module('angular-express');

app.controller(
  'readPost',
  function($scope, post) {
    $scope.post = post;
  }
);
