define(function() {
  function createScript(shortname, callback) {
    var script   = document.createElement('script');
    script.async = true;
    script.src   = '//' + shortname + '.disqus.com/embed.js';
    callback(script);
  }

  function scriptParent() {
    return document.head || document.body;
  }

  function addNewScript(scope) {
    createScript(scope.shortname, function(newScript) {
      scriptParent().appendChild(newScript);
    });
  }

  function resetScript(DISQUS, scope) {
    DISQUS.reset({
      reload: true,

      config: function() {
        this.page.identifier = scope.identifier;
        this.page.url        = scope.url;
        this.page.title      = scope.title;
      },
    });
  }

  return function(DISQUS, scope) {
    // Get the remote Disqus script and insert it into the DOM, but only if it
    // hasn't been loaded (as that will cause warnings).
    if (!DISQUS) {
      addNewScript(scope);
    }
    else {
      resetScript(DISQUS, scope);
    }
  };
});
