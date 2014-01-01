module.exports =

  (model) ->

    get: ->*
      try
        result = yield model.find(@request.query).exec()
        @body = result
      catch error
        @body = error

    getById: ->*
      try
        result = yield model.findById(@params.id).exec()
        @body = result
      catch error
        @body = error

    deleteById: ->*
      try
        result = yield model.findByIdAndRemove(@params.id).exec()
        @body = result
      catch error
        @body = error

    putToId: ->*
      try
        console.log "Putin"
        @body = "Putin"
      catch error
        @body = error

    updateById: ->*
      try
        result = yield model.findByIdAndUpdate(@params.id, {$set: @request.query}).exec()
        @body = result
      catch error
        @body = error

    postToId: ->*
      try
        console.log "posting"
        @body = "posting"
      catch error
        @body = error
