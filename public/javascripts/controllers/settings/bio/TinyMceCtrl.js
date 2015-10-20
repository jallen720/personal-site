define([
  'app',
],

function(app) {
  app.controller('settings.bio.TinyMceCtrl',

  function($scope, admin) {
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
        'styleselect | bold italic | alignleft aligncenter alignright alignjust' +
        'ify | bullist numlist outdent indent | link image | forecolor backcolo' +
        'r emoticons | undo redo',

      image_advtab: true,
    };
  });
});
