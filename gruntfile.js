// Gruntfile.js
module.exports = grunt => {
	// Load all grunt tasks matching the ['grunt-*', '@*/grunt-*'] patterns
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		dirs: {
			dest: 'dest',
			css: "css",
			scss: "scss",
			js: "js"
		},

		// minify / uglify js
		uglify: {
			my_target: {
				
				files: {
					'<%= dirs.dest %>/jsmain.min.js': ['<%= dirs.js %>/libs/*.js']
				}
			}
		},
		cssmin: {
			options: {
				keepSpecialComments: 0
			},
			my_target: {
				files: [{
					'<%= dirs.dest %>/stylelibs.min.css': ['<%= dirs.css %>/**/*.css']
				}]
			}
		},
		connect: {
			options: {
				port: grunt.option('port') || 5555,
				livereload: 35729,
				// Change this to '0.0.0.0' to access the server from outside
				hostname: '192.168.239.1:3000'
			},
			livereload: {
				options: {
					open: true,
					base: [
						'.tmp',
						'<%= config.app %>'
					]
				}
			},
			dist: {
				options: {
					open: true,
					base: '<%= config.dist %>',
					livereload: false
				}
			}
		},

		sass: {
			dist: {
				options: {
					style: 'compressed',
					sourcemap: false,
					lineNumbers: true
				},
				files: {
					'<%= dirs.dest %>/style.min.css': '<%= dirs.scss %>/style.scss'
				}
			}
		},

		watch: {
			options: {
				livereload: true,
				spawn: false
			},
			sass: {
				files: "<%= dirs.scss %>/**/**/*.scss",
				tasks: ['sass']
			},
			// cssmin: {
			//     files: "<%= dirs.css %>/**/*.css",
			//     tasks: ['cssmin']
			// },
			// uglify: {
			//     files: ['<%= dirs.js %>/*.js'],
			//     tasks: ['uglify']
			// },
		},

		browserSync: {
			dev: {
				bsFiles: {
					src: [
						'<%= dirs.dest %>/style.min.css',
						'*.html',
						'<%= dirs.dest %>/*.js',
						'<%= dirs.js %>/*.js',

					]
				},
				options: {
					watchTask: true,
					server: './'
				},
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.registerTask('default', ['browserSync', 'watch']);
};