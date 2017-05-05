'use strict';

var gulp = require('gulp');
var buffer = require('vinyl-buffer');
//var csso = require('gulp-csso');
//var imagemin = require('gulp-imagemin');
var merge = require('merge-stream');

var spritesmith = require('gulp.spritesmith');
var path = require('path');
var conf = require('./conf');

gulp.task('sprite', function () {
    // Generate our spritesheet
    var spriteData = gulp.src(path.join(conf.paths.src, '/assets/image/sprite/*.png')).pipe(spritesmith({
        imgName: 'sprite.png',
        cssName: 'sprite.css'
    }));

    // Pipe image stream through image optimizer and onto disk
    var imgStream = spriteData.img
        // DEV: We must buffer our stream into a Buffer for `imagemin`
        .pipe(buffer())
        //.pipe(imagemin())
        .pipe(gulp.dest(path.join(conf.paths.dist, '/assets/')));

    // Pipe CSS stream through CSS optimizer and onto disk
    var cssStream = spriteData.css
        //.pipe(csso())
        .pipe(gulp.dest(path.join(conf.paths.dist, '/styles/')));

    // Return a merged stream to handle both `end` events
    return merge(imgStream, cssStream);
});
