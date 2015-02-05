'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var connect = require('gulp-connect');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var to5ify = require('6to5ify');
var aliasify = require('aliasify');
var brfs = require('brfs');

var config = require('../config');

var bundler = browserify(config.src.js.main, {
        debug: true,
        entry: true
    })
    .transform(to5ify.configure({
        only: /^(?!.*node_modules)+.+\.js$/,
        sourceMap: 'inline',
        sourceMapRelative: __dirname
    }))
    .transform(aliasify.configure({
        aliases: {
            'x-tag': '../../shims/x-tag.js'
        },
        configDir: __dirname
    }))
    .transform(brfs);

function buildJsTask() {
    return bundler.bundle()
    .on('error', function(err) {
        gutil.log('Browserify error:', err.message);
    })
    .pipe(source(config.dist.js.bundleName))
    .pipe(gulp.dest(config.dist.js.dir))
    .pipe(connect.reload());
}

module.exports = buildJsTask;
