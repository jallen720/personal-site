define([
  'modules/blog',
  'controllers/post/helpers/switchTo',
  'controllers/post/helpers/setSwitcherOn',
  'jquery',
],

function(blog, switchTo, setSwitcherOn) {
  function EditorCtrl($scope) {
    $scope.switchTo = switchTo;
    setSwitcherOn('left', true);
    $('#editor-preview').hide();
  }

  blog.controller('post.EditorCtrl', EditorCtrl);
});
