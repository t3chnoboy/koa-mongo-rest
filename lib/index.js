var app, cors, koa, logger, router, routes;

koa = require('koa');

logger = require('koa-logger');

router = require('koa-router');

cors = require('koa-cors');

routes = require('./routes');

app = koa();

app.use(logger());

app.use(cors());

app.use(router(app));

routes(app);

app.listen(process.env.PORT || 5000);
