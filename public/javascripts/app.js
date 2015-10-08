var app = angular.module('angular-express', [
  'ui.router',
]);

var postsPromise = [
  'posts',
  function(posts) {
    posts.load();
  }
]

var postPromise = [
  '$stateParams',
  'posts',
  function($stateParams, posts) {
    return posts.get($stateParams.id)
      .then(function(res) {
        return res.data;
      });
  }
]

app.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url:         '/home',
        templateUrl: '/partials/home',
        controller:  'home',

        resolve: {
          loadPosts: postsPromise
        }
      })

      .state('createPost', {
        url:         '/createPost',
        templateUrl: '/partials/postForm',
        controller:  'createPost'
      })

      .state('editPost', {
        url:         '/editPost/{id}',
        templateUrl: '/partials/postForm',
        controller:  'editPost',

        resolve: {
          post: postPromise
        }
      })

      .state('deletePost', {
        url:         '/deletePost/{id}',
        templateUrl: '/partials/deletePost',
        controller:  'deletePost',

        resolve: {
          post: postPromise
        }
      });

    $urlRouterProvider.otherwise('home');
  }
]);
