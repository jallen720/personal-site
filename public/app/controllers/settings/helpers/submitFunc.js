define(function() {
  return function($scope, admin, prop) {
    return function() {
      admin.update(prop, $scope[prop])
        .error(function(error) {
          $scope.error   = error;
          $scope.success = undefined;
        })

        .success(function() {
          $scope.success = 'Your ' + prop + ' has been successfully updated!';
          $scope.error   = undefined;
          $scope[prop]   = {};
        });
    };
  };
});
