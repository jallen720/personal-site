define([
  'modules/blog',
],

function(blog) {
  function UpdateCtrl($scope, $state, $stateParams, portfolio, portfolioItem) {
    $scope.formAction    = 'Update';
    $scope.portfolioItem = portfolioItem;

    $scope.submit = function() {
      portfolio.update($stateParams.id, $scope.portfolioItem)
        .error(function(error) {
          $scope.error = error;
        })

        .success(function() {
          $state.go('home');
        });
    };
  }

  blog.controller('portfolio.UpdateCtrl', UpdateCtrl);
});
