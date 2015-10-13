var app = angular.module('angular-express');

app.controller(
  'editPost',
  function($scope, $state, $stateParams, posts, post) {
    $scope.formName = 'Edit post';
    $scope.post = post;

    $scope.submit = function() {
      posts.update($stateParams.id, $scope.post)
        .error(function(error) {
          $scope.error = error;
        })

        .success(function() {
          $state.go('home');
        });
    };
  }
);
