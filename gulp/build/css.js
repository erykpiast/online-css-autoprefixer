'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var connect = require('gulp-connect');
var autoprefixer = require('gulp-autoprefixer');

var config = require('../config');

function buildCssTask() {
    return gulp.src(config.src.css.files)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: [ '> 1%', 'last 2 versions' ],
            cascade: false
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.dist.css.dir))
        .pipe(connect.reload());
};

gulp.watch(config.src.css.files, buildCssTask);

module.exports = buildCssTask;