var routes;

routes = function(app, schema, actions) {
  app.post("/" + schema.collectionName, actions.post);
  app.get("/" + schema.collectionName + "/create", actions.create);
  app.get("/" + schema.collectionName + "/create/:id", actions.postToId);
  app.get("/" + schema.collectionName, actions.findAll);
  app.get("/" + schema.collectionName + "/find", actions.findAll);
  app.get("/" + schema.collectionName + "/:id", actions.findById);
  app.get("/" + schema.collectionName + "/find/:id", actions.findById);
  app["delete"]("/" + schema.collectionName + "/:id", actions.deleteById);
  app.get("/" + schema.collectionName + "/destroy/:id", actions.deleteById);
  app.put("/" + schema.collectionName + "/:id", actions.putToId);
  app.get("/" + schema.collectionName + "/update/:id", actions.updateById);
  return app.patch("/" + schema.collectionName + "/:id", actions.updateById);
};

module.exports = routes;
