define(function() {
  return function($scope, admin, prop, onSuccess) {
    return function() {
      admin.update(prop, $scope[prop])
        .error(function(error) {
          $scope.error   = error;
          $scope.success = undefined;
        })

        .success(function() {
          $scope.success = 'Your ' + prop + ' has been successfully updated!';
          $scope.error   = undefined;

          if (onSuccess) {
            onSuccess();
          } else {
            $scope[prop] = {};
          }
        });
    };
  };
});
