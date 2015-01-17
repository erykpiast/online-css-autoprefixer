'use strict';

var extend = require('extend');

var gulp = require('gulp');
var gutil = require('gulp-util');
var connect = require('gulp-connect');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var browserify = require('browserify');
var to5ify = require('6to5ify');

var config = require('../config');

var lintTask = require('../lint');

function buildJsTask() {
    return bundler.bundle()
        .on('error', function(err) {
            gutil.log('Browserify error:', err.message);
        })
        .pipe(source(config.dist.js.bundleName))
        .pipe(gulp.dest(config.dist.js.dir))
        .pipe(connect.reload());
}

var bundler = watchify(browserify(config.src.js.main, extend({
        debug: true,
        entry: true,
        fullPaths: true // it helps somehow in situation when trying to directly load module that is dependency of something (browserslist and caniuse-db)
    }, watchify.args))
    .transform(to5ify.configure({
        only: /^(?!.*node_modules)+.+\.js$/,
        sourceMap: 'inline',
        sourceMapRelative: __dirname
    }))
);

bundler.on('update', function() {
    
    gulp.start('lint');
    gulp.start('build:js');

}); 

module.exports = buildJsTask;