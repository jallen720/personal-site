define([
  'modules/blog',
],

function(blog) {
  function disqusUrl($scope) {
    const BASE_URL = 'http://localhost:3000/postRead/';
    return BASE_URL + $scope.post._id;
  }

  function DisqusCtrl($scope) {
    const SHORTNAME = 'joelallensblog';
    this.shortname  = SHORTNAME;
    this.url        = disqusUrl($scope);
  }

  blog.controller('DisqusCtrl', DisqusCtrl);
});
