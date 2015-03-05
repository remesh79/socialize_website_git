module.exports = function (grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        svgstore: {
            options: {
                prefix: 'icon-', // This will prefix each <g> ID
                includedemo : true, // This will prefix each <g> ID
                cleanup  : true, // cleanup
            },
            default: {
                files: {
                    'images/svg/sprite/services.svg': ['images/svg/services/*.svg'],
                    'images/svg/sprite/clients.svg': ['images/svg/clients/*.svg']
                }
            }
        },
        concat: {
            options: {
                // define a string to put between each file in the concatenated output
                separator: ';'
            },
            dist: {
                src: [
                    'js/libs/jquery-1.11.2.min.js',
                    'js/libs/grids.min.js',
                    'js/libs/jquery.popupoverlay.js',
                    'js/libs/jquery.scrollmagic.min.js',
                    'js/libs/jquery.scrollmagic.debug.js',
                    'js/libs/owl.carousel.min.js',
                    'js/libs/grids.min.js',
                    'js/app.js'  // This specific file
                ],
                dest: 'js/build/production.js'
            }
        },

        uglify: {
            build: {
                src: 'js/build/production.js',
                dest: 'js/build/production.min.js'
            }
        },

        watch: {
            options: {
                livereload: true
            },
            scripts: {
                files: ['js/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false
                }
            }
        }


    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-svgstore');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'uglify','svgstore']);

};