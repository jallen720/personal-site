define([
  'modules/blog',
  'promises/aboutInfo',
],

function(blog, aboutInfoPromise) {
  blog.config(function($stateProvider) {
    $stateProvider.state('aboutUpdate', {
      url:         '/aboutUpdate',
      templateUrl: '/partials/about.editor',
      controller:  'about.UpdateCtrl',

      resolve: {
        aboutInfo: aboutInfoPromise,
      },
    });
  });
});
