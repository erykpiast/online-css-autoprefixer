'use strict';

module.exports = {
    src: {
        js: {
            files: './src/js/**/*.js',
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
    }
}