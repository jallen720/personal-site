var app = angular.module('angular-express', [
  'ui.router',
  'ui.tinymce',
]);

function scrollToTop() {
  document.body.scrollTop =
  document.documentElement.scrollTop = 0;
}

function getScrollTop(stateName) {
  return stateName == 'home'
         ? 0
         : $('#ui-view').offset().top;
}

app.run(function($rootScope) {
  $rootScope.$on('$stateChangeSuccess', function(_, toState) {
    $('html, body').animate({
      scrollTop: getScrollTop(toState.name),
    }, 500);
  });
});

function monthString(dateString) {
  const MONTH_BEGIN = 5;
  const MONTH_END   = 7;
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

function formattedPost(post) {
  post.date = formattedDate(post.date);
  return post;
}

function formattedPosts(posts) {
  return posts.map(formattedPost);
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
      return formattedPost(res.data);
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
      templateUrl: '/partials/post.form',
      controller:  'createPost',
      onEnter:     nonAdminReroute,
    })

    .state('readPost', {
      url:         '/readPost/{id}',
      templateUrl: '/partials/post.full',
      controller:  'readPost',

      resolve: {
        post: postPromise,
      },
    })

    .state('editPost', {
      url:         '/editPost/{id}',
      templateUrl: '/partials/post.form',
      controller:  'editPost',
      onEnter:     nonAdminReroute,

      resolve: {
        post: postPromise,
      },
    })

    .state('deletePost', {
      url:         '/deletePost/{id}',
      templateUrl: '/partials/post.delete',
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
