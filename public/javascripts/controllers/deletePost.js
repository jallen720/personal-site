var app = angular.module('angular-express');

app.controller(
  'deletePost',
  function($scope, $state, $stateParams, posts, post) {
    $scope.post = post;

    $scope.cancel = function() {
      $state.go('home');
    };

    $scope.deletePost = function() {
      posts.delete($stateParams.id)
        .success(function() {
          $state.go('home');
        });
    };
  }
);
