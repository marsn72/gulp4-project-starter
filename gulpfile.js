const gulp = require('gulp');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const autoprefixerCSS = require('gulp-autoprefixer');
const uglify = require('gulp-uglify');
const del = require('del');

function styles() {
  return gulp.src('src/css/**/*.css')
    .pipe(concat('styles.css'))
    .pipe(autoprefixerCSS({
      overrideBrowserslist: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cleanCSS({ level: 2 }))
    .pipe(gulp.dest('dist/css'));
}

function scripts() {
  return gulp.src('src/js/**/*.js')
    .pipe(uglify({ toplevel: true }))
    .pipe(gulp.dest('dist/js'));
}

function watch() {
  gulp.watch('./src/css/**/*.css', styles);
  gulp.watch('./src/js/**/*.js', scripts);
}

function clean() {
  return del(['dist/*']);
}

gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('watch', watch);

gulp.task('build', gulp.series(clean, gulp.parallel('styles', 'scripts')));

gulp.task('dev', gulp.series('build', 'watch'));