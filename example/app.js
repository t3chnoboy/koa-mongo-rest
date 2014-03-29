var app, createModel, koa, logger, model, mongoUrl, router, schema;

koa = require('koa');

router = require('koa-router');

logger = require('koa-logger');

createModel = require('../lib/index');

schema = require('./schema');

mongoUrl = '127.0.0.1:27017';

app = koa();

app.use(logger());

app.use(router(app));

model = createModel(schema, mongoUrl);

model.generateApi(app);

app.listen(process.env.PORT || 5000);
