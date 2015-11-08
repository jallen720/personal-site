define([
  'modules/blog',
],

function(blog) {
  blog.config(function($urlRouterProvider) {
    $urlRouterProvider.otherwise('about');
  });
});
