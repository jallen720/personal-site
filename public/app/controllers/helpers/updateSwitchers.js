define([
  'controllers/helpers/setSwitcherOn',
],

function(setSwitcherOn) {
  return function(isForm) {
    setSwitcherOn('left', isForm);
    setSwitcherOn('right', !isForm);
  };
});
