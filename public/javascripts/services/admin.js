var app = angular.module('angular-express');

app.factory('admin', [
  '$http',
  function($http) {
    var _isLoggedIn = false;

    return {
      isLoggedIn: function() {
        return _isLoggedIn;
      },

      login: function(credentials) {
        return $http.post('/login', credentials).success(function() {
          _isLoggedIn = true;
        });
      },
    };
  }
]);