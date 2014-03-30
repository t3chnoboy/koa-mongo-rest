module.exports = generateRoutes = (app, schema, actions, prefix = '') ->

  #CRUD shortcuts
  app.get    prefix + "/#{schema.collectionName}/find",         actions.findAll
  app.get    prefix + "/#{schema.collectionName}/find/:id",     actions.findById
  app.get    prefix + "/#{schema.collectionName}/create",       actions.createWithQuery
  app.get    prefix + "/#{schema.collectionName}/destroy/:id",  actions.deleteById
  app.get    prefix + "/#{schema.collectionName}/update/:id",   actions.updateByIdWithQuery
  app.get    prefix + "/#{schema.collectionName}/replace/:id",  actions.replaceByIdWithQuery

  #REST
  app.get    prefix + "/#{schema.collectionName}",              actions.findAll
  app.get    prefix + "/#{schema.collectionName}/:id",          actions.findById

  app.post   prefix + "/#{schema.collectionName}",              actions.create
  app.post   prefix + "/#{schema.collectionName}/:id",          actions.updateById

  app.delete prefix + "/#{schema.collectionName}/:id",          actions.deleteById

  app.put    prefix + "/#{schema.collectionName}",              actions.create
  app.put    prefix + "/#{schema.collectionName}/:id",          actions.replaceById

  app.patch  prefix + "/#{schema.collectionName}/:id",          actions.updateById

  return
