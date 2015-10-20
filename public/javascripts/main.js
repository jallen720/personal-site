require([
  // 3rd-party dependencies
  '../angular/angular.js',
  '../angular-ui-router/release/angular-ui-router.min.js',
  '../tinymce/tinymce.js',
  '../angular-ui-tinymce/src/tinymce.js',
  '../jquery/dist/jquery.min.js',
  '../gsap/src/minified/TweenMax.min.js',
  '../gsap/src/minified/plugins/ScrollToPlugin.min.js',
  '../angular-md5/angular-md5.min.js',

  'app',
  'services/posts',
  'services/admin',
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
  'helpers/smoothScroll',
],

function() {
  angular.bootstrap(document, [ 'angular-express' ]);
});
