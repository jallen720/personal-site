var app = angular.module('angular-express');

app.controller(
  'postBody',
  function($scope, $sce) {
    $scope.trust = $sce.trustAsHtml;
  }
);
