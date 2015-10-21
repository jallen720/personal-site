define([
  'modules/blog',
  'controllers/settings/helpers/submitFunc',
],

function(blog, submitFunc) {
  function EmailCtrl($scope, $state, admin) {
    $scope.heading = 'Change E-mail';
    $scope.email   = {};
    $scope.submit  = submitFunc($scope, admin, 'email');
  }

  blog.controller('settings.EmailCtrl', EmailCtrl);
});
