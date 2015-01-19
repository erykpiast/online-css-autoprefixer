'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var runSequence = require('run-sequence');

var config = require('./gulp/config');


gulp.task('lint', require('./gulp/lint'));
gulp.task('webserver', require('./gulp/web-server'));

gulp.task('build:js', require('./gulp/build/js'));
gulp.task('build:html', require('./gulp/build/html'));
gulp.task('build:css', require('./gulp/build/css'));
gulp.task('_build', [ 'build:js', 'build:html', 'build:css' ]);
gulp.task('build', function() {
    gulp.watch(config.src.js.files, [ 'lint', 'build:js' ]);
    gulp.start([ '_build' ]);
});

gulp.task('test:lint', require('./gulp/test/lint'));
gulp.task('test:build', require('./gulp/test/build'));
gulp.task('test:run', require('./gulp/test/run'));
gulp.task('_test', function(cb) {
    runSequence(
        [ 'lint', 'test:lint' ],
        'test:build',
        'test:run',
        function() {
            gutil.log('test task finished');

            cb();
        }
    );
});
gulp.task('test', function() {
    gulp.watch([ config.test.files, config.src.js.files ], [ '_test' ]);
    gulp.start('_test');
});

gulp.task('default', [ 'lint', 'build', 'webserver' ]);
