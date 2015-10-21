define([
  'promises/helpers/formatDate',
],

function(formatDate) {
  return function(posts) {
    return posts.getAll().then(function(res) {
      return res.data.map(formatDate);
    });
  };
});
