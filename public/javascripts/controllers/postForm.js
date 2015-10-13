var app = angular.module('angular-express');

app.controller(
  'postForm',
  function($scope) {
    $scope.tinymceOptions = {
      content_css: 'stylesheets/style.css',
      menubar:     false,
      statusbar:   false,

      plugins: [
        'advlist autolink lists link image charmap print preview hr anchor pagebreak',
        'searchreplace wordcount visualblocks visualchars code fullscreen',
        'insertdatetime nonbreaking save table contextmenu directionality',
        'emoticons template paste textcolor colorpicker textpattern',
      ],

      toolbar:
        'preview | styleselect | bold italic | alignleft aligncenter alignrig' +
        'ht alignjustify | bullist numlist outdent indent | link image | fore' +
        'color backcolor emoticons | undo redo',

      image_advtab: true,
    };
  }
);
