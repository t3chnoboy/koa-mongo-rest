var createModel, generateActions, generateRoutes;

generateRoutes = require('./routes');

generateActions = require('./actions');

createModel = require('./model');

module.exports = function(schema, mongoUrl) {
  var actions, model;
  model = createModel(schema, mongoUrl);
  actions = generateActions(model);
  model.generateApi = function(app, prefix) {
    if (prefix == null) {
      prefix = '';
    }
    return generateRoutes(app, schema, actions, prefix);
  };
  return model;
};
