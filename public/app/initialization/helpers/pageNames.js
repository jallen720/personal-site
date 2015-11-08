define(function() {
  return [
    {
      isForState: function(state) {
        return state.indexOf('portfolio') !== -1;
      },
      value: 'Portfolio',
    },
    {
      isForState: function(state) {
        return state.indexOf('post') !== -1 ||
               state === 'home';
      },
      value: 'Blog',
    },
    {
      isForState: function(state) {
        return state === 'about'
      },
      value: 'About',
    },
    {
      isForState: function(state) {
        return state === 'login'
      },
      value: 'Login',
    },
    {
      isForState: function(state) {
        return state === 'settings'
      },
      value: 'Settings',
    },
  ];
});
