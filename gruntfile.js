module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    browserify: {
      dist: {
        src: ['src/main.js'],
        dest: 'build/dist.js',
        options: {
          browserifyOptions: {
            standalone: 'IPEM'
          }
        }
      }
    },

    mocha_phantomjs: {
      options: {
        reporter: './node_modules/mocha-teamcity-reporter/lib/teamcity.js',
      },
      all: ['test/**/*.html']
    }

  })

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-mocha-phantomjs');

};
