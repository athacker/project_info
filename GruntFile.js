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
        comments:{
            build:{
                options: {
                    singleline: true,
                    multiline: true
                },
                src: [   'dist/js/project/**/*.js']
            }
        },
        copy:{
            build_dev:{
                   cwd:'src',
                   src:['**'],
                   dest:'dist',
                   expand: true

             },
            build_prod:{
                cwd:'src',
                src:['index.html', 'html/*.html'],
                dest:'dist',
                expand: true

            }
        },

        uglify: {
            options: {
                banner: '  <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %>  \n'
            },
            build: {
                files: {
                    'build/app.min.js': ['src/js/project/**.js']
                }
            }
        }
    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-stripcomments');



    // Default task(s).
    grunt.registerTask('default','minify, copy-for-dev-debug', ['jshint','uglify','copy:build_dev', 'comments']);
    grunt.registerTask('prod-build','minify for production', ['copy:build_prod', 'comments', 'jshint','uglify' ]);


};



