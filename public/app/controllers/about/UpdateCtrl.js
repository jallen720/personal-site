define([
  'modules/blog',
],

function(blog) {
  function UpdateCtrl($scope, $state, aboutInfo, about) {
    $scope.formAction = 'Update';
    $scope.resource   = aboutInfo;

    $scope.submit = function() {
      about.update($scope.resource)
        .error(function(error) {
          $scope.error = error;
        })

        .success(function() {
          $state.go('about');
        });
    };
  }

  blog.controller('about.UpdateCtrl', UpdateCtrl);
});
