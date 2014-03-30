module.exports = generateRoutes = (app, schema, actions, prefix = '') ->

  app.get    prefix + "/#{schema.collectionName}",              actions.findAll
  app.get    prefix + "/#{schema.collectionName}/:id",          actions.findById

  app.post   prefix + "/#{schema.collectionName}",              actions.create
  app.post   prefix + "/#{schema.collectionName}/:id",          actions.updateById

  app.del    prefix + "/#{schema.collectionName}/:id",          actions.deleteById

  app.put    prefix + "/#{schema.collectionName}",              actions.create
  app.put    prefix + "/#{schema.collectionName}/:id",          actions.replaceById

  app.patch  prefix + "/#{schema.collectionName}/:id",          actions.updateById

  return
