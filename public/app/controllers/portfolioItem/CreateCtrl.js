define([
  'modules/blog',
],

function(blog) {
  function CreateCtrl($scope, $state, portfolio) {
    $scope.formAction = 'Create';
    $scope.resource   = {};

    $scope.submit = function() {
      portfolio.create($scope.resource)
        .error(function(error) {
          $scope.error = error;
        })

        .success(function() {
          $state.go('portfolio');
        });
    };
  }

  blog.controller('portfolioItem.CreateCtrl', CreateCtrl);
});
