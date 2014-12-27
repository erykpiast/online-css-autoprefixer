'use strict';

var gulp = require('gulp');

var config = require('./gulp/config');
var lintTask = require('./gulp/lint');
var webServerTask = require('./gulp/web-server');
var buildJsTask = require('./gulp/build/js');
var buildHtmlTask = require('./gulp/build/html');

gulp.task('build:js', buildJsTask);
gulp.task('build:html', buildHtmlTask);
gulp.task('build', [ 'build:js', 'build:html' ]);

gulp.task('lint', lintTask);
gulp.task('webserver', webServerTask);

gulp.task('default', [ 'lint', 'build', 'webserver' ]);