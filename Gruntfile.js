'use strict';

module.exports = function (grunt) {
	// load all grunt tasks
	require('load-grunt-tasks')(grunt);
	
	grunt.initConfig({
		watch: {
			ruby: {
				files: ['./*.rb'],
				tasks: ['exec:touch']
			}	
		},
		exec: {
			touch: {
				command: 'touch tmp/reset.txt'
			}
		}
	});
	
	grunt.registerTask('default', [
		'watch:ruby'
	]);
};