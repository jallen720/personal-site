define([
  // Register states.
  'states/post/create',
  'states/post/delete',
  'states/post/read',
  'states/post/update',
  'states/home',

  // Register services.
  'services/posts',

  // Register directives.
  'directives/dirDisqus',

  // Register controllers.
  'controllers/post/CreateCtrl',
  'controllers/post/DeleteCtrl',
  'controllers/post/ReadCtrl',
  'controllers/post/UpdateCtrl',
  'controllers/HomeCtrl',
  'controllers/DisqusCtrl',
]);
