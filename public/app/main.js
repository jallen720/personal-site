require.config({
  paths: {
    angular:        '../lib/angular/angular.min',
    uiRouter:       '../lib/angular-ui-router/release/angular-ui-router.min',
    tinyMce:        '../lib/tinymce/tinymce.min',
    uiTinyMce:      '../lib/angular-ui-tinymce/src/tinymce',
    jquery:         '../lib/jquery/dist/jquery.min',
    TweenMax:       '../lib/gsap/src/minified/TweenMax.min',
    ScrollToPlugin: '../lib/gsap/src/minified/plugins/ScrollToPlugin.min',
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
  },

  deps: [
    'bootstrap',
  ],
});
