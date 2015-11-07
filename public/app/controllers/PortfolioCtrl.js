define([
  'modules/blog',
  'controllers/helpers/resourceAction',
],

function(blog, resourceAction) {
  function PortfolioCtrl($scope, $state, portfolioItems, admin) {
    $scope.portfolioItems      = portfolioItems;
    $scope.isLoggedIn          = admin.isLoggedIn;
    $scope.portfolioItemAction = resourceAction($state, 'portfolioItem');
  }

  blog.controller('PortfolioCtrl', PortfolioCtrl);
});
