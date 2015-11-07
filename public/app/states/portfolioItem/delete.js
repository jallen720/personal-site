define([
  'modules/blog',
  'promises/portfolioItem',
],

function(blog, portfolioItemPromise) {
  blog.config(function($stateProvider) {
    $stateProvider.state('portfolioItemDelete', {
      url:         '/portfolioItemDelete/{id}',
      templateUrl: '/partials/portfolio.item.delete',
      controller:  'portfolioItem.DeleteCtrl',

      resolve: {
        portfolioItem: portfolioItemPromise,
      },
    });
  });
});
