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
    })

    .state('editPost', {
      url:         '/editPost/{id}',
      templateUrl: '/partials/postForm',
      controller:  'editPost',

      resolve: {
        post: postPromise,
      },
    })

    .state('deletePost', {
      url:         '/deletePost/{id}',
      templateUrl: '/partials/deletePost',
      controller:  'deletePost',

      resolve: {
        post: postPromise,
      },
    })

    .state('admin', {
      url:         '/admin',
      templateUrl: '/partials/admin',
      controller:  'admin',
    });

  $urlRouterProvider.otherwise('home');
});
