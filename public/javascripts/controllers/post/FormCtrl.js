define([
  'app',
],

function(app) {
  app.controller('post.FormCtrl',

  function($scope) {
    $scope.options = {
      content_css: 'stylesheets/style.css',
      menubar:     false,
      statusbar:   false,

      plugins: [
        'advlist autolink autoresize lists link image charmap print hr anchor pagebreak',
        'searchreplace wordcount visualblocks visualchars code fullscreen',
        'insertdatetime nonbreaking save table contextmenu directionality',
        'emoticons template paste textcolor colorpicker textpattern',
      ],

      toolbar:
        'styleselect | bold italic | alignleft aligncenter alignright alignju' +
        'stify | bullist numlist outdent indent | link image | forecolor back' +
        'color emoticons | undo redo',

      image_advtab: true,
    };
  });
});
