mongoose = require 'mongoose'

module.exports = createModel = (schema, mongoUrl) ->
  mongoose.connect mongoUrl
  DocumentSchema = new mongoose.Schema schema.schema, schema.options
  mongoose.model schema.collectionName, DocumentSchema
