var model, mongoose;

mongoose = require('mongoose');

model = function(schema, mongoUrl) {
  var DocumentSchema;
  mongoose.connect(mongoUrl);
  DocumentSchema = new mongoose.Schema(schema.schema, {
    collection: schema.collectionName
  });
  return mongoose.model(schema.collectionName, DocumentSchema);
};

module.exports = model;
