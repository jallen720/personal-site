app.controller('settings',

function($scope) {
  $('#change-password').hide()

  function setSwitcherOn(switcher, isOn) {
    $('#switcher-' + switcher).toggleClass('switcher-selected', isOn);
  }

  setSwitcherOn('left', true);

  function updateSwitchers(isChangeUsername) {
    setSwitcherOn('left', isChangeUsername);
    setSwitcherOn('right', !isChangeUsername);
  }

  function offView(isChangeUsername) {
    return isChangeUsername ? 'change-password' : 'change-username';
  }

  function fadeViews(onView, offView) {
    const FADE_DURATION = 100;

    $('#' + offView).fadeOut(FADE_DURATION, function() {
      $('#' + onView).fadeIn(FADE_DURATION);
    });
  }

  $scope.switchTo = function(view) {
    var isChangeUsername = view === 'change-username';
    updateSwitchers(isChangeUsername);
    fadeViews(view, offView(isChangeUsername));
  };
}

);
