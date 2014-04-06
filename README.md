# Koa mongo REST [![NPM version](https://badge.fury.io/js/koa-mongo-rest.svg)](http://badge.fury.io/js/koa-mongo-rest) [![Dependency Status](https://gemnasium.com/t3chnoboy/koa-mongo-rest.svg)](https://gemnasium.com/t3chnoboy/koa-mongo-rest) [![Build Status](https://travis-ci.org/t3chnoboy/koa-mongo-rest.svg?branch=master)](https://travis-ci.org/t3chnoboy/koa-mongo-rest)

Easy REST api for [koa](http://koajs.com) server  

[![NPM](https://nodei.co/npm/koa-mongo-rest.png?downloads=true)](https://nodei.co/npm/koa-mongo-rest/)



## Installation
Install using npm:
```sh
npm install koa-mongo-rest
```

## Usage

Require library
```javascript
generateApi = require('koa-mongo-rest');
```

Create mongoose model
```javascript
mongoUrl = '127.0.0.1:27017';
mongoose = require('mongoose');
mongoose.connect(mongoUrl);

schema = new mongoose.Schema({
  email: String,
  name: String,
  password: String,
  address: String,
  zipcode: Number,
  lists: Array
});

model = mongoose.model('user', schema);
```

Create server
```javascript
var koa = require('koa');
var router = require('koa-router');

var app = koa();

//router is required
app.use(router(app));


//add REST routes to your app. Prefix is optional
generateApi(app, model, '/api');

app.listen(process.env.PORT || 5000);
```
