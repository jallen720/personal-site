define([
  'jquery',
],

function() {
  function offView(isForm) {
    return isForm ? 'preview' : 'form';
  }

  return function(onView, isForm) {
    const FADE_DURATION = 100;

    $('#editor-' + offView(isForm)).fadeOut(FADE_DURATION, function() {
      $('#editor-' + onView).fadeIn(FADE_DURATION);
    });
  };
});
