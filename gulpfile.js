'use strict';

var gulp = require('gulp');

var config = require('./gulp/config');
var lint = require('./gulp/lint')(config.src.js.files);
var build = require('./gulp/build')({
    mainFile: config.src.js.main,
    bundleDir: config.dist.js.dir,
    bundleName: config.dist.js.bundleName
}, lint);

 // on any dep update, runs the bundler

gulp.task('build', build);
gulp.task('lint', lint);

gulp.task('default', function defaultTask() {
    lint();
    build();
});