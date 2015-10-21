define([
  'modules/blog',
],

function(blog) {
  function BodyCtrl($scope, $sce) {
    $scope.trust = $sce.trustAsHtml;
  }

  blog.controller('post.BodyCtrl', BodyCtrl);
});
