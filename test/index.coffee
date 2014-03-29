schema =
  schema:
    name: String
    age : Number
    _id : Number
  collectionName: 'user'
  versionKey: no

users = [
  name: 'Fronk'
  age : 28
  _id : 1
,
  name: 'Joff'
  age : 27
  _id : 2
,
  name: 'Scoobert'
  age : 54
  _id : 3
]

server = require('./server') schema
model = server.model
request = require('supertest').agent server.listen()


describe 'REST API', ->

  describe 'Routes', ->

    beforeEach -->
      for user in users
        yield model.create user

    afterEach (done) ->
      model.remove {}, -> done()

    describe 'GET /user', ->
      it 'should return JSON for all instances of the model', (done) ->
        request
          .get '/user'
          .expect 200
          .expect 'Content-Type', /json/
          .expect users
          .end done
