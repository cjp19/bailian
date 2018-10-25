const gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	concat = require('gulp-concat'),
	sass = require('gulp-sass'),
	cssnano = require('gulp-cssnano'),
	imagemin = require('gulp-imagemin');

	gulp.task('sass',function(){
		return gulp.src('./src/sass/*.scss').pipe(sass()).pipe(rename({"suffix":".min"})).pipe(gulp.dest('dist/css'));
	})
	gulp.task('default',function(){
		gulp.watch('./src/sass/*.scss',['sass']);
	})
	gulp.task('img',function(){
		return gulp.src('./src/images/*').pipe(imagemin()).pipe(gulp.dest('dist/images'));
	})