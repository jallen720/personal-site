define(function() {
  var bioView = {
    templateUrl: '/partials/bio',
    controller:  'BioCtrl',
  };

  return function(mainView, sideView) {
    return {
      main: mainView,
      side: sideView || bioView,
    };
  };
});
