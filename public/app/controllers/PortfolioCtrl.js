define([
  'modules/blog',
],

function(blog) {
  function PortfolioCtrl($scope, portfolioItems) {
    $scope.portfolioItems = portfolioItems;
  }

  blog.controller('PortfolioCtrl', PortfolioCtrl);
});
