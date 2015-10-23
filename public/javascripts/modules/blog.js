define([
  'angular',
  'uiRouter',
  'uiTinyMce',
  'angularMd5',
  'modules/disqus',
],

function() {
  return angular.module('blog', [
    'ui.router',
    'ui.tinymce',
    'angular-md5',
    'blog.disqus',
  ]);
});
