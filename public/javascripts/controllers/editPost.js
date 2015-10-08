var app = angular.module('angular-express');

app.controller('editPost', [
  '$scope',
  '$state',
  '$stateParams',
  'posts',
  function($scope, $state, $stateParams, posts) {
    $scope.post = posts.get($stateParams.id);
    $scope.formName = 'Edit post';

    $scope.submit = function() {
      posts.set($stateParams.id, $scope.post);
      $state.go('home');
    }
  }
]);
