const webpackConfig = require('./webpack.config.js');

module.exports = function (config) {
  config.set({
    browsers: ['Firefox'],
    sigleRun: true,
    frameworks: ['mocha'],
    files: [
      'node_modules/foundation-sites/dist/foundation.css',
      'node_modules/jquery/dist/jquery.js',
      'app/tests/**/*.test.jsx'
    ],
    preprocessors: {
      'app/tests/**/*.test.jsx': ['webpack', 'sourcemap']
    },
    reporters: ['mocha'],
    client: {
      mocha: {
        timeout: '10000'
      }
    },
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    }
  });
}
