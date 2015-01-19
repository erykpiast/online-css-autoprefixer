'use strict';

var extend = require('extend');

var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var glob = require('glob');
var watchify = require('watchify');
var browserify = require('browserify');
var to5ify = require('6to5ify');
var aliasify = require('aliasify');

var config = require('../config');

function buildTestsTask() {
    return bundler.bundle()
        .on('error', function(err) {
            gutil.log('Browserify error:', err.message);
        })
        .pipe(source(config.test.bundle.name))
        .pipe(gulp.dest(config.test.bundle.dir));
}

var bundler = (function createBundler() {
    var bundler = browserify({
            debug: true,
            entry: true
        });

    glob.sync(config.test.files).forEach(function(filePath) {
        bundler = bundler.add(filePath);
    });

    bundler = bundler.transform(to5ify.configure({
        only: /^(?!.*node_modules)+.+\.js$/,
        sourceMap: 'inline',
        sourceMapRelative: __dirname
    }))
    .transform(aliasify.configure({
        aliases: {
            'polymer': '../../shims/polymer.js'
        },
        configDir: __dirname
    }));

    return bundler;
})();

module.exports = buildTestsTask;