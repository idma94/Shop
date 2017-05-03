/**
 * Created by Zeus on 02.05.2017.
 */
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    prefix = require('gulp-autoprefixer'),
    sass = require('gulp-sass');
// Server
var browserSync = require('browser-sync').create();

var path = {
    styles : ['./assets/sass/**/*.sass', './assets/sass/**/*.scss', './assets/sass/**/*.css'],
    scripts: ['./app/**/*.js'],
    views  : ['./views/**/*.html', './*.html'],
    index  : 'index.html',
    dist  : './dist/',
    baseUrl: '/'
};

var pipes = {};

pipes.server = function () {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
};
pipes.styleBuilder = function () {
    return gulp.src(path.styles)
        .pipe(sass().on('error', function (err) {
            console.log(err)
        }))
        .pipe(prefix())
        .pipe(concat('main.css'))
        .pipe(gulp.dest(path.dist + 'css'))
        .pipe(browserSync.stream());
};
pipes.scriptBuilder = function () {
    return gulp.src(path.scripts)
        .pipe(concat('app.js'))
        .pipe(gulp.dest(path.dist + 'js'))
        .pipe(browserSync.stream());
};

gulp.task('server', pipes.server);
gulp.task('style', pipes.styleBuilder);
gulp.task('script', pipes.scriptBuilder);

// Watch
gulp.task('watch', ['style', 'script', 'server'], function () {
    gulp.watch(path.styles, ['style']);
    gulp.watch(path.scripts, ['script']);
    gulp.watch(path.views).on('change', browserSync.reload);
});

gulp.task('default', ['watch']);