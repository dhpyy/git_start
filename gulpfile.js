/**
 * gulp的主文件，用于注册任务
 * @Author: iceStone
 * @Date:   2016-01-26 17:07:26
 * @Last Modified by:   iceStone
 * @Last Modified time: 2016-01-26 17:56:34
 */

'use strict';

// 引入gulp包
var gulp = require('gulp')
var less = require('gulp-less')
var cssnano = require('gulp-cssnano');
var browserSync = require('browser-sync').create();

// 注册复制任务
gulp.task('copy', function() {
    gulp.src('src/index.html')      /*读文件*/
        .pipe(gulp.dest('dist/'))   /*写文件--移动文件*/
})

// 注册编译style任务
gulp.task('style', function() {
  gulp.src('src/styles/*.less')
    .pipe(less())       // 编译less文件
    .pipe(cssnano())    // 压缩css文件
    .pipe(gulp.dest('dist/css/'));
});

// 注册监听任务
gulp.task('listener', function() {
    gulp.watch('src/index.html', ['copy'])          /*监听文件变动事件，执行处理函数*/
    gulp.watch('src/styles/*.less', ['style'])
});

// 注册启动同步服务任务
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./"    /*默认为项目的根路径*/
        }
    });
});
