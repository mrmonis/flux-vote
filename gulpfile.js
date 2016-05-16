var gulp = require('gulp');
var browserify = require('browserify');
var jest = require('gulp-jest');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

gulp.task('browserify', function() {
	return browserify('./src/js/main.js', {debug: true})
	    .transform('babelify', {presets: ["es2015","react"]})
	    .bundle()
	    .pipe(source('main.js'))
	    .pipe(gulp.dest('dist/js'));
});

gulp.task('copy', function() {
	gulp.src('src/index.html')
		.pipe(gulp.dest('dist'));
	gulp.src('src/assets/**/*.*')
		.pipe(gulp.dest('dist/assets'));
});

gulp.task('jest', function () {
    return gulp.src('__tests__').pipe(jest());
});

gulp.task('default', ['browserify','copy'], function() {
	return gulp.watch(['src/**/*.*','__tests__/**/*.*'], ['browserify', 'copy']);
});