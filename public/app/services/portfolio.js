define([
  'modules/blog',
],

function(blog) {
  function Portfolio($http, admin) {
    var portfolio = {};

    portfolio.getAll = function() {
      return $http.get('/portfolioItems');
    };

    portfolio.create = function(item) {
      return $http.post(
        '/portfolioItems',
        item,
        admin.getAuthHeader()
      );
    };

    portfolio.delete = function(id) {
      return $http.delete(
        '/portfolioItems/' + id,
        admin.getAuthHeader()
      );
    };

    portfolio.get = function(id) {
      return $http.get('/portfolioItems/' + id);
    };

    portfolio.update = function(id, item) {
      return $http.patch(
        '/portfolioItems/' + id,
        item,
        admin.getAuthHeader()
      );
    };

    return portfolio;
  }

  blog.factory('portfolio', Portfolio);
});
