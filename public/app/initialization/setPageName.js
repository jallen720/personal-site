define([
  'modules/blog',
  'initialization/helpers/getPageInfo'
],

function(blog, getPageInfo) {
  blog.run(function($rootScope) {
    function setPageName(_, toState) {
      $rootScope.pageName = getPageInfo(toState).name;
    }

    $rootScope.$on('$stateChangeSuccess', setPageName);
  });
});
