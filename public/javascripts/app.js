define([
  'helpers/scrollToTop',
  'config',
  'angular',
  'uiRouter',
  'uiTinyMce',
  'angularMd5',
],

function(scrollToTop, config) {
  var app = angular.module('angular-express', [
    'ui.router',
    'ui.tinymce',
    'angular-md5',
  ]);

  app.run(scrollToTop);
  app.config(config);

  return app;
});
