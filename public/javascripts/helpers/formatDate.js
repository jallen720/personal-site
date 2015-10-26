define([
  'helpers/insert'
],

function(insert) {
  function dateString(date) {
    return new Date(date).toString();
  }

  function dateSubString(dateString) {
    const DATE_BEGIN = 4;
    const DATE_END   = 15;
    return dateString.slice(DATE_BEGIN, DATE_END);
  }

  function addComma(dateSubString) {
    return insert(',', dateSubString, 6);
  }

  function formattedDate(date) {
    return addComma(dateSubString(dateString(date)));
  }

  return function(object) {
    object.date = formattedDate(object.date);
    return object;
  };
});
