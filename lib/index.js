var actions, api, model, routes;

routes = require('./routes');

actions = require('./actions');

model = require('./model');

api = function(app, schema, mongoUrl) {
  model = model(schema, mongoUrl);
  actions = actions(model);
  return routes = routes(app, schema, actions);
};

module.exports = api;
