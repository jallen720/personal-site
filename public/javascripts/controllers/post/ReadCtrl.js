define([
  'app',
],

function(app) {
  app.controller('post.ReadCtrl',

  function($scope, post) {
    $scope.post = post;
  });
});
