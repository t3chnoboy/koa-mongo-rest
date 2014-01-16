koa = require 'koa'
router = require 'koa-router'
logger = require 'koa-logger'
api = require '../lib/index'
schema = require './schema'

mongoUrl = process.env.MONGOLAB_URL

app = koa()
app.use logger()
app.use router app
api app, schema, mongoUrl

app.listen process.env.PORT || 5000
