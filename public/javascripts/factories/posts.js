var app = angular.module('angular-express');

function monthName(monthIndex) {
  return [
    "January", "February", "March"    ,
    "April"  , "May"     , "June"     ,
    "July"   , "August"  , "September",
    "October", "November", "December" ,
  ][monthIndex];
}

function now() {
  var date = new Date();
  return monthName(date.getMonth()) + ' ' +
         date.getDate() + ', ' +
         date.getFullYear();
}

var testBody =
'The last time I seriously upgraded my PC was in 2011, because the PC is over' +
'. And in some ways, it truly is – they can slap a ton more CPU cores on a di' +
'e, for sure, but the overall single core performance increase from a 2011 hi' +
'gh end Intel CPU to today\'s high end Intel CPU is … really quite modest, on' +
' the order of maybe 30% to 40%.\n' +
'\n' +
'In that same timespan, mobile and tablet CPU performance has continued to ju' +
'st about double every year. Which means the forthcoming iPhone 6s will be al' +
'most 10 times faster than the iPhone 4 was.'

app.factory('posts', [
  function() {
    var posts = {
      all: [
        {
          title: 'Test post',
          body:  testBody,
          date:  now(),
        }
      ]
    };

    posts.get = function(id) {
      return posts.all[id];
    }

    posts.set = function(id, post) {
      posts.all[id] = post;
    }

    posts.add = function(post) {
      post.date = now();
      posts.all.push(post);
    }

    posts.delete = function(id) {
      posts.all.splice(id, 1);
    }

    return posts;
  }
]);
