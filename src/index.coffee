generateRoutes = require './routes'
generateActions = require './actions'

module.exports = generateApi = (app, model, prefix = '') ->
  actions = generateActions model
  generateRoutes app, model.modelName, actions, prefix
  return
