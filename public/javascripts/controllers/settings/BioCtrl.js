define([
  'app',
  'controllers/settings/helpers/submitFunc',
],

function(app, submitFunc) {
  function BioCtrl($scope, $state, admin) {
    $scope.heading = 'Change Bio';
    $scope.bio     = {};

    $scope.submit = submitFunc($scope, admin, 'bio', function() {
      $scope.bio.password = '';
    });

    admin.getInfo()
      .error(function(error) {
        $scope.error = error;
      })

      .success(function(admin) {
        $scope.bio.content = admin.bio;
      });
  }

  app.controller('settings.BioCtrl', BioCtrl);
});
