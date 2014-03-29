model = require '../lib/model'

describe 'Model', ->

  describe 'createModel(schema, mongoURL)', ->
    it 'should connect to mongoDB and return a mongoose model'
