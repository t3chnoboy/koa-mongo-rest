mongoose = require 'mongoose'

model = (schema, mongoUrl) ->
  mongoose.connect mongoUrl

  DocumentSchema = new mongoose.Schema schema.schema, collection: schema.collectionName

  mongoose.model schema.collectionName, DocumentSchema

module.exports = model
