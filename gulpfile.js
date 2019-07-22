const gulp = require('gulp');
const concat = require('gulp-concat');

function styles() {
  return gulp.src('src/css/**/*.css')
  .pipe(concat('styles.css'))
  .pipe(gulp.dest('dist/css'));
}

function scripts() {
  gulp.src('')
  .pipe(gulp.dest(''));
}

gulp.task('styles', styles);
gulp.task('scripts', styles);