var app = angular.module('angular-express', [
  'ui.router',
]);

var allPostsPromise = function(posts) {
  return posts.getAll()
    .then(function(res) {
      return res.data.reverse();
    });
}

var postPromise = function($stateParams, posts) {
  return posts.get($stateParams.id)
    .then(function(res) {
      return res.data;
    });
}

var nonAdminReroute = function($state, admin) {
  if (!admin.isLoggedIn()) {
    $state.go('home');
  }
}

var adminReroute = function($state, admin) {
  console.log('admin.isLoggedIn(): ' + admin.isLoggedIn());
  if (admin.isLoggedIn()) {
    $state.go('home');
  }
}

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url:         '/home',
      templateUrl: '/partials/home',
      controller:  'home',

      resolve: {
        allPosts: allPostsPromise,
      },
    })

    .state('createPost', {
      url:         '/createPost',
      templateUrl: '/partials/postForm',
      controller:  'createPost',
      onEnter:     nonAdminReroute,
    })

    .state('editPost', {
      url:         '/editPost/{id}',
      templateUrl: '/partials/postForm',
      controller:  'editPost',
      onEnter:     nonAdminReroute,

      resolve: {
        post: postPromise,
      },
    })

    .state('deletePost', {
      url:         '/deletePost/{id}',
      templateUrl: '/partials/deletePost',
      controller:  'deletePost',
      onEnter:     nonAdminReroute,

      resolve: {
        post: postPromise,
      },
    })

    .state('admin', {
      url:         '/admin',
      templateUrl: '/partials/admin',
      controller:  'admin',
      onEnter:     adminReroute,
    });

  $urlRouterProvider.otherwise('home');
});
