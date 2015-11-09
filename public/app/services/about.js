define([
  'modules/blog',
],

function(blog) {
  function About($http, admin) {
    var about = {};

    about.getInfo = function() {
      return $http.get('/aboutInfo');
    };

    about.update = function(info) {
      return $http.patch(
        '/aboutInfo',
        info,
        admin.getAuthHeader()
      );
    };

    return about;
  }

  blog.factory('about', About);
});
