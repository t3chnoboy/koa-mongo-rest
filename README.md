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
var createModel = require('koa-mongo-rest');
```

Create schema
```javascript
var schema = {
  schema: {
    email: String,
    name: String,
    password: String,
    address: String,
    zipcode: Number,
    lists: Array
  },
  collectionName: 'user', //this is required
  //mongoose schema options (optional)
  options: {
    versionKey: false
  }
};
```

Create server
```javascript
var koa = require('koa');
var router = require('koa-router');

var mongoUrl = '127.0.0.1:27017'

var app = koa();

//router is required
app.use(router(app));

//create mongoose model
//you can use it to create custom actions
var model = app.model = createModel(schema, mongoUrl);

//add REST routes to your app. Prefix is optional
model.generateApi(app, '/api');

app.listen(process.env.PORT || 5000);
```
