var webpackConfig = require('./webpack.config.js');
webpackConfig.entry = {};

module.exports = function(config) {
  config.set({
    basePath: '/',
    frameworks: ['jasmine'],
    reporters: ['progress'],
    port: 9898,
    colors: false,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    autoWatchBatchDelay: 300,
    files: [
      './**/*.bundle.js',
      './node_modules/angular-mocks/angular-mocks.js',
      './**/*.js',
      './**/*spec.js'],

    preprocessors: {
      './build/app.bundle.js': ['webpack']
    },

    webpack: webpackConfig,

    webpackMiddleware: {
      noInfo: true
    }
  });
}