var routes;

routes = function(app, schema, actions) {
  app.get("/" + schema.collectionName, actions.get);
  app.get("/" + schema.collectionName + "/:id", actions.getById);
  app["delete"]("/" + schema.collectionName + "/:id", actions.deleteById);
  app.put("/" + schema.collectionName + "/:id", actions.putToId);
  app.patch("/" + schema.collectionName + "/:id", actions.updateById);
  return app.post("/" + schema.collectionName, actions.postToId);
};

module.exports = routes;
