define([
  'directives/helpers/setupScript',
  'angular',
],

function(setupScript) {
  return function($window, scope) {
    // Put the config variables into separate globals so the Disqus script can
    // see them.
    function setGlobalConfig() {
      $window.disqus_shortname  = scope.shortname;
      $window.disqus_identifier = scope.identifier;
      $window.disqus_title      = scope.title;
      $window.disqus_url        = scope.url;
    }

    return function(isReady) {
      // If the directive has been called without the 'ready-to-bind' attribute,
      // we set the default to "true" so Disqus will be loaded straight away.
      if (!angular.isDefined(isReady)) {
        isReady = "true";
      }

      if (scope.$eval(isReady)) {
        setGlobalConfig();
        setupScript($window.DISQUS, scope);
      }
    };
  };
});
