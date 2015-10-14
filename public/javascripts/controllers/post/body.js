app.controller('postBody',

function($scope, $sce) {
  $scope.trust = $sce.trustAsHtml;
}

);
