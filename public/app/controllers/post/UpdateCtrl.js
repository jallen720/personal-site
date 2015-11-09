define([
  'modules/blog',
],

function(blog) {
  function UpdateCtrl($scope, $state, $stateParams, posts, post) {
    $scope.formAction = 'Update';
    $scope.post       = post;
    $scope.edit       = {};

    $scope.submit = function() {
      posts.update($stateParams.id, {
        post:   $scope.post,
        reason: $scope.edit.reason,
      })
        .error(function(error) {
          $scope.error = error;
        })

        .success(function() {
          $state.go('about');
        });
    };
  }

  blog.controller('post.UpdateCtrl', UpdateCtrl);
});
