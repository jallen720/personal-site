require([
  // Register modules.
  'modules/blog',

  // Run initialization scripts.
  'initialization/smoothScroll',
  'initialization/scrollToTop',
  'initialization/authentication',
  'initialization/disqus',

  // Register states.
  'states/settings',
  'states/login',
  'states/home',
  'states/default',
  'states/post/create',
  'states/post/read',
  'states/post/update',
  'states/post/delete',

  // Register services.
  'services/posts',
  'services/admin',
  'services/token',

  // Register directives.
  'directives/dirDisqus',

  // Register controllers.
  'controllers/NavigationCtrl',
  'controllers/HomeCtrl',
  'controllers/LoginCtrl',
  'controllers/BioCtrl',
  'controllers/DisqusCtrl',
  'controllers/TinyMceCtrl',
  'controllers/post/CreateCtrl',
  'controllers/post/ReadCtrl',
  'controllers/post/UpdateCtrl',
  'controllers/post/DeleteCtrl',
  'controllers/post/BodyCtrl',
  'controllers/post/EditorCtrl',
  'controllers/settings/BioCtrl',
  'controllers/settings/EmailCtrl',
  'controllers/settings/PasswordCtrl',
],

function() {
  // Bootstrap application modules.
  angular.bootstrap(document, [
    'blog',
  ]);
});
