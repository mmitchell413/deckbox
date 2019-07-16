module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        copy:{
            main:{
                files: [
                    {expand: true, cwd: 'dev/', src: ['*.php', 'php/*.php', 'img/**', 'css/fonts/*'], dest: 'prod/'},
                    {expand: true, cwd: 'dev/', src: ['fonts/**'], dest: 'prod/'},
                    {expand: true, cwd: 'dev/', src: ['favicon.ico'], dest: 'prod/'},
                    {expand: true, cwd: 'dev/', src: ['blog/**'], dest: 'prod/'},
                    {expand: true, cwd: 'dev/', src: ['*.html'], dest: 'prod/'}
                ]
            }
        },

        concat: {
            // 2. Configuration for concatinating files goes here.
            devDist: {
                src: [
                    'dev/js/libs/*.js', // All JS in the libs folder
                    'dev/js/dependencies/*.js',
                    'dev/js/bootstrap.js',
                    'dev/js/main.js',
                ],
                dest: 'dev/js/production.js',
            },
            prodDist: {
                src: [
                    'dev/js/libs/*.js',
                    'dev/js/dependencies/*.js',
                    'dev/js/bootstrap.js',
                    'dev/js/main.js'
                ],
                dest: 'prod/js/production.js'
            }
        },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'dev/img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'prod/img/'
                }]
            }
        },

        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'dev/css/main.css': 'dev/css/main.scss',
                    'prod/css/main.css': 'dev/css/main.scss'
                }
            }
        },

            postcss: {
                options: {
                    map: true,
                    processors: [
                        require('autoprefixer')({
                            browsers: ['last 2 versions']
                        })
                    ]
                },
                dist: {
                    src: 'prod/css/*.css'
                }
            },

          uglify: {
            my_target: {
              files: {
                'prod/js/production.min.js': ['prod/js/production.js']
              }
            }
          },

        watch: {
            scripts: {
                files: ['dev/js/*.js', 'dev/js/libs/*.js', 'dev/js/dependencies/*.js'],
                tasks: ['concat'],
                options: {
                    spawn: false,
                },
            },
            css: {
                files: ['dev/css/*.scss', 'dev/css/partials/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                }
            },
            minify: {
                files:  ['dev/js/*.js', 'dev/js/libs/*.js', 'dev/js/dependencies/*.js'],
                tasks: ['uglify'],
                options: {
                    spawn:false,
                }
            },
            copyfiles: {
                files: ['dev/*.php', 'dev/php/*.php', 'dev/img/*', 'dev/*.html'],
                tasks: ['copy'],
                options: {
                    spawn: false,
                }
            }
        }
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['concat', 'sass', 'postcss:dist', /*'imagemin',*/ 'uglify', 'copy']);

};
