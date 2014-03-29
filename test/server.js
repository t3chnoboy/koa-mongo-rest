var koa = require('koa');
var router = require('koa-router');
var createModel = require('../lib/index');

var mongoUrl = '127.0.0.1:27017';

module.exports = function(schema){
  var app = koa();
  app.use(router(app));
  model = app.model = createModel(schema, mongoUrl);
  model.generateApi(app);
  return app;
};
