createModel = require '../lib/model'

mongoUrl = '127.0.0.1:27017'

schema =
  schema:
    name: String
    age : Number
  collectionName: 'person'

describe 'Model', ->

  describe 'createModel(schema, mongoURL)', ->
    it 'should connect to mongoDB and return a mongoose model', ->
      model = createModel schema, mongoUrl
      model.should.have.property modelName: 'person'
