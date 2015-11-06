define([
  'modules/blog',
  'controllers/helpers/switchTo',
  'controllers/helpers/setSwitcherOn',
  'jquery',
],

function(blog, switchTo, setSwitcherOn) {
  function EditorCtrl($scope) {
    $scope.switchTo = switchTo;
    setSwitcherOn('left', true);
    $('#editor-preview').hide();
  }

  blog.controller('EditorCtrl', EditorCtrl);
});
