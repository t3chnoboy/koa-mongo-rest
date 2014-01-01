(function() {
  module.exports = {
    schema: {
      email: String,
      name: String,
      password: String,
      address: String,
      zipcode: Number,
      lists: Array
    },
    collectionName: 'user'
  };

}).call(this);
