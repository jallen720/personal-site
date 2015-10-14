app.factory('posts',

function($http, admin) {
  function authHeader(token) {
    return {
      headers: {
        Authorization: 'Bearer ' + token
      }
    }
  }

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

    update: function(id, post) {
      return $http.patch(
        '/posts/' + id,
        post,
        authHeader(admin.loadToken())
      );
    },
  };
}

);
