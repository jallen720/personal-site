define([
  'modules/blog',
],

function(blog) {
  blog.config(function($locationProvider) {
    $locationProvider.html5Mode(true);
  });
});
