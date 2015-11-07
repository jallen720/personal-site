define([
  'modules/blog',
],

function(blog) {
  function CreateCtrl($scope, $state, portfolio) {
    $scope.formAction    = 'Create';
    $scope.portfolioItem = {};

    $scope.submit = function() {
      portfolio.create($scope.portfolioItem)
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
