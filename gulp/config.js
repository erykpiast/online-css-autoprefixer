'use strict';

module.exports = {
    src: {
        js: {
            files: [ './src/js/**/*.js', '!./src/js/**/spec/**/*.js' ],
            main: './src/js/app.js'
        },
        html: {
            dir: './src/html',
            files: './src/html/**/*.html'
        },
        css: {
            files: './src/css/**/*.scss'
        }
    },
    dist: {
        dir: './dist',
        js: {
            dir: './dist',
            bundleName: 'bundle.js'
        },
        html: {
            dir: './dist'
        },
        css: {
            dir: './dist'
        }
    },
    test: {
        files: './src/js/**/spec/**/*.spec.js',
        bundle: {
            name: 'tests.js',
            dir: './dist'
        },
        runtimeFiles: [ './test/**/*.js' ],
        runnerConfig: './karma.conf.js'
    }
}