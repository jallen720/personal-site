module.exports = function(mongoose) {
  // Connect to MongoDB
  mongoose.connect(
    process.env.MONGOLAB_URI ||
    'mongodb://localhost/blog'
  );
};
