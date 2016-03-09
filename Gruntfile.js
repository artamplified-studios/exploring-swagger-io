module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
  convert: {
    yaml2json: {
      files: [
        {
          src: ['exploring-swagger-io.yaml'],
          dest: 'dist/exploring-swagger-io.json'
        }
      ]
    }
  }
});

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-convert');

  // Default task(s).
  grunt.registerTask('default', ['convert']);

};