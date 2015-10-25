define([
  'modules/blog',
],

function(blog) {
  function NavigationCtrl(admin) {
    this.isLoggedIn = admin.isLoggedIn;
    this.logOut     = admin.logOut;
  }

  blog.controller('NavigationCtrl', NavigationCtrl);
});
