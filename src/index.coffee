routes = require './routes'
actions = require './actions'
model = require './model'

api = (app, schema, mongoUrl) ->
  model = model schema, mongoUrl
  actions = actions model
  routes = routes app, schema, actions

module.exports = api
