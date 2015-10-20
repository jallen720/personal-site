define([
  'app',
],

function(app) {
  function UpdateCtrl($scope, $state, $stateParams, posts, post) {
    $scope.formAction = 'Update';
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

  app.controller('post.UpdateCtrl', UpdateCtrl);
});
