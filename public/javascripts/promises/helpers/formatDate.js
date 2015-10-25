define([
  'helpers/insert'
],

function(insert) {
  function dateString(postDate) {
    return new Date(postDate).toString();
  }

  function dateSubString(dateString) {
    const DATE_BEGIN = 4;
    const DATE_END   = 15;
    return dateString.slice(DATE_BEGIN, DATE_END);
  }

  function addComma(dateSubString) {
    return insert(',', dateSubString, 6);
  }

  function formattedDate(postDate) {
    return addComma(dateSubString(dateString(
      postDate
    )));
  }

  return function(post) {
    post.date = formattedDate(post.date);
    return post;
  };
});
