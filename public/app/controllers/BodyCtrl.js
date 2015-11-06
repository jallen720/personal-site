define([
  'modules/blog',
],

function(blog) {
  function BodyCtrl($sce) {
    this.trust = $sce.trustAsHtml;
  }

  blog.controller('BodyCtrl', BodyCtrl);
});
