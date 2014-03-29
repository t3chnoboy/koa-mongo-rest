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

    describe 'GET', ->

      describe 'GET /:model', ->
        it 'should respond with JSON for all records', (done) ->
          request
            .get '/user'
            .expect 200
            .expect 'Content-Type', /json/
            .expect users
            .end done

      describe 'GET /:model/:id', ->
        it 'should respond with JSON for the record with the specified id', (done) ->
          request
            .get '/user/2'
            .expect 200
            .expect 'Content-Type', /json/
            .expect
              name : 'Joff'
              age  :  27
              _id  :  2
            .end done

    describe 'POST', ->

      describe 'POST /:model', ->
        it 'should respond with JSON for the created record', (done) ->
          request
            .post '/user'
            .send
              name : 'James'
              age  :  40
              _id  :  4
            .expect 201
            .expect
              name : 'James'
              age  : 40
              _id  : 4
            .end done

        it 'should create a new record'

      describe 'POST /:model/:id', ->
        it 'should respond with JSON for the updated record'


    describe 'DELETE', ->
      describe 'DELETE /:model/:id', ->
        it 'should respond with JSON for the destroyed record'
        it 'should delete the record with specified id'

    describe 'PUT', ->
      describe 'PUT /:model', ->
        it 'should respond with JSON for the created record'
        it 'should create a new record'

      describe 'PUT /:model/:id', ->
        it 'should return JSON for the updated record'
        it 'should replace the record with specified id'

    describe 'PATCH', ->
      describe 'PATCH /:model/:id', ->
        it 'should respond with JSON for the updated record'
        it 'should update the record with specified id'
