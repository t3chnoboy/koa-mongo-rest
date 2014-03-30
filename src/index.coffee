generateRoutes = require './routes'
generateActions = require './actions'
createModel = require './model'


module.exports = (schema, mongoUrl) ->
  model = createModel schema, mongoUrl
  actions = generateActions model
  model.generateApi = (app, prefix = '') ->
    generateRoutes app, schema, actions, prefix

  return model

