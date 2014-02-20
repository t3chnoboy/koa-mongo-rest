# Koa mongo REST [![NPM version](https://badge.fury.io/js/koa-mongo-rest.png)](http://badge.fury.io/js/koa-mongo-rest) [![Dependency Status](https://gemnasium.com/t3chnoboy/koa-mongo-rest.png)](https://gemnasium.com/t3chnoboy/koa-mongo-rest) [![Build Status](https://travis-ci.org/t3chnoboy/koa-mongo-rest.png?branch=master)](https://travis-ci.org/t3chnoboy/koa-mongo-rest)

Easy REST api for [koa](http://koajs.com) server  

[![NPM](https://nodei.co/npm/koa-mongo-rest.png?downloads=true)](https://nodei.co/npm/koa-mongo-rest/)



## Installation
Install using npm:
```sh
npm install koa-mongo-rest
```

## Usage

###Basic usage

Require library
```javascript
api = require('koa-mongo-rest');
```

Create schema
```javascript
schema = {
  schema: {
    email: String,
    name: String,
    password: String,
    address: String,
    zipcode: Number,
    lists: Array
  },
  collectionName: 'user'
};
```

Create server
```javascript
koa = require('koa');
router = require('koa-router');

mongoUrl = process.env.MONGOLAB_URL;
app = koa();

app.use(logger());
app.use(router(app));
api(app, schema, mongoUrl);

app.listen(process.env.PORT || 5000);
```
