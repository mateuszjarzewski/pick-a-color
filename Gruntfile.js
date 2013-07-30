module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! Pick-a-Color Docs v<%= pkg.version %> | Copyright 2013 Lauren Sperber and Broadstreet Ads https://github.com/lauren/pick-a-color/blob/master/LICENSE | <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      my_target: {
        files: {
          'build/js/<%= pkg.name %>.min.js': ['src/js/<%= pkg.name %>.js']
        }
      }    },
    less: {
      production: {
        options: {
          compress: true
        },
        files: {
          "build/css/<%= pkg.name %>.min.css": "src/less/<%= pkg.name %>.less"
        }
      }
    },
    watch: {
      js: {
        files: ['src/js/*.js', 'Gruntfile.js'],
        tasks: ['jshint', 'uglify'],
      },
      less: {
        files: ['src/less/*.less'],
        tasks: ['less'],
      }
    },
    jshint: {
      all: ['Gruntfile.js', 'src/*/*.js'],
      options: {
        laxbreak: true,
        force: true
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');

};