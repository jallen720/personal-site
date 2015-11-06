define([
  'modules/blog',
  'promises/portfolioItems'
],

function(blog, portfolioItemsPromise) {
  blog.config(function($stateProvider) {
    $stateProvider.state('portfolio', {
      url:         '/portfolio',
      templateUrl: '/partials/portfolio.list',
      controller:  'PortfolioCtrl',

      resolve: {
        portfolioItems: portfolioItemsPromise,
      },
    });
  });
});
