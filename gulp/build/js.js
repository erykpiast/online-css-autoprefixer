'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var extend = require('extend');
var connect = require('gulp-connect');
var transform = require('vinyl-transform');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var browserify = require('browserify');
var babelify = require('babelify');
var aliasify = require('aliasify');
var brfs = require('brfs');

var config = require('../config');

var merge = require('merge-stream');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

module.exports = function buildJsTask(before) {
    var bundler = watchify(browserify(config.src.js.main, extend(watchify.args, {
        debug: true,
        entry: true
    })))
    .transform(brfs)
    .transform(babelify.configure({
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
    .on('update', _build);

    function _build(changedFiles) {
        gutil.log('building is starting...');

        if(changedFiles) {
            gutil.log([ 'files to rebuild:' ].concat(changedFiles).join('\n'));
        }

        return before(changedFiles)
            .pipe(bundler.bundle())
            .on('error', function(err) {
                gutil.log('Browserify error:', err.message);
            })
            .pipe(source(config.dist.js.bundleName))
            .pipe(gulp.dest(config.dist.js.dir))
            .on('finish', function() {
                gutil.log('building finished!');       
            })
            .pipe(connect.reload());
    };

    return function() {
        return _build();
    };
}