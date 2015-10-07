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

      .state('addPost', {
        url:         '/addPost',
        templateUrl: '/partials/addPost',
        controller:  'addPost'
      })

      .state('editPost', {
        url:         '/editPost/{index}',
        templateUrl: '/partials/editPost',
        controller:  'editPost'
      })

      .state('deletePost', {
        url:         '/deletePost/{index}',
        templateUrl: '/partials/deletePost',
        controller:  'deletePost'
      });

    $urlRouterProvider.otherwise('home');
  }
]);
