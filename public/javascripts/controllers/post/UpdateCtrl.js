define([
  'app',
],

function(app) {
  app.controller('post.UpdateCtrl',

  function($scope, $state, $stateParams, posts, post) {
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
  });
});
