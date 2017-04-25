'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep').stream;
var _ = require('lodash');

gulp.task('styles-reload', ['styles'], function () {
  return buildStyles()
    .pipe(browserSync.stream());
});

gulp.task('styles', function () {
  return buildStyles();
});

gulp.task('stylesAuth', function () {
  return buildSingleLess(path.join(conf.paths.src, '/less/auth.less'));
});

gulp.task('styles404', function () {
  return buildSingleLess(path.join(conf.paths.src, '/less/404.less'));
});

gulp.task('stylesExport', function () {
  return buildSingleLess(path.join(conf.paths.src, '/less/export.less'));
});

var buildStyles = function () {
  var lessOptions = {
    style: 'expanded'
  };

  var injectFiles = gulp.src([
    path.join(conf.paths.src, '/less/**/*.less'),
    '!' + path.join(conf.paths.src, '/less/404.less'),
    '!' + path.join(conf.paths.src, '/less/auth.less'),
    '!' + path.join(conf.paths.src, '/less/export.less')
  ], {read: false});

  var injectOptions = {
    transform: function (filePath) {
      filePath = filePath.replace(conf.paths.src + '/less/', '');
      return '@import "' + filePath + '";';
    },
    starttag: '// injector',
    endtag: '// endinjector',
    addRootSlash: false
  };

  return gulp.src([
    path.join(conf.paths.src, '/less/main.less')
  ])
    .pipe($.inject(injectFiles, injectOptions))
    .pipe(wiredep(_.extend({}, conf.wiredep)))
    .pipe($.sourcemaps.init())
    .pipe($.less(lessOptions)).on('error', conf.errorHandler('Less'))
    .pipe($.autoprefixer()).on('error', conf.errorHandler('Autoprefixer'))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/styles/')));
};

var buildSingleLess = function (paths) {

  var lessOptions = {
    style: 'expanded'
  };
  return gulp.src([paths])
    .pipe($.less(lessOptions)).on('error', conf.errorHandler('Less'))
    .pipe($.autoprefixer()).on('error', conf.errorHandler('Autoprefixer'))
    .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/styles/')));
};
