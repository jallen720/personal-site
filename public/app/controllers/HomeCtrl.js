define([
  'modules/blog',
  'controllers/helpers/resourceAction',
],

function(blog, resourceAction) {
  function HomeCtrl($scope, $state, allPosts, admin) {
    $scope.posts      = allPosts;
    $scope.isLoggedIn = admin.isLoggedIn;
    $scope.postAction = resourceAction($state, 'post');
  }

  blog.controller('HomeCtrl', HomeCtrl);
});
