define([
  'modules/blog',
  'promises/portfolioItems'
],

function(blog, portfolioItemsPromise) {
  blog.config(function($stateProvider) {
    $stateProvider.state('portfolio', {
      url:         '/portfolio',
      templateUrl: '/partials/portfolio',
      controller:  'PortfolioCtrl',

      resolve: {
        portfolioItems: portfolioItemsPromise,
      },
    });
  });
});
