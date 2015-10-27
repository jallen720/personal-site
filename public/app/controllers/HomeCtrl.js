define([
  'modules/blog',
],

function(blog) {
  function HomeCtrl($scope, $state, allPosts, admin) {
    $scope.posts      = allPosts;
    $scope.isLoggedIn = admin.isLoggedIn;

    $scope.postAction = function(action, id) {
      $state.go('post' + action, { id: id });
    };
  }

  blog.controller('HomeCtrl', HomeCtrl);
});
