define([
  'modules/blog',
  'promises/aboutInfo',
],

function(blog, aboutInfoPromise) {
  blog.config(function($stateProvider) {
    $stateProvider.state('about', {
      url:         '/about',
      templateUrl: '/partials/about',
      controller:  'AboutCtrl',

      resolve: {
        aboutInfo: aboutInfoPromise,
      },
    });
  });
});
