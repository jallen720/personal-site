define([
  'modules/blog',
  'states/helpers/getViews',
  'promises/allPosts',
],

function(blog, getViews, allPostsPromise) {
  blog.config(function($stateProvider) {
    $stateProvider.state('home', {
      url: '/home',

      views: getViews({
        templateUrl: '/partials/home',
        controller:  'HomeCtrl',
      }),

      resolve: {
        allPosts: allPostsPromise,
      },
    });
  });
});
