require([
  // Register modules.
  'modules/blog',

  // Run initialization scripts.
  'initialization/authentication',
  'initialization/disqus',
  'initialization/scrollToTop',
  'initialization/smoothScroll',

  // Register states.
  'states/portfolio/create',
  'states/portfolio/update',
  'states/post/create',
  'states/post/delete',
  'states/post/read',
  'states/post/update',
  'states/default',
  'states/home',
  'states/login',
  'states/portfolio',
  'states/settings',

  // Register services.
  'services/admin',
  'services/portfolio',
  'services/posts',
  'services/token',

  // Register directives.
  'directives/dirDisqus',

  // Register controllers.
  'controllers/portfolio/CreateCtrl',
  'controllers/portfolio/UpdateCtrl',
  'controllers/post/CreateCtrl',
  'controllers/post/DeleteCtrl',
  'controllers/post/ReadCtrl',
  'controllers/post/UpdateCtrl',
  'controllers/settings/BioCtrl',
  'controllers/settings/EmailCtrl',
  'controllers/settings/PasswordCtrl',
  'controllers/BioCtrl',
  'controllers/BodyCtrl',
  'controllers/DisqusCtrl',
  'controllers/EditorCtrl',
  'controllers/HomeCtrl',
  'controllers/LoginCtrl',
  'controllers/NavigationCtrl',
  'controllers/PortfolioCtrl',
  'controllers/TinyMceCtrl',
],

function() {
  // Bootstrap application modules.
  angular.bootstrap(document, [
    'blog',
  ]);
});
