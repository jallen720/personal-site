require([
  'bootstrap/about',
  // 'bootstrap/blog',
  'bootstrap/portfolio',
  'bootstrap/settings',
  'bootstrap/shared',
],

function() {
  // Bootstrap application modules.
  angular.bootstrap(document, [
    'blog',
  ]);
});
