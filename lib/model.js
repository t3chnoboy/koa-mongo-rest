(function() {
  var DocumentSchema, model, mongolab_url, mongoose, schema;

  mongoose = require('mongoose');

  schema = require('./schema');

  mongolab_url = process.env.MONGOLAB_URL;

  mongoose.connect(mongolab_url);

  DocumentSchema = new mongoose.Schema(schema.schema, {
    collection: schema.collectionName
  });

  model = mongoose.model(schema.collectionName, DocumentSchema);

  module.exports = model;

}).call(this);
