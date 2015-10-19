app.controller('BioCtrl',

function($scope, $sce, md5, admin) {
  function gravatarURL(emailHash, size) {
    const GRAVATAR = 'http://www.gravatar.com/avatar/';
    return GRAVATAR + emailHash + '?s=' + size;
  }

  admin.getInfo().success(function(info) {
    $scope.adminImage = gravatarURL(md5.createHash(info.email), 256);
    $scope.bio = $sce.trustAsHtml(info.bio);
  });
}

);
