var app = angular.module('angular-express');

app.factory('posts', [
  function() {
    var posts = {
      all: [
        {
          title: 'Test post',
          body:  'Test post\'s body',
        },
      ]
    };

    posts.get = function(id) {
      return posts.all[id];
    }

    posts.set = function(id, post) {
      posts.all[id] = post;
    }

    posts.add = function(post) {
      posts.all.push(post);
    }

    posts.delete = function(id) {
      posts.all.splice(id, 1);
    }

    return posts;
  }
]);
