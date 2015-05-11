var gulp = require('gulp'),
	jshint = require('gulp-jshint'),
	jshintReporter = require('jshint-stylish'),
	watch = require('gulp-watch');

var browserify = require('gulp-browserify');
var concat = require('gulp-concat');

/*
 * Create variables for our project paths so we can change in one place
 */
var paths = {
	'src':['./models/**/*.js','./routes/**/*.js', 'keystone.js', 'package.json']
};

gulp.task('browserify', function() {
  gulp.src('public/js/main.js')
    .pipe(browserify({transform: 'reactify'}))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('public/js/dist'));
});

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

gulp.task('default', ['browserify']);

gulp.task('watch', function() {
  gulp.watch('src/**/*.*', ['default']);
})
