'use strict';

module.exports = function (grunt) {

    // Load grunt tasks automatically, when needed
    require('jit-grunt')(grunt, {
        buildcontrol: 'grunt-build-control'
    });

    grunt.initConfig({
        clean: {
            demo: ['build']
        },
        copy: {
            demo: {
                files: {
                    'build/index.html': ['demo/index.html'],
                    'build/index.css': ['demo/index.css']
                }
            }
        },

        browserify: {
            options: {
                alias: {
                    'diffex': './lib/index.js'
                }
            },
            demo: {
                files: {
                    'build/index.js': ['demo/index.js']
                },
                options: {
                    watch: true,
                    transform: ['babelify']
                }
            }
        },

        buildcontrol: {
            options: {
                dir: 'build',
                commit: true,
                push: true,
                connectCommits: false,
                message: 'Built live demo from commit %sourceCommit%'
            },
            demo: {
                options: {
                    // Update the remote to point to your github repo
                    remote: 'git@github.com:oscmedgon/react-version-control.git',
                    branch: 'gh-pages',
                }
            }
        },

        connect: {
            dev: {
                options: {
                    base: 'build',
                    hostname: 'localhost',
                    port: 3000,
                    livereload: true
                }
            }
        },

        watch: {
            dev: {
                files: ['build/*'],
                options: {
                    livereload: true
                }
            },
            source: {
                files: ['demo/*'],
                tasks: ['build']
            }
        }
    });

    grunt.registerTask('build', ['clean', 'copy', 'browserify']);
    grunt.registerTask('serve', ['build', 'connect', 'watch']);
    grunt.registerTask('deploy', ['build', 'buildcontrol']);
    grunt.registerTask('default', ['serve']);
};