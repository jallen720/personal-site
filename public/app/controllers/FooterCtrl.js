define([
  'modules/blog',
],

function(blog) {
  function FooterCtrl($scope) {
    const SITE_URL = 'https://joelallen.herokuapp.com';
    this.siteURL = SITE_URL;
    this.copyrightYear = new Date().getFullYear();
  }

  blog.controller('FooterCtrl', FooterCtrl);
});
