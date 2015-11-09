define([
  // Run initialization scripts.
  'initialization/authentication',
  'initialization/html5',
  'initialization/scrollToTop',
  'initialization/setPageName',
  'initialization/smoothScroll',

  // Register states.
  'states/default',
  'states/login',

  // Register services.
  'services/admin',
  'services/token',

  // Register controllers.
  'controllers/BodyCtrl',
  'controllers/EditorCtrl',
  'controllers/FooterCtrl',
  'controllers/LoginCtrl',
  'controllers/NavigationCtrl',
  'controllers/TinyMceCtrl',
]);
