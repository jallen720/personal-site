define([
  'app',
  'controllers/post/helpers/switchTo',
  'controllers/post/helpers/setSwitcherOn',
  'jquery',
],

function(app, switchTo, setSwitcherOn) {
  function EditorCtrl($scope) {
    $scope.switchTo = switchTo;
    setSwitcherOn('left', true);
    $('#editor-preview').hide();
  }

  app.controller('post.EditorCtrl', EditorCtrl);
});
