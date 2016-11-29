module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    options: {
      banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
    },
    run: {
      babel: {
        exec: 'node node_modules/babel-cli/bin/babel --presets es2015 -d bot/lib --watch bot/src'
      },
      'babel-test': {
        exec: 'node node_modules/babel-cli/bin/babel --presets es2015 -d spec --watch spec-src'
      },
      'babel-test-once': {
        exec: 'node node_modules/babel-cli/bin/babel --presets es2015 -d spec spec-src'
      },
      'babel-once': {
        exec: 'node node_modules/babel-cli/bin/babel --presets es2015 -d bot/lib bot/src'
      },
      'babel-clean': {
        exec: 'rm -rf bot/lib/ && find ./spec/* -maxdepth 0 ! -iregex ".\/spec/support.*" | xargs rm -rf'
      }
    }
  });

  // Load the plugin that provides the "run" task.
  grunt.loadNpmTasks('grunt-run');

  // Default task(s).
  grunt.registerTask('default', ['run:babel']);
};
