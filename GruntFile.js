/**
 * Created by AndreaThacker on 11/19/2015.
 */
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        jshint: {
            all: ['Gruntfile.js', 'src/js/project/**/*.js', 'test/**/*.js']
        },
        copy:{
          build:{
                cwd:'src',
                src:['index.html', 'html/*.html', 'js/**/*.js'],
                dest:'dist',
                expand: true
             }
        },
       stripComments:{
            build:{
                options: {
                    singleline: true,
                    multiline: true
                },
                src: [   'dist/**/*.js']
            }
        },
        stripLogging:{
            build:{
                src:'dist/**/**.js'
            }
        },

        uglify: {
            options: {

            },
            build: {
                files: {
                    'build/app.min.js': ['dist/**/*.js']
                }
            }
        }
    });

    // via Node -- Load the plugins
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-stripcomments');
    grunt.loadNpmTasks("grunt-remove-logging");



    // Default task(s).
    grunt.registerTask('default','', ['jshint','copy:build',  'jshint','uglify' ]);


};



