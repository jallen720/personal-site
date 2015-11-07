define([
  'modules/blog',
],

function(blog) {
  blog.config(function($stateProvider) {
    $stateProvider.state('portfolioItemCreate', {
      url:         '/portfolioItemCreate',
      templateUrl: '/partials/portfolio.item.editor',
      controller:  'portfolioItem.CreateCtrl',
    });
  });
});
