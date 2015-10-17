app.controller('settingsBio',

function($scope, admin) {
  $scope.headingName = 'Change Bio';

  $scope.submit = function() {
    console.log('Bio submit()');
  };

  admin.getInfo().success(function(admin) {
    $scope.bio = admin.bio;
  });
}

);
