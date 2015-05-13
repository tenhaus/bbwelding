var gulp = require('gulp'),
	jshint = require('gulp-jshint'),
	jshintReporter = require('jshint-stylish'),
	watch = require('gulp-watch');

var sass = require('gulp-sass');
var wiredep = require('wiredep').stream;

/*
 * Create variables for our project paths so we can change in one place
 */
var paths = {
	'src':['./models/**/*.js','./routes/**/*.js', 'keystone.js', 'package.json']
};


// gulp lint
gulp.task('lint', function(){
	gulp.src(paths.src)
		.pipe(jshint())
		.pipe(jshint.reporter(jshintReporter));

});

// gulp watcher for lint
gulp.task('watch:lint', function () {
	gulp.src(paths.src)
		.pipe(watch())
		.pipe(jshint())
		.pipe(jshint.reporter(jshintReporter));
});

gulp.task('sass', function () {
  gulp.src('./public/styles/site.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/styles'));
});

gulp.task('bower', function () {
  gulp.src('./templates/views/layouts/default.hbs');
	gulp.src('./bower_components/**')
		.pipe(gulp.dest('./public/bower_components'));
});

gulp.task('default', function () {
  gulp.watch('./public/**/*.scss', ['sass']);
	gulp.watch('./bower_components/**/', ['bower']);
});
