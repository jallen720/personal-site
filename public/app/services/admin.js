define([
  'modules/blog',
],

function(blog) {
  function Admin($http, token) {
    var admin = {};

    admin.isLoggedIn = function() {
      return token.isValid();
    };

    admin.logIn = function(credentials) {
      return $http.post('/login', credentials)
        .success(function(data) {
          token.save(data.token);
        });
    };

    admin.logOut = function() {
      token.destroy();
    };

    admin.getAuthHeader = function() {
      return {
        headers: {
          Authorization: 'Bearer ' + token.load(),
        },
      };
    };

    admin.update = function(info, data) {
      return $http.patch(
        '/admin/' + info,
        data,
        this.getAuthHeader()
      );
    };

    return admin;
  }

  blog.factory('admin', Admin);
});
