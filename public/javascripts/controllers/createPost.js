var app = angular.module('angular-express');

app.controller('createPost', [
  '$scope',
  '$state',
  'posts',
  function($scope, $state, posts) {
    $scope.formName = 'Write a new post';

    $scope.submit = function() {
      posts.create($scope.post);
      $state.go('home');
    };
  }
]);
