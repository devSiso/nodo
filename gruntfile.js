
module.exports = function (grunt) {

    grunt.initConfig({
        watch: {
            set1: {
                files: 'src/assets/less/**/*.less',
                tasks: ['less','autoprefixer']
            },
            set2: {
                files: 'src/public/index.html',
                tasks: ['copyto']
            },
            set3: {
                files: 'src/assets/js/components/*.js',
                tasks: ['concat']
            },
            set4: {
                files: 'src/assets/js/main.js',
                tasks: ['uglify']
            }
        },
        less: {
            css: {
                files: {
                    "dist/css/style.css": "src/assets/less/main.less"
                },
                options: {
                    compress: true,
                    sourcemap: true

                }
            },
        },
        autoprefixer: {
            dist: {
                options: {
                    browsers: ['last 2 versions'],
                    map: true,
                    remove: false,
                    safe: true
                },
                files: {
                    'dist/css/style.css': 'dist/css/style.css'
                },
            },
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                        'dist/css/*.css',
                        'dist/*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './dist'
                }
            }
        },
        uglify: {
            js: {
                files: {
                    'dist/js/output.min.js': ['src/assets/js/main.js']
                }
            },
        },
        copyto: {
            main: {
                files: [{
                        cwd: 'src/public/',
                        src: ['**/*'],
                        dest: 'dist/',
                        expand: true
                    },
                    {
                        expand: true,
                        cwd: 'src/assets/fonts',
                        src: ['*.otf'],
                        dest: 'dist/fonts'
                    },
                    {
                        cwd: 'src/assets/libs/',
                        src: ['**/*'],
                        dest: 'dist/libs',
                        expand: true
                    },
                ]
            },
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'src/assets/img',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'dist/img'
                }]
            }
        },
        concat: {
            basic: {
                src: ['src/assets/js/components/*.js'],
                dest: 'src/assets/js/main.js',
            },
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-copy-to');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-autoprefixer');

    grunt.registerTask('default', ['concat', 'less', 'autoprefixer', 'uglify', 'copyto', 'browserSync', 'imagemin', 'watch']);
};