$(function() {
  var $window = $(window);

  var scroll = {
    time: 0.4,
    dist: 175,
  };

  function getDelta(originalEvent) {
    return originalEvent.wheelDelta / 120 ||
           -originalEvent.detail / 3
  }

  function getFinalScroll(scrollTop, delta) {
    return scrollTop - parseInt(delta * scroll.dist);
  }

  function getScrollTo(originalEvent) {
    return {
      y: getFinalScroll(
        $window.scrollTop(),
        getDelta(originalEvent)
      ),

      autoKill: true,
    }
  }

  $window.on("mousewheel DOMMouseScroll", function(event) {
    // Prevent default scrolling.
    event.preventDefault();

    TweenMax.to($window, scroll.time, {
      scrollTo:  getScrollTo(event.originalEvent),
      ease:      Power1.easeOut,
      overwrite: 5,
    });
  });
});
