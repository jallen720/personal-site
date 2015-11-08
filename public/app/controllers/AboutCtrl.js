define([
  'modules/blog',
],

function(blog) {
  function gravatarURL(emailHash) {
    const ADMIN_IMAGE_SIZE = 256;
    const GRAVATAR_URL = 'http://www.gravatar.com/avatar/';
    return GRAVATAR_URL + emailHash + '?s=' + ADMIN_IMAGE_SIZE;
  }

  function AboutCtrl($scope, $sce, md5, admin) {
    admin.getInfo().success(function(info) {
      $scope.adminImage = gravatarURL(md5.createHash(info.email));
      $scope.bio        = $sce.trustAsHtml(info.bio);
    });
  }

  blog.controller('AboutCtrl', AboutCtrl);
});
