define([
  'app',
],

function(app) {
  app.factory('posts', function($http, admin) {
    return {
      getAll: function() {
        return $http.get('/posts');
      },

      create: function(post) {
        return $http.post(
          '/posts',
          post,
          admin.getAuthHeader()
        );
      },

      delete: function(id) {
        return $http.delete(
          '/posts/' + id,
          admin.getAuthHeader()
        );
      },

      get: function(id) {
        return $http.get('/posts/' + id);
      },

      update: function(id, post) {
        return $http.patch(
          '/posts/' + id,
          post,
          admin.getAuthHeader()
        );
      },
    };
  });
});
