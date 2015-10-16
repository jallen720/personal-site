app.controller('settings',

function($scope) {
  $('#change-password').hide()

  function setSwitcherOn(switcher, isOn) {
    $('#switcher-' + switcher).toggleClass('switcher-selected', isOn);
  }

  setSwitcherOn('left', true);

  function updateSwitchers(isChangeEmail) {
    setSwitcherOn('left', isChangeEmail);
    setSwitcherOn('right', !isChangeEmail);
  }

  function offView(isChangeEmail) {
    return isChangeEmail ? 'change-password' : 'change-email';
  }

  function fadeViews(onView, offView) {
    const FADE_DURATION = 100;

    $('#' + offView).fadeOut(FADE_DURATION, function() {
      $('#' + onView).fadeIn(FADE_DURATION);
    });
  }

  $scope.switchTo = function(view) {
    var isChangeEmail = view === 'change-email';
    updateSwitchers(isChangeEmail);
    fadeViews(view, offView(isChangeEmail));
  };
}

);
