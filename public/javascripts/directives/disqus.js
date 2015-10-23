define([
  'modules/disqus',
  'directives/helpers/validateReqdAttribs',
  'directives/helpers/readyToBindFunc',
  'angular',
],

function(disqus, validateReqdAttribs, readyToBindFunc) {
  function dirDisqus($window) {
    return {
      restrict: 'E',

      scope: {
        shortname:   '@shortname',
        identifier:  '@identifier',
        title:       '@title',
        url:         '@url',
        readyToBind: '@',
      },

      templateUrl: '/partials/disqus',

      link: function(scope) {
        validateReqdAttribs(scope);
        scope.$watch('readyToBind', readyToBindFunc($window, scope));
      },
    };
  }

  disqus.directive('dirDisqus', dirDisqus);
});
