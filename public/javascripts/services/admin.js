var app = angular.module('angular-express');

app.factory('admin', function($http, $window) {
  var TOKEN_NAME = 'blog-admin-token';

  function getPayload(token) {
    return JSON.parse($window.atob(token.split('.')[1]));
  }

  function isExpired(token) {
    return getPayload(token).expiration <= Date.now() / 1000;
  }

  function isValidToken(token) {
    return token && !isExpired(token);
  }

  function loadToken() {
    return $window.localStorage[TOKEN_NAME];
  }

  function saveToken(token) {
    $window.localStorage[TOKEN_NAME] = token;
  }

  return {
    isLoggedIn: function() {
      return isValidToken(loadToken());
    },

    logIn: function(credentials) {
      return $http.post('/login', credentials)
        .success(function(data) {
          saveToken(data.token);
        });
    },

    logOut: function() {
      $window.localStorage.removeItem(TOKEN_NAME);
    },
  };
});
