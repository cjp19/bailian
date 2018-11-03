const gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	concat = require('gulp-concat'),
	sass = require('gulp-sass'),
	cssnano = require('gulp-cssnano'),
	imagemin = require('gulp-imagemin');

	gulp.task('sass',function(){
		return gulp.src('./src/sass/index.scss').pipe(sass()).pipe(rename({"suffix":".min"})).pipe(gulp.dest('dist/css'));
	})
	gulp.task('sass2',function(){
		return gulp.src('./src/sass/shopcart.scss').pipe(sass()).pipe(rename({"suffix":".min"})).pipe(gulp.dest('dist/css'));
	})
	gulp.task('sass3',function(){
		return gulp.src('./src/sass/list.scss').pipe(sass()).pipe(rename({"suffix":".min"})).pipe(gulp.dest('dist/css'));
	})
	gulp.task('sass4',function(){
		return gulp.src('./src/sass/register.scss').pipe(sass()).pipe(rename({"suffix":".min"})).pipe(gulp.dest('dist/css'));
	})
	gulp.task('sass5',function(){
		return gulp.src('./src/sass/details.scss').pipe(sass()).pipe(rename({"suffix":".min"})).pipe(gulp.dest('dist/css'));
	})
	gulp.task('sass6',function(){
		return gulp.src('./src/sass/login.scss').pipe(sass()).pipe(rename({"suffix":".min"})).pipe(gulp.dest('dist/css'));
	})
	gulp.task('default',function(){
		gulp.watch('./src/sass/*.scss',['sass','sass2','sass3','sass4']);
	})
	gulp.task('default2',function(){
		gulp.watch('./src/sass/details.scss',['sass5']);
	})
	gulp.task('default3',function(){
		gulp.watch('./src/sass/login.scss',['sass6']);
	})
	gulp.task('img',function(){
		return gulp.src('./src/images/*').pipe(imagemin()).pipe(gulp.dest('dist/images'));
	})
	gulp.task('js',function(){
	return gulp.src('./src/js/*.js')
	.pipe(concat('main.js'))
	.pipe(rename({'suffix':'.min'}))
	.pipe(uglify()).pipe(gulp.dest('dist'));
})