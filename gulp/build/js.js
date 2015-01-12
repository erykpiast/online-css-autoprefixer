'use strict';

var extend = require('extend');

var gulp = require('gulp');
var gutil = require('gulp-util');
var connect = require('gulp-connect');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var browserify = require('browserify');
var es6ify = require('es6ify');
var aliasify = require('aliasify');

var config = require('../config');

var lintTask = require('../lint');

es6ify.traceurOverrides = {
    asyncFunctions: true
};

function buildJsTask() {
    return bundler.bundle()
        .on('error', function(err) {
            gutil.log('Browserify error:', err.message);
        })
        .pipe(source(config.dist.js.bundleName))
        .pipe(gulp.dest(config.dist.js.dir))
        .pipe(connect.reload());
}

var bundler = watchify(browserify(extend({
        debug: true,
        entry: true
    }, watchify.args))
    .add(es6ify.runtime)
    .add(config.src.js.main)
    .transform(es6ify.configure(/^(?!.*node_modules)+.+\.js$/))
    .transform(aliasify.configure({
        aliases: {
            'autoprefixer': '../../shims/autoprefixer.js'
        },
        configDir: __dirname,
        verbose: false
    }))
);

bundler.on('update', function() {
    
    gulp.start('lint');
    gulp.start('build:js');

}); 

module.exports = buildJsTask;