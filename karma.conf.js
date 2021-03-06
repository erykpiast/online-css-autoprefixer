module.exports = function (config) {
    config.set({
        basePath: '.',

        frameworks: [ 'mocha' ],

        files: [ /* definition in gulpfile */ ],

        reporters: [ 'mocha' ],
        colors: true,
        logLevel: config.LOG_INFO,

        port: 9876,
        autoWatch: false,

        browsers: [ 'PhantomJS' ],
        singleRun: true
    });
};