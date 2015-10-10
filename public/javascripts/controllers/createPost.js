var app = angular.module('angular-express');

app.controller(
  'createPost',
  function($scope, $state, posts) {
    $scope.formName = 'Write a new post';
    $scope.post = {};

    $scope.submit = function() {
      posts.create($scope.post)
        .error(function(error) {
          $scope.error = error;
        })

        .success(function() {
          $state.go('home');
        });
    };
  }
);
