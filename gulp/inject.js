'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var $ = require('gulp-load-plugins')();

var wiredep = require('wiredep').stream;
var _ = require('lodash');

var browserSync = require('browser-sync');

gulp.task('inject-reload', ['inject'], function() {
    browserSync.reload();
});

gulp.task('inject', ['scripts', 'styles', 'injectAuth', 'inject404', 'injectExport', 'copyVendorImages'], function() {
    var injectStyles = gulp.src([
        path.join(conf.paths.tmp, '/serve/styles/main.css'),
        path.join('!' + conf.paths.tmp, '/serve/styles/vendor.css')
    ], { read: false });

    var injectScripts = gulp.src([
            path.join(conf.paths.src, '/app/**/*.module.js'),
            path.join(conf.paths.src, '/app/**/*.js'),
            path.join('!' + conf.paths.src, '/app/**/*.spec.js'),
            path.join('!' + conf.paths.src, '/app/**/*.mock.js')
        ])
        // .pipe($.angularFilesort())
        .on('error', conf.errorHandler('AngularFilesort'));

    var injectOptions = {
        ignorePath: [conf.paths.src, path.join(conf.paths.tmp, '/serve')],
        addRootSlash: false
    };

    return gulp.src(path.join(conf.paths.src, '/index.html'))
        .pipe($.inject(injectStyles, injectOptions))
        .pipe($.inject(injectScripts, injectOptions))
        .pipe(wiredep(_.extend({}, conf.wiredep)))
        .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve')));
});

gulp.task('injectAuth', ['stylesAuth'], function() {
    return injectAlone({
        css: [path.join('!' + conf.paths.tmp, '/serve/styles/vendor.css'), path.join(conf.paths.tmp, '/serve/styles/auth.css')],
        paths: [path.join(conf.paths.src, '/login.html'), path.join(conf.paths.src, '/regist.html')]
    })
});

gulp.task('inject404', ['styles404'], function() {
    return injectAlone({
        css: [path.join('!' + conf.paths.tmp, '/serve/styles/vendor.css'), path.join(conf.paths.tmp, '/serve/styles/404.css')],
        paths: path.join(conf.paths.src, '/404.html')
    })
});

gulp.task('injectExport', ['stylesExport'], function() {
    return injectAlone({
        css: [path.join('!' + conf.paths.tmp, '/serve/styles/vendor.css'), path.join(conf.paths.tmp, '/serve/styles/export.css')],
        paths: path.join(conf.paths.src, '/export.html')
    })
});

var injectAlone = function(options) {
    var injectStyles = gulp.src(
        options.css, { read: false });

    var injectOptions = {
        ignorePath: [conf.paths.src, path.join(conf.paths.tmp, '/serve')],
        addRootSlash: false
    };

    return gulp.src(options.paths)
        .pipe($.inject(injectStyles, injectOptions))
        // .pipe(wiredep(_.extend({}, conf.wiredep)))
        .pipe(wiredep(_.extend({ exclude: [!/\/jquery\.js$/] }, conf.wiredep)))
        .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve')));
};
