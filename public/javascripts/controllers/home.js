var app = angular.module('angular-express');

app.controller(
  'home',
  function($scope, $rootScope, $state, allPosts, admin) {
    $scope.posts = allPosts;
    $rootScope.isLoggedIn = admin.isLoggedIn();

    $scope.editPost = function(id) {
      $state.go('editPost', { id: id });
    };

    $scope.deletePost = function(id) {
      $state.go('deletePost', { id: id });
    };
  }
);
