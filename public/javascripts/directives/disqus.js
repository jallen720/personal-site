define([
  'modules/disqus',
  'directives/helpers/validateReqdAttribs',
  'directives/helpers/readyToBindFunc',
],

function(disqus, validateReqdAttribs, readyToBindFunc) {
  function dirDisqus($window) {
    return {
      restrict:    'E',
      templateUrl: '/partials/disqus',

      scope: {
        shortname:   '@shortname',
        identifier:  '@identifier',
        title:       '@title',
        url:         '@url',
        readyToBind: '@',
      },

      link: function(scope) {
        validateReqdAttribs(scope);
        scope.$watch('readyToBind', readyToBindFunc($window, scope));
      },
    };
  }

  disqus.directive('dirDisqus', dirDisqus);
});
