define([
  'modules/blog',
],

function(blog) {
  blog.config(function($stateProvider) {
    $stateProvider.state('portfolio', {
      url:         '/portfolio',
      templateUrl: '/partials/portfolio.list',
      controller:  'PortfolioCtrl',
    });
  });
});
