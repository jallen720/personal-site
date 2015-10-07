var app = angular.module('angular-express');

app.controller('addPost', [
  '$scope',
  '$state',
  'posts',
  function($scope, $state, posts) {
    $scope.addPost = function() {
      posts.add($scope.post);
      $state.go('home');
    };
  }
]);
