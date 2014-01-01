var model;

model = require('./model');

module.exports = {
  get: function*() {
    var error, users;
    try {
      console.log(model);
      users = yield model.find(this.request.query).exec();
      return this.body = users;
    } catch (_error) {
      error = _error;
      return this.body = error;
    }
  },
  getById: function*() {
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
  putToId: function*() {
    var error;
    try {
      console.log("Putin");
      return this.body = "Putin";
    } catch (_error) {
      error = _error;
      return this.body = error;
    }
  },
  updateById: function*() {
    var error, result;
    try {
      result = yield model.findByIdAndUpdate(this.params.id, {
        $set: this.request.query
      }).exec();
      return this.body = result;
    } catch (_error) {
      error = _error;
      return this.body = error;
    }
  },
  postToId: function*() {
    var error;
    try {
      console.log("posting");
      return this.body = "posting";
    } catch (_error) {
      error = _error;
      return this.body = error;
    }
  }
};
