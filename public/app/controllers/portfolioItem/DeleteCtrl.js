define([
  'modules/blog',
],

function(blog) {
  function DeleteCtrl($scope, $state, $stateParams, portfolio, portfolioItem) {
    $scope.portfolioItem = portfolioItem;

    $scope.cancel = function() {
      $state.go('portfolio');
    };

    $scope.deletePortfolioItem = function() {
      portfolio.delete($stateParams.id)
        .success(function() {
          $state.go('portfolio');
        });
    };
  }

  blog.controller('portfolioItem.DeleteCtrl', DeleteCtrl);
});
