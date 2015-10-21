require.config({
  paths: {
    angular:        '../angular/angular.min',
    uiRouter:       '../angular-ui-router/release/angular-ui-router.min',
    tinyMce:        '../tinymce/tinymce.min',
    uiTinyMce:      '../angular-ui-tinymce/src/tinymce',
    angularMd5:     '../angular-md5/angular-md5.min',
    jquery:         '../jquery/dist/jquery.min',
    TweenMax:       '../gsap/src/minified/TweenMax.min',
    ScrollToPlugin: '../gsap/src/minified/plugins/ScrollToPlugin.min',
  },

  shim: {
    uiRouter: {
      deps: [
        'angular',
      ],
    },

    uiTinyMce: {
      deps: [
        'angular',
        'tinyMce',
      ],
    },

    angularMd5: {
      deps: [
        'angular',
      ],
    },
  },
});

require([
  // Register modules.
  'modules/blog',

  // Run initialization scripts.
  'initialization/smoothScroll',
  'initialization/scrollToTop',

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
    'blog'
  ]);
});
