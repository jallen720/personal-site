define([
  'modules/blog',
],

function(blog) {
  blog.config(function($stateProvider) {
    $stateProvider.state('portfolioCreate', {
      url:         '/portfolioCreate',
      templateUrl: '/partials/portfolio.editor',
      controller:  'portfolio.CreateCtrl',
    });
  });
});
