var app = angular.module('angular-express', [
  'ui.router',
  'ui.tinymce',
]);

(function() {

app.run(function($rootScope) {
  $rootScope.$on('$stateChangeSuccess', function() {
    // Scroll page to top when state changes.
    document.body.scrollTop =
    document.documentElement.scrollTop = 0;
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

function formatDate(post) {
  post.date = formattedDate(post.date);
  return post;
}

function allPostsPromise(posts) {
  return posts.getAll()
    .then(function(res) {
      return res.data.map(formatDate);
    });
}

function postPromise($stateParams, posts) {
  return posts.get($stateParams.id)
    .then(function(res) {
      return formatDate(res.data);
    });
}

function nonAdminReroute($state, admin) {
  if (!admin.isLoggedIn()) {
    $state.go('home');
  }
}

function adminReroute($state, admin) {
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

    .state('admin', {
      url:         '/admin',
      templateUrl: '/partials/admin',
      controller:  'admin',
      onEnter:     adminReroute,
    })

    .state('settings', {
      url:         '/settings',
      templateUrl: '/partials/settings.settings',
      controller:  'settings',
      onEnter:     nonAdminReroute,
    })

    .state('postCreate', {
      url:         '/postCreate',
      templateUrl: '/partials/post.editor',
      controller:  'postCreate',
      onEnter:     nonAdminReroute,
    })

    .state('postRead', {
      url:         '/postRead/{id}',
      templateUrl: '/partials/post.full',
      controller:  'postRead',

      resolve: {
        post: postPromise,
      },
    })

    .state('postUpdate', {
      url:         '/postUpdate/{id}',
      templateUrl: '/partials/post.editor',
      controller:  'postUpdate',
      onEnter:     nonAdminReroute,

      resolve: {
        post: postPromise,
      },
    })

    .state('postDelete', {
      url:         '/postDelete/{id}',
      templateUrl: '/partials/post.delete',
      controller:  'postDelete',
      onEnter:     nonAdminReroute,

      resolve: {
        post: postPromise,
      },
    });

  $urlRouterProvider.otherwise('home');
});

})();
