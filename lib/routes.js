var routes;

routes = function(app, schema, actions) {
  app.get("/" + schema.collectionName + "/find", actions.findAll);
  app.get("/" + schema.collectionName + "/find/:id", actions.findById);
  app.get("/" + schema.collectionName + "/create", actions.createWithQuery);
  app.get("/" + schema.collectionName + "/destroy/:id", actions.deleteById);
  app.get("/" + schema.collectionName + "/update/:id", actions.updateByIdWithQuery);
  app.get("/" + schema.collectionName + "/replace/:id", actions.replaceByIdWithQuery);
  app.get("/" + schema.collectionName, actions.findAll);
  app.get("/" + schema.collectionName + "/:id", actions.findById);
  app.post("/" + schema.collectionName, actions.create);
  app.post("/" + schema.collectionName + "/:id", actions.updateById);
  app["delete"]("/" + schema.collectionName + "/:id", actions.deleteById);
  app.put("/" + schema.collectionName + "/", actions.create);
  app.put("/" + schema.collectionName + "/:id", actions.replaceById);
  return app.patch("/" + schema.collectionName + "/:id", actions.updateById);
};

module.exports = routes;
