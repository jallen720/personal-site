define([
  'controllers/post/helpers/updateSwitchers',
  'controllers/post/helpers/fadeViews',
],

function(updateSwitchers, fadeViews) {
  return function(view) {
    var isForm = view === 'form';
    updateSwitchers(isForm);
    fadeViews(view, isForm);
  };
});
