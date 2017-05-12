module.exports = function(grunt) {
  grunt.initConfig({
    browserify: {
      '../dist/app.js': ['../javascripts/main.js']
    },
    jshint: {
      files: ['../javascripts/**/*.js'], //location of javascript files
      options: {
        predef: ["document", "console", "$" ], //allows for predefined things not found in js
        esnext: true, //allows for ES6
        globalstrict: true,
        globals: {'$': true}, //name value pairs, allows to define global vars used in many files.
        browserify: true
      },
      files: ['..javascripts/**/8.js']
    },
    watch: { //automatically watch for changes
      javascripts: {
        files: ['../javascripts/**/*.js'],
        tasks: ['jshint']
      },
      browserify: {
        files: ['../javascripts/*.js'],
        tasks: ['browserify']
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint', 'browserify', 'watch']);
};
