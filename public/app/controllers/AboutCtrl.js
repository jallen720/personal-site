define([
  'modules/blog',
  'controllers/helpers/resourceAction',
],

function(blog, resourceAction) {
  function AboutCtrl($scope, $state, admin, aboutInfo) {
    $scope.aboutAction = resourceAction($state, 'about');
    $scope.isLoggedIn  = admin.isLoggedIn;
    $scope.resource    = aboutInfo;
  }

  blog.controller('AboutCtrl', AboutCtrl);
});
