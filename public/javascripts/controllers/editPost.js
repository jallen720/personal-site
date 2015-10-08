var app = angular.module('angular-express');

app.controller('editPost', [
  '$scope',
  '$state',
  '$stateParams',
  'posts',
  function($scope, $state, $stateParams, posts) {
    posts.get($stateParams.id)
      .success(function(post) {
        $scope.post = post;
      });

    $scope.formName = 'Edit post';

    $scope.submit = function() {
      posts.set($stateParams.id, $scope.post)
        .error(function(error) {
          $scope.error = error;
        })

        .success(function() {
          $state.go('home');
        });
    };
  }
]);
