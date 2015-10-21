define(function() {
  function monthString(dateString) {
    const MONTH_BEGIN = 5;
    const MONTH_END   = 7;
    return dateString.substring(MONTH_BEGIN, MONTH_END);
  }

  function monthIndex(dateString) {
    return parseInt(monthString(dateString)) - 1;
  }

  var months = [
    "January", "February", "March"    ,
    "April"  , "May"     , "June"     ,
    "July"   , "August"  , "September",
    "October", "November", "December" ,
  ];

  function monthName(dateString) {
    return months[monthIndex(dateString)];
  }

  function dayString(dateString) {
    const DAY_BEGIN = 8;
    const DAY_END   = 10;
    return dateString.substring(DAY_BEGIN, DAY_END);
  }

  function yearString(dateString) {
    const YEAR_BEGIN = 0;
    const YEAR_END   = 4;
    return dateString.substring(YEAR_BEGIN, YEAR_END);
  }

  function formattedDate(dateString) {
    return monthName(dateString) + ' ' +
           dayString(dateString) + ', ' +
           yearString(dateString);
  };

  return function(post) {
    post.date = formattedDate(post.date);
    return post;
  };
});
