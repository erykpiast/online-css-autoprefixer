'use strict';

var gulp = require('gulp');

var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

module.exports = function createLintTask(files) {
    return function lintTask() {
      return gulp.src(files)
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
    };
};