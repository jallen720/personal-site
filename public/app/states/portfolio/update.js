define([
  'modules/blog',
  'promises/portfolioItem',
],

function(blog, portfolioItemPromise) {
  blog.config(function($stateProvider) {
    $stateProvider.state('portfolioUpdate', {
      url:         '/portfolioUpdate/{id}',
      templateUrl: '/partials/portfolio.editor',
      controller:  'portfolio.UpdateCtrl',

      resolve: {
        portfolioItem: portfolioItemPromise,
      },
    });
  });
});
