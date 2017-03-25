'use strict';
var path = require('path');
var gulp = require('gulp');
var watch = require('gulp-watch');
var env = require('./conf');
var nodeMon = require('gulp-nodemon');

// 如果应用部分需要自己的node_modules，就加在mock目录下吧
gulp.task('mock', function() {
    nodeMon({

        script: env.paths.mock + '/server.js',
        ext: 'js json coffee ts',
        env: {
            NODE_ENV: 'development',
            NODE_PATH: [
                env.paths.mock + '/node_modules',
                env.paths.app + '/node_modules',
                process.env.NODE_PATH
            ].join(path.delimiter)
        },
        nodeArgs: ['--debug']
    });
});

//注册一个默认任务
gulp.task('mock-serve', ['mock', 'serve']);
