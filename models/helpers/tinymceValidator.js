function stripped(text) {
  return text.replace(/(<([^>]+)>)/gi, '') // Remove HTML tags.
             .replace(/&nbsp;/gi, '')      // Remove non-breakable spaces.
             .trim();                      // Trim remaining trailing spaces.
}

module.exports = function(text) {
  return text !== undefined &&
         stripped(text) !== '';
};
