define([
  'helpers/formatDate',
],

function(formatDate) {
  function formatDates(post) {
    post = formatDate(post);
    post.edits = post.edits.map(formatDate);
    return post;
  }

  return function($stateParams, posts) {
    return posts.get($stateParams.id).then(function(res) {
      return formatDates(res.data);
    });
  };
});



