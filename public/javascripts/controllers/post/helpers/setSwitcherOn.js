define([
  'jquery',
],

function() {
  return function(switcher, isOn) {
    $('#switcher-' + switcher).toggleClass('switcher-selected', isOn);
  };
});
