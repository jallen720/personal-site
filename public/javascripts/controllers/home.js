var app = angular.module('angular-express');

app.controller('home', [
  '$scope',
  'posts',
  function($scope, posts) {
    $scope.posts = posts.all;
  }
]);
