define([
  'promises/post',
  'promises/allPosts',
  'states/helpers/adminReroute',
  'states/helpers/getViews',
],

function(postPromise, allPostsPromise, adminReroute, getViews) {
  return function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/home',

        views: getViews({
          templateUrl: '/partials/home',
          controller:  'HomeCtrl',
        }),

        resolve: {
          allPosts: allPostsPromise,
        },
      })

      .state('login', {
        url: '/login',

        views: getViews({
          templateUrl: '/partials/login.login',
          controller:  'LoginCtrl',
        }),

        onEnter: adminReroute(false),
      })

      .state('settings', {
        url: '/settings',

        views: getViews({
          templateUrl: '/partials/settings.settings',
        }),

        onEnter: adminReroute(true),
      })

      .state('postCreate', {
        url: '/postCreate',

        views: getViews({
          templateUrl: '/partials/post.editor.editor',
          controller:  'post.CreateCtrl',
        }),

        onEnter: adminReroute(true),
      })

      .state('postRead', {
        url: '/postRead/{id}',

        views: getViews({
          templateUrl: '/partials/post.full',
          controller:  'post.ReadCtrl',
        }),

        resolve: {
          post: postPromise,
        },
      })

      .state('postUpdate', {
        url: '/postUpdate/{id}',

        views: getViews({
          templateUrl: '/partials/post.editor.editor',
          controller:  'post.UpdateCtrl',
        }),

        onEnter: adminReroute(true),

        resolve: {
          post: postPromise,
        },
      })

      .state('postDelete', {
        url: '/postDelete/{id}',

        views: getViews({
          templateUrl: '/partials/post.delete',
          controller:  'post.DeleteCtrl',
        }),

        onEnter: adminReroute(true),

        resolve: {
          post: postPromise,
        },
      });

    $urlRouterProvider.otherwise('home');
  };
});
