'use strict';

var gulp = require('gulp');

gulp.task('lint', require('./gulp/lint'));
gulp.task('webserver', require('./gulp/web-server'));

gulp.task('build:js', require('./gulp/build/js'));
gulp.task('build:html', require('./gulp/build/html'));
gulp.task('build:css', require('./gulp/build/css'));
gulp.task('build', [ 'build:js', 'build:html', 'build:css' ]);

gulp.task('test:lint', require('./gulp/test/lint'));
gulp.task('test:build', require('./gulp/test/build'));
gulp.task('test:run', require('./gulp/test/run'));
gulp.task('test', [ 'lint', 'test:lint', 'test:build', 'test:run' ]);

gulp.task('default', [ 'lint', 'build', 'webserver' ]);
