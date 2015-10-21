define([
  'modules/blog',
],

function(blog) {
  function Posts($http, admin) {
    var posts = {};

    posts.getAll = function() {
      return $http.get('/posts');
    };

    posts.create = function(post) {
      return $http.post(
        '/posts',
        post,
        admin.getAuthHeader()
      );
    };

    posts.delete = function(id) {
      return $http.delete(
        '/posts/' + id,
        admin.getAuthHeader()
      );
    };

    posts.get = function(id) {
      return $http.get('/posts/' + id);
    };

    posts.update = function(id, post) {
      return $http.patch(
        '/posts/' + id,
        post,
        admin.getAuthHeader()
      );
    };

    return posts;
  }

  blog.factory('posts', Posts);
});
