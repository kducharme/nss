module.exports = function(grunt) {

    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    grunt.initConfig({
      jshint: {
        files: ['./scripts/**/*.js']
      },
      watch: {
        options: {
          livereload: true,
        },
        javascripts: {
          files: ['./scripts/**/*.js'],
          tasks: ['jshint']
        }
      }
    });

    grunt.registerTask('default', ['jshint', 'watch']);
  };