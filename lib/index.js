var generateActions, generateApi, generateRoutes;

generateRoutes = require('./routes');

generateActions = require('./actions');

module.exports = generateApi = function(app, model, prefix) {
  var actions;
  if (prefix == null) {
    prefix = '';
  }
  actions = generateActions(model);
  generateRoutes(app, model.modelName, actions, prefix);
};
