module.exports = function(text) {
  function stripped(text) {
    return text.replace(/(<([^>]+)>)/gi, '') // Remove HTML tags.
               .replace(/&nbsp;/gi, '')      // Remove non-breakables spaces.
               .trim();                      // Trim remaining trailing spaces.
  }

  return text && stripped(text) !== '';
};
