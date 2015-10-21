define([
  'promises/helpers/formatDate',
],

function(formatDate) {
  return function($stateParams, posts) {
    return posts.get($stateParams.id).then(function(res) {
      return formatDate(res.data);
    });
  };
});



