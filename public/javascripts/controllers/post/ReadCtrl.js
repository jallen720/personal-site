define([
  'app',
],

function(app) {
  function ReadCtrl($scope, post) {
    $scope.post = post;
  }

  app.controller('post.ReadCtrl', ReadCtrl);
});
