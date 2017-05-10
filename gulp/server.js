'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');
var browserSyncSpa = require('browser-sync-spa');

var util = require('util');

var proxyMiddleware = require('http-proxy-middleware');

function browserSyncInit(baseDir, browser) {

  browser = browser === undefined ? 'default' : browser;

  var routes = null;
  if (baseDir === conf.paths.src || (util.isArray(baseDir) && baseDir.indexOf(conf.paths.src) !== -1)) {
    routes = {
      '/bower_components': 'bower_components'
    };
  }

  var server = {
    baseDir: baseDir,
    routes: routes
  };

  /*
   * You can add a proxy to your backend by uncommenting the line below.
   * You just have to configure a context which will we redirected and the target url.
   * Example: $http.get('/users') requests will be automatically proxified.
   *
   * For more details and option, https://github.com/chimurai/http-proxy-middleware/blob/v0.9.0/README.md
   */
  var context = '/api'; // requests with this path will be proxied
  var context_photo = '/static';

  // configure proxy middleware options
  var options = {
    target: 'http://115.159.26.15/', // target host
    changeOrigin: true, // needed for virtual hosted sites
    ws: true, // proxy websockets
    pathRewrite: {
      //'^/old/api' : '/new/api'      // rewrite paths
    },
    proxyTable: {
      // when request.headers.host == 'dev.localhost:3000',
      // override target 'http://www.example.org' to 'http://localhost:8000'
      'dev.localhost:3000': 'http://localhost:8000'

    }

  };

  // create the proxy
  server.middleware = [proxyMiddleware(context, options), proxyMiddleware(context_photo, options), proxyMiddleware('/export', options)];
  //server.middleware = [proxyMiddleware('/intelligence', options), proxyMiddleware(context, options) /*, proxyMiddleware('/api/stable-v1', options2)*/ ];

  browserSync.instance = browserSync.init({
    startPath: '/',
    server: server,
    browser: browser,
    ghostMode: false
  });
}

browserSync.use(browserSyncSpa({
  selector: '[ng-app]' // Only needed for angular apps
}));

gulp.task('serve', ['watch'], function () {
  browserSyncInit([path.join(conf.paths.tmp, '/serve'), conf.paths.src], 'chrome');
});

gulp.task('serve:dist', ['build'], function () {
  browserSyncInit(conf.paths.dist);
});


gulp.task('serve:e2e', ['inject'], function () {
  browserSyncInit([conf.paths.tmp + '/serve', conf.paths.src], []);
});

gulp.task('serve:e2e-dist', ['build'], function () {
  browserSyncInit(conf.paths.dist, []);
});
