require([
  // Register modules.
  'modules/blog',

  // Run initialization scripts.
  'initialization/smoothScroll',
  'initialization/scrollToTop',
  'initialization/authentication',

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

  // Register controllers.
  'controllers/NavigationCtrl',
  'controllers/HomeCtrl',
  'controllers/LoginCtrl',
  'controllers/BioCtrl',
  'controllers/post/CreateCtrl',
  'controllers/post/ReadCtrl',
  'controllers/post/UpdateCtrl',
  'controllers/post/DeleteCtrl',
  'controllers/post/FormCtrl',
  'controllers/post/BodyCtrl',
  'controllers/post/EditorCtrl',
  'controllers/settings/BioCtrl',
  'controllers/settings/EmailCtrl',
  'controllers/settings/PasswordCtrl',
  'controllers/settings/bio/TinyMceCtrl',
],

function() {
  // Bootstrap application modules.
  angular.bootstrap(document, [
    'blog',
  ]);
});
