define([
  'jquery',
],

function() {
  var states = {
    loggedIn: [
      'aboutUpdate',
      'portfolioItemCreate',
      'portfolioItemUpdate',
      'portfolioItemDelete',
      'postCreate',
      'postUpdate',
      'postDelete',
      'settings',
    ],

    loggedOut: [
      'login',
    ],
  };

  return {
    requiresLoggedIn: function(state) {
      return $.inArray(
        state.name,
        states.loggedIn
      ) !== -1;
    },

    requiresLoggedOut: function(state) {
      return $.inArray(
        state.name,
        states.loggedOut
      ) !== -1;
    },
  };
});
