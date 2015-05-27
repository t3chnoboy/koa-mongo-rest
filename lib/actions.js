var parse;

parse = require('co-body');

module.exports = function(model) {
  return {
    findAll: function*(next) {
      yield next;
      var error, result;
      try {
        var conditions = {};
        var query = this.request.query;
        if (query.conditions) {
          conditions = JSON.parse(query.conditions);
        }
        var builder = model.find(conditions);
        ['limit', 'skip', 'sort'].forEach(function(key){
          if (query[key]) {
            builder[key](query[key]);
          }
        })
        result = yield builder.exec();
        return this.body = result;
      } catch (_error) {
        error = _error;
        return this.body = error;
      }
    },
    findById: function*(next) {
      yield next;
      var error, result;
      try {
        result = yield model.findById(this.params.id).exec();
        return this.body = result;
      } catch (_error) {
        error = _error;
        return this.body = error;
      }
    },
    deleteById: function*(next) {
      yield next;
      var error, result;
      try {
        result = yield model.findByIdAndRemove(this.params.id).exec();
        return this.body = result;
      } catch (_error) {
        error = _error;
        return this.body = error;
      }
    },
    replaceById: function*(next) {
      yield next;
      var body, error, newDocument, result;
      try {
        yield model.findByIdAndRemove(this.params.id).exec();
        body = yield parse(this, {
          limit: '1kb'
        });
        newDocument = body;
        newDocument._id = this.params.id;
        result = yield model.create(newDocument);
        return this.body = result;
      } catch (_error) {
        error = _error;
        return this.body = error;
      }
    },
    updateById: function*(next) {
      yield next;
      var body, error, result;
      try {
        body = yield parse(this, {
          limit: '1kb'
        });
        result = yield model.findByIdAndUpdate(this.params.id, body, {new: true}).exec();
        return this.body = result;
      } catch (_error) {
        error = _error;
        return this.body = error;
      }
    },
    create: function*(next) {
      yield next;
      var body, error, result;
      try {
        body = yield parse(this, {
          limit: '1kb'
        });
        result = yield model.create(body);
        this.status = 201;
        return this.body = result;
      } catch (_error) {
        error = _error;
        return this.body = error;
      }
    }
  };
};
