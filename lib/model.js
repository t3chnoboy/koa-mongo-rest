var createModel, mongoose;

mongoose = require('mongoose');

module.exports = createModel = function(schema, mongoUrl) {
  var DocumentSchema;
  mongoose.connect(mongoUrl);
  DocumentSchema = new mongoose.Schema(schema.schema, {
    collection: schema.collectionName
  });
  return mongoose.model(schema.collectionName, DocumentSchema);
};
