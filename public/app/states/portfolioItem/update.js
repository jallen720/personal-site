define([
  'modules/blog',
  'promises/portfolioItem',
],

function(blog, portfolioItemPromise) {
  blog.config(function($stateProvider) {
    $stateProvider.state('portfolioItemUpdate', {
      url:         '/portfolioItemUpdate/{id}',
      templateUrl: '/partials/portfolio.item.editor',
      controller:  'portfolioItem.UpdateCtrl',

      resolve: {
        portfolioItem: portfolioItemPromise,
      },
    });
  });
});
