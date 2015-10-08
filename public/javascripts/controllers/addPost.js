var app = angular.module('angular-express');

app.controller('addPost', [
  '$scope',
  '$state',
  'posts',
  function($scope, $state, posts) {
    $scope.formName = 'Write a new post';

    $scope.submit = function() {
      posts.add($scope.post);
      $state.go('home');
    };
  }
]);
