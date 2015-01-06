'use strict';

var gulp = require('gulp');

var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

var config = require('../config');

module.exports = function lintTestsTask() {
  return gulp.src(config.test.files)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
};