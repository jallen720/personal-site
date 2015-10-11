var app = angular.module('angular-express', [
  'ui.router',
]);

function monthString(dateString) {
  var MONTH_BEGIN = 5;
  var MONTH_END = 7;
  return dateString.substring(MONTH_BEGIN, MONTH_END);
}

function monthIndex(dateString) {
  return parseInt(monthString(dateString)) - 1;
}

function monthName(dateString) {
  return [
    "January", "February", "March"    ,
    "April"  , "May"     , "June"     ,
    "July"   , "August"  , "September",
    "October", "November", "December" ,
  ][monthIndex(dateString)];
}

function dayString(dateString) {
  var DAY_BEGIN = 8;
  var DAY_END = 10;
  return dateString.substring(DAY_BEGIN, DAY_END);
}

function yearString(dateString) {
  var YEAR_BEGIN = 0;
  var YEAR_END = 4;
  return dateString.substring(YEAR_BEGIN, YEAR_END);
}

function formattedDate(dateString) {
  return monthName(dateString) + ' ' +
         dayString(dateString) + ', ' +
         yearString(dateString);
};

function formatDates(posts) {
  posts.forEach(function(post) {
    post.date = formattedDate(post.date);
  });

  return posts;
}

function formattedPosts(posts) {
  return formatDates(posts).reverse();
}

var allPostsPromise = function(posts) {
  return posts.getAll()
    .then(function(res) {
      return formattedPosts(res.data);
    });
}

var postPromise = function($stateParams, posts) {
  return posts.get($stateParams.id)
    .then(function(res) {
      return res.data;
    });
}

var nonAdminReroute = function($state, admin) {
  if (!admin.isLoggedIn()) {
    $state.go('home');
  }
}

var adminReroute = function($state, admin) {
  if (admin.isLoggedIn()) {
    $state.go('home');
  }
}

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url:         '/home',
      templateUrl: '/partials/home',
      controller:  'home',

      resolve: {
        allPosts: allPostsPromise,
      },
    })

    .state('createPost', {
      url:         '/createPost',
      templateUrl: '/partials/postForm',
      controller:  'createPost',
      onEnter:     nonAdminReroute,
    })

    .state('editPost', {
      url:         '/editPost/{id}',
      templateUrl: '/partials/postForm',
      controller:  'editPost',
      onEnter:     nonAdminReroute,

      resolve: {
        post: postPromise,
      },
    })

    .state('deletePost', {
      url:         '/deletePost/{id}',
      templateUrl: '/partials/deletePost',
      controller:  'deletePost',
      onEnter:     nonAdminReroute,

      resolve: {
        post: postPromise,
      },
    })

    .state('admin', {
      url:         '/admin',
      templateUrl: '/partials/admin',
      controller:  'admin',
      onEnter:     adminReroute,
    });

  $urlRouterProvider.otherwise('home');
});
