'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');

var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

var config = require('../config');

module.exports = function lintTestsTask(cb, files) {
  return gulp.src(files || config.test.files)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    .on('error', function(err) {
        gutil.log('linter error:', err);
    });
};
