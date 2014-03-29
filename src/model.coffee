mongoose = require 'mongoose'

module.exports = createModel = (schema, mongoUrl) ->
  mongoose.connect mongoUrl
  DocumentSchema = new mongoose.Schema schema.schema, collection: schema.collectionName
  mongoose.model schema.collectionName, DocumentSchema
