define(function() {
  var pages = [
    {
      isForState: function(stateName) {
        return stateName.indexOf('portfolio') !== -1;
      },

      info: {
        name: 'Portfolio',
      },
    },
    {
      isForState: function(stateName) {
        return stateName.indexOf('post') !== -1 ||
               stateName === 'home';
      },

      info: {
        name: 'Blog',
      },
    },
    {
      isForState: function(stateName) {
        return stateName.indexOf('about') !== -1;
      },

      info: {
        name: 'About Me',
      },
    },
    {
      isForState: function(stateName) {
        return stateName === 'login'
      },

      info: {
        name: 'Login',
      },
    },
    {
      isForState: function(stateName) {
        return stateName === 'settings'
      },

      info: {
        name: 'Settings',
      },
    },
  ];

  return function(state) {
    return pages.find(function(page) {
      return page.isForState(state.name);
    }).info;
  };
});
