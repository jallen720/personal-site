define([
  'app',
],

function(app) {
  app.controller('post.EditorCtrl',

  function($scope) {
    $('#editor-preview').hide()

    function setSwitcherOn(switcher, isOn) {
      $('#switcher-' + switcher).toggleClass('switcher-selected', isOn);
    }

    setSwitcherOn('left', true);

    function updateSwitchers(isForm) {
      setSwitcherOn('left', isForm);
      setSwitcherOn('right', !isForm);
    }

    function offView(isForm) {
      return isForm ? 'preview' : 'form';
    }

    function fadeViews(onView, offView) {
      const FADE_DURATION = 100;

      $('#editor-' + offView).fadeOut(FADE_DURATION, function() {
        $('#editor-' + onView).fadeIn(FADE_DURATION);
      });
    }

    $scope.switchTo = function(view) {
      var isForm = view === 'form';
      updateSwitchers(isForm);
      fadeViews(view, offView(isForm));
    };
  });
});
