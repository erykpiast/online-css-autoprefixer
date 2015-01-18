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

var bundler = browserify(config.src.js.main, {
        debug: true,
        entry: true
    })
    .transform(to5ify.configure({
        only: /^(?!.*node_modules)+.+\.js$/,
        sourceMap: 'inline',
        sourceMapRelative: __dirname
    }));

module.exports = buildJsTask;