'use strict';

var extend = require('extend');

var gulp = require('gulp');
var gutil = require('gulp-util');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var browserify = require('browserify');
var es6ify = require('es6ify');

es6ify.traceurOverrides = {
    asyncFunctions: true
};

module.exports = function createBuildTask(config, onUpdate) {
    var bundler = watchify(browserify(extend({
            debug: true,
            entries: config.mainFile
        }, watchify.args))
        .add(es6ify.runtime)
        .transform(es6ify)
    );
    
    bundler.on('update', function() {
        onUpdate();
        
        buildTask();
    });
    
    
    function buildTask() {
        return bundler.bundle()
            .on('error', function(err) {
                gutil.log('Browserify error:', err.message);
            })
            .pipe(
                source(config.bundleName)
            )
            .pipe(
                gulp.dest(config.bundleDir)
            );
    }
    
    
    return buildTask;
}