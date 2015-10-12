var app = angular.module('angular-express');

app.controller(
  'postForm',
  function($scope) {
    var TOOLS = [
      'sizeselect',
      'bold italic',
      'fontselect',
      'fontsizeselect',
    ].join(' | ');

    $scope.tinymceOptions = {
      content_css: 'stylesheets/style.css',
      menubar: false,
      statusbar: false,
      toolbar: TOOLS,
    };
  }
);
