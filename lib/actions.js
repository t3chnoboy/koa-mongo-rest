var parse;

parse = require('co-body');

module.exports = function(model) {
  return {
    findAll: function*() {
      var error, result;
      try {
        result = yield model.find(this.request.query).exec();
        return this.body = result;
      } catch (_error) {
        error = _error;
        return this.body = error;
      }
    },
    findById: function*() {
      var error, result;
      try {
        result = yield model.findById(this.params.id).exec();
        return this.body = result;
      } catch (_error) {
        error = _error;
        return this.body = error;
      }
    },
    deleteById: function*() {
      var error, result;
      try {
        result = yield model.findByIdAndRemove(this.params.id).exec();
        return this.body = result;
      } catch (_error) {
        error = _error;
        return this.body = error;
      }
    },
    replaceById: function*() {
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
    replaceByIdWithQuery: function*() {
      var error, newDocument, result;
      try {
        yield model.findByIdAndRemove(this.params.id).exec();
        newDocument = this.request.query;
        newDocument._id = this.params.id;
        result = yield model.create(newDocument).exec();
        return this.body = result;
      } catch (_error) {
        error = _error;
        return this.body = error;
      }
    },
    updateById: function*() {
      var body, error, result;
      try {
        body = yield parse(this, {
          limit: '1kb'
        });
        result = yield model.findByIdAndUpdate(this.params.id, body).exec();
        return this.body = result;
      } catch (_error) {
        error = _error;
        return this.body = error;
      }
    },
    updateByIdWithQuery: function*() {
      var error, result;
      try {
        result = yield model.findByIdAndUpdate(this.params.id, this.request.query).exec();
        return this.body = result;
      } catch (_error) {
        error = _error;
        return this.body = error;
      }
    },
    create: function*() {
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
    },
    createWithQuery: function*() {
      var error, result;
      try {
        result = yield model.create(this.request.query);
        this.body = result;
        return this.status = 201;
      } catch (_error) {
        error = _error;
        return this.body = error;
      }
    }
  };
};
