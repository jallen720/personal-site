define([
  'modules/blog',
],

function(blog) {
  function Token($window) {
    const NAME = 'blog-admin-token';
    var token = {};

    function exists(token) {
      return token !== undefined;
    }

    function getPayload(token) {
      return JSON.parse($window.atob(token.split('.')[1]));
    }

    function isExpired(token) {
      return getPayload(token).expiration <= Date.now() / 1000;
    }

    function validate(token) {
      return exists(token) && !isExpired(token);
    }

    token.isValid = function() {
      return validate(this.load());
    };

    token.save = function(token) {
      $window.localStorage[NAME] = token;
    };

    token.load = function() {
      return $window.localStorage[NAME];
    };

    token.destroy = function() {
      $window.localStorage.removeItem(NAME);
    };

    return token;
  }

  blog.factory('token', Token);
});
