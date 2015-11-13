define([
  'modules/blog',
],

function(blog) {
  function TinyMceCtrl() {
    this.options = {
      content_css:  '/res/css/style.css',
      menubar:      false,
      statusbar:    false,
      image_advtab: true,

      plugins:
        'advlist autolink autoresize lists link image charmap print hr ' +
        'anchor pagebreak searchreplace wordcount visualblocks visualchars ' +
        'code fullscreen insertdatetime nonbreaking save table contextmenu ' +
        'directionality emoticons template paste textcolor colorpicker ' +
        'textpattern',

      toolbar:
        'styleselect | bold italic | alignleft aligncenter alignright ' +
        'alignjustify | bullist numlist outdent indent | link image | ' +
        'forecolor backcolor emoticons | undo redo',
    };
  }

  blog.controller('TinyMceCtrl', TinyMceCtrl);
});
