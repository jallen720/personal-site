var app = angular.module('angular-express');

app.controller('home', [
  '$scope',
  '$state',
  '$http',
  'posts',
  'admin',
  function($scope, $state, $http, posts, admin) {
    $scope.posts = posts.getAll();
    $scope.isLoggedIn = admin.isLoggedIn();

    $scope.editPost = function(id) {
      $state.go('editPost', { id: id });
    };

    $scope.deletePost = function(id) {
      $state.go('deletePost', { id: id });
    };
  }
]);
