var gulp    = require('gulp'),
sass        = require('gulp-sass'),
browserSync = require('browser-sync').create(),
rename      = require("gulp-rename");
 
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    
    .pipe(browserSync.stream());
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

/*gulp.src("./css")
  .pipe(rename("style.css"))
  .pipe(gulp.dest("./css"));*/


gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("./sass/**/*.scss", ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
