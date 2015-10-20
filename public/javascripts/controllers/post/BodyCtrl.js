define([
  'app',
],

function(app) {
  function BodyCtrl($scope, $sce) {
    $scope.trust = $sce.trustAsHtml;
  }

  app.controller('post.BodyCtrl', BodyCtrl);
});
