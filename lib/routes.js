var generateRoutes,
    pluralize = require('pluralize'),
    bodyParser = require('koa-body-parser');

module.exports = generateRoutes = function(app, modelName, actions, prefix) {
  if (prefix == null) {
    prefix = '';
  }
  modelName = pluralize(modelName);

  app.use(bodyParser());

  app.get(prefix + ("/" + modelName), actions.findAll);
  app.get(prefix + ("/" + modelName + "/:id"), actions.findById);
  app.post(prefix + ("/" + modelName), actions.create);
  app.post(prefix + ("/" + modelName + "/:id"), actions.updateById);
  app.del(prefix + ("/" + modelName + "/:id"), actions.deleteById);
  app.put(prefix + ("/" + modelName), actions.create);
  app.put(prefix + ("/" + modelName + "/:id"), actions.replaceById);
  app.patch(prefix + ("/" + modelName + "/:id"), actions.updateById);
};