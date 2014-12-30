'use strict';

var extend = require('extend');

var gulp = require('gulp');
var gutil = require('gulp-util');
var connect = require('gulp-connect');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var browserify = require('browserify');
var es6ify = require('es6ify');
var aliasify = require('aliasify').configure({
    aliases: {
        'autoprefixer': '../../shims/autoprefixer.js'
    },
    configDir: __dirname,
    verbose: false
});

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
        entries: config.src.js.main,
        shim: {
            autoprefixer: {
                exports: 'autoprefixer'
            }
        }
    }, watchify.args))
    .add(es6ify.runtime)
    .transform(es6ify)
    .transform(aliasify)
);

bundler.on('update', function() {
    lintTask();
    buildJsTask();
}); 

module.exports = buildJsTask;