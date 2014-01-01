module.exports = (grunt) ->

  grunt.initConfig

    concurrent:
      target:
        tasks: ['shell:nodemon', 'watch']
        options:
          logConcurrentOutput: true

    shell:
      nodemon:
        options:
          stdout: true
        command: 'nodemon --exec node --harmony lib/index.js'

    coffee:
      app:
        expand: true
        cwd: 'src'
        src: ['**/*.coffee']
        dest: 'lib'
        ext: '.js'

    watch:
      app:
        files: '**/*.coffee'
        tasks: ['coffee']

  # These plugins provide necessary tasks.
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-shell'
  grunt.loadNpmTasks 'grunt-concurrent'

  # Default task.
  grunt.registerTask 'default', ['concurrent:target']
