require.config({
  paths: {
    angular:        '../lib/angular/angular.min',
    angularMd5:     '../lib/angular-md5/angular-md5.min',
    uiRouter:       '../lib/angular-ui-router/release/angular-ui-router.min',
    tinyMce:        '../lib/tinymce/tinymce.min',
    uiTinyMce:      '../lib/angular-ui-tinymce/src/tinymce',
    jquery:         '../lib/jquery/dist/jquery.min',
    TweenMax:       '../lib/gsap/src/minified/TweenMax.min',
    ScrollToPlugin: '../lib/gsap/src/minified/plugins/ScrollToPlugin.min',
  },

  shim: {
    angularMd5: {
      deps: [
        'angular',
      ],
    },

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
  },

  deps: [
    'bootstrap',
  ],
});
