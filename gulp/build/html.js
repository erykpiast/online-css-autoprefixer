'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect');

var config = require('../config');

module.exports = function buildHtmlTask() {
    return gulp.src(config.src.html.files, {
            base: config.src.html.dir
        })
        .pipe(gulp.dest(config.dist.html.dir))
        .pipe(connect.reload());
};