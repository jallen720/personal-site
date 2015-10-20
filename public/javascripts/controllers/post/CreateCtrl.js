define([
  'app',
],

function(app) {
  function CreateCtrl($scope, $state, posts) {
    $scope.formAction = 'Create';
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

  app.controller('post.CreateCtrl', CreateCtrl);
});
