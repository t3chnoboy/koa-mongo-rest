gulp       = require 'gulp'
coffee     = require 'gulp-coffee'
nodemon    = require 'gulp-nodemon'
coffeeES6  = require 'gulp-coffee-es6'

paths =
  src  : 'src/*.coffee'
  dest : 'lib'

gulp.task 'compile', ->
  gulp.src paths.server
    .pipe coffeeES6 bare: yes
    .pipe gulp.dest './'

gulp.task 'server', ->
  nodemon
    script: 'app.js'
    nodeArgs: ['--harmony']
    ignore: [
      './src/**'
      './test/**'
      './node_modules/**'
    ]

gulp.task 'watch', ->
  gulp.watch paths.src, ['compile']

gulp.task 'default', ['compile', 'watch', 'server']
