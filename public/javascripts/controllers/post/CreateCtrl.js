define([
  'modules/blog',
],

function(blog) {
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

  blog.controller('post.CreateCtrl', CreateCtrl);
});
