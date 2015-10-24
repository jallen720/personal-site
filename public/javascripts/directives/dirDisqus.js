define([
  'modules/blog',
  'directives/helpers/validateReqdAttribs',
  'directives/helpers/readyToBindFunc',
],

function(blog, validateReqdAttribs, readyToBindFunc) {
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

  blog.directive('dirDisqus', dirDisqus);
});
