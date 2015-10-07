var app = angular.module('angular-express');

app.controller('editPost', [
  '$scope',
  '$state',
  '$stateParams',
  'posts',
  function($scope, $state, $stateParams, posts) {
    $scope.post = posts.get($stateParams.index);

    $scope.editPost = function() {
      posts.set($stateParams.index, $scope.post);
      $state.go('home');
    }
  }
]);
