define([
  'app',
],

function(app) {
  function HomeCtrl($scope, $state, allPosts, admin) {
    $scope.posts      = allPosts;
    $scope.isLoggedIn = admin.isLoggedIn;

    $scope.postAction = function(action, id) {
      $state.go('post' + action, { id: id });
    };
  }

  app.controller('HomeCtrl', HomeCtrl);
});
