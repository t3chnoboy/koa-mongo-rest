var createModel, mongoose;

mongoose = require('mongoose');

module.exports = createModel = function(schema, mongoUrl) {
  var DocumentSchema;
  mongoose.connect(mongoUrl);
  DocumentSchema = new mongoose.Schema(schema.schema, schema.options);
  return mongoose.model(schema.collectionName, DocumentSchema);
};
