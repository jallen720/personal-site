define([
  'modules/blog',
  'promises/allPosts',
],

function(blog, allPostsPromise) {
  blog.config(function($stateProvider) {
    $stateProvider.state('home', {
      url:         '/home',
      templateUrl: '/partials/home',
      controller:  'HomeCtrl',

      resolve: {
        allPosts: allPostsPromise,
      },
    });
  });
});
