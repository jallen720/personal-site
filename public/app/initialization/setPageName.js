define([
  'modules/blog',
  'initialization/helpers/pageNames'
],

function(blog, pageNames) {
  blog.run(function($rootScope) {
    function setPageName(_, toState) {
      $rootScope.pageName = pageNames.find(function(pageName) {
        return pageName.isForState(toState.name);
      }).value;
    }

    $rootScope.$on('$stateChangeSuccess', setPageName);
  });
});
