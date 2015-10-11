var app = angular.module('angular-express');

function authHeader(token) {
  return {
    headers: {
      Authorization: 'Bearer ' + token
    }
  }
}

app.factory('posts', function($http, admin) {
  return {
    getAll: function() {
      return $http.get('/posts');
    },

    create: function(post) {
      return $http.post(
        '/posts',
        post,
        authHeader(admin.loadToken())
      );
    },

    delete: function(id) {
      return $http.delete(
        '/posts/' + id,
        authHeader(admin.loadToken())
      );
    },

    get: function(id) {
      return $http.get('/posts/' + id);
    },

    set: function(id, post) {
      return $http.post(
        '/posts/' + id,
        post,
        authHeader(admin.loadToken())
      );
    },
  };
});
