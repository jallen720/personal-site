var app = angular.module('angular-express');

app.controller('deletePost', [
  '$scope',
  '$state',
  '$stateParams',
  'posts',
  function($scope, $state, $stateParams, posts) {
    $scope.post = posts.get($stateParams.index);

    $scope.cancel = function() {
      $state.go('home');
    }

    $scope.deletePost = function() {
      posts.delete($stateParams.index);
      $state.go('home');
    }
  }
]);
