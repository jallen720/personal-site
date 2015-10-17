app.controller('settingsEmail',

function($scope, admin) {
  $scope.headingName = 'Change E-mail';

  $scope.submit = function() {
    console.log('Email submit()');
  };
}

);
