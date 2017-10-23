const webpackConfig = require('./webpack.test');


module.exports = function (config) {
  var _config = {
    basePath: '',
    frameworks: ['jasmine'],
    files: [{
      pattern: './karma-test-shim.js',
      watched: false
    }],
    preprocessors: {
      './karma-test-shim.js': ['webpack', 'sourcemap']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      stats: 'errors-only'
    },
    webpackServer: {
      noInfo: true
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['PhantomJS']
  };

  config.set(_config);
};
