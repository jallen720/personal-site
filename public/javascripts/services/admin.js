app.factory('admin',

function($http, $window) {
  var admin = {};
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

  function saveToken(token) {
    $window.localStorage[TOKEN_NAME] = token;
  }

  function loadToken() {
    return $window.localStorage[TOKEN_NAME];
  }

  admin.isLoggedIn = function() {
    return isValidToken(loadToken());
  };

  admin.logIn = function(credentials) {
    return $http.post('/admin', credentials)
      .success(function(data) {
        saveToken(data.token);
      });
  };

  admin.logOut = function() {
    $window.localStorage.removeItem(TOKEN_NAME);
  };

  admin.getInfo = function() {
    return $http.get('/admin');
  };

  admin.getAuthHeader = function() {
    return {
      headers: {
        Authorization: 'Bearer ' + loadToken(),
      },
    };
  };

  admin.updateBio = function(bio) {
    return $http.patch(
      '/admin/bio',
      bio,
      admin.getAuthHeader()
    );
  };

  admin.updatePassword = function(password) {
    return $http.patch(
      '/admin/password',
      password,
      admin.getAuthHeader()
    );
  };

  return admin;
}

);
