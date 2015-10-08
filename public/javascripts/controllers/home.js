var app = angular.module('angular-express');

app.controller('home', [
  '$scope',
  '$state',
  '$http',
  'posts',
  function($scope, $state, $http, posts) {
    $scope.posts = posts.all;

    $scope.editPost = function(id) {
      $state.go('editPost', { id: id });
    };

    $scope.deletePost = function(id) {
      $state.go('deletePost', { id: id });
    };
  }
]);
