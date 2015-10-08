var app = angular.module('angular-express', [
  'ui.router',
]);

app.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url:         '/home',
        templateUrl: '/partials/home',
        controller:  'home'
      })

      .state('createPost', {
        url:         '/createPost',
        templateUrl: '/partials/postForm',
        controller:  'createPost'
      })

      .state('editPost', {
        url:         '/editPost/{id}',
        templateUrl: '/partials/postForm',
        controller:  'editPost'
      })

      .state('deletePost', {
        url:         '/deletePost/{id}',
        templateUrl: '/partials/deletePost',
        controller:  'deletePost'
      });

    $urlRouterProvider.otherwise('home');
  }
]);
