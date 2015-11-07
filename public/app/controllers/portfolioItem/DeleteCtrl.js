define([
  'modules/blog',
],

function(blog) {
  function DeleteCtrl($scope, $state, $stateParams, portfolio, portfolioItem) {
    $scope.portfolioItem = portfolioItem;

    $scope.cancel = function() {
      $state.go('home');
    };

    $scope.deletePortfolioItem = function() {
      portfolio.delete($stateParams.id)
        .success(function() {
          $state.go('home');
        });
    };
  }

  blog.controller('portfolioItem.DeleteCtrl', DeleteCtrl);
});
