app.controller('post.BodyCtrl',

function($scope, $sce) {
  $scope.trust = $sce.trustAsHtml;
}

);
