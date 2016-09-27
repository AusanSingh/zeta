var gulp=require('gulp');
var sass=require('gulp-sass');

gulp.task('sass-css', function(){
	return gulp.src('app/scss/**/*.scss') //All Files
			.pipe(sass())
			.pipe(gulp.dest('app/css'))
});

gulp.task('watch', function(){
  gulp.watch('app/scss/**/*.scss', ['sass']); 
})