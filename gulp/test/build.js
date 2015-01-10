'use strict';

var extend = require('extend');

var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var glob = require('glob');
var watchify = require('watchify');
var browserify = require('browserify');
var es6ify = require('es6ify');

var config = require('../config');

es6ify.traceurOverrides = {
    asyncFunctions: true
};

function buildTestsTask() {
    return bundler.bundle()
        .on('error', function(err) {
            gutil.log('Browserify error:', err.message);
        })
        .pipe(source(config.test.bundle.name))
        .pipe(gulp.dest(config.test.bundle.dir));
}

var bundler = (function createBundler(onBundleUpdate) {
    var bundler = watchify(browserify(extend({
            debug: true,
            entry: true
        }, watchify.args))
        .add(es6ify.runtime)
    );

    glob.sync(config.test.files).forEach(function(filePath) {
        bundler = bundler.add(filePath);
    });

    bundler = bundler.transform(es6ify.configure(/^(?!.*node_modules)+.+\.js$/));

    bundler.on('update', onBundleUpdate); 

    return bundler;
})(function onBundleUpdate() {

    gulp.start('test');

});

module.exports = buildTestsTask;