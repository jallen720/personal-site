define([
  'modules/blog',
],

function(blog) {
  var items = [
    {
      image: 'https://lh5.ggpht.com/tNUfavcmoXjckROXJYi-vXkEaDKXcX3NlavLSJyJiDFcW-gPToOIBP2h0HtiHqLHTYQ=w300-rw',
      title: 'Path Maestro',
      body:  'Did this, that, and the other thing',
    },
    {
      image: 'https://lh3.googleusercontent.com/jloUTEDtrTlEkglm85CZVcpfF0l2hG5TaKHG0SYsrk2mNF00YD7tNI_bGiRgdXtuqpE=w300-rw',
      title: 'Hank\'s Space Story',
      body:  'Did this, that, and the other thing Did this, that, and the other thing Did this, that, and the other thing Did this, that, and the other thing Did this, that, and the other thing Did this, that, and the other thing Did this, that, and the other thing',
    },
  ];

  function PortfolioCtrl($scope, admin) {
    $scope.items = items;
  }

  blog.controller('PortfolioCtrl', PortfolioCtrl);
});
