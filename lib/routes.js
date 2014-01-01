(function() {
  var actions, model, routes;

  model = {
    modelName: 'user'
  };

  actions = require('./actions');

  routes = function(app) {
    app.get("/user", actions.get);
    app.get("/" + model.modelName + "/:id", actions.getById);
    app["delete"]("/" + model.modelName + "/:id", actions.deleteById);
    app.put("/" + model.modelName + "/:id", actions.putToId);
    app.patch("/" + model.modelName + "/:id", actions.updateById);
    return app.post("/" + model.modelName, actions.postToId);
  };

  module.exports = routes;

}).call(this);
