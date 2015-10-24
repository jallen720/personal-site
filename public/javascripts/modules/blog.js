define([
  'angular',
  'uiRouter',
  'uiTinyMce',
  'angularMd5',
],

function() {
  return angular.module('blog', [
    'ui.router',
    'ui.tinymce',
    'angular-md5',
  ]);
});
