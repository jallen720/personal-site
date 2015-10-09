var app = angular.module('angular-express');

function monthName(monthIndex) {
  return [
    "January", "February", "March"    ,
    "April"  , "May"     , "June"     ,
    "July"   , "August"  , "September",
    "October", "November", "December" ,
  ][monthIndex];
}

function formattedDate(date) {
  return monthName(date.getMonth()) + ' ' +
         date.getDate() + ', ' +
         date.getFullYear();
}

app.factory('posts', [
  '$http',
  function($http) {
    var all = [];

    return {
      getAll: function() {
        return all;
      },

      load: function() {
        $http.get('/posts').success(function(data) {
          angular.copy(data.reverse(), all);
        });
      },

      create: function(post) {
        post.date = formattedDate(new Date());
        return $http.post('/posts', post);
      },

      delete: function(id) {
        return $http.delete('/posts/' + id);
      },

      get: function(id) {
        return $http.get('/posts/' + id);
      },

      set: function(id, post) {
        return $http.post('/posts/' + id, post);
      },
    };
  }
]);
