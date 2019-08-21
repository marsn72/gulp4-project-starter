module.exports = () => {
  $.gulp.task('watch', () => {
    $.gulp.watch('src/pug/**/*.pug', $.gulp.series('pug'));
    $.gulp.watch('src/static/scss/**/*.scss', $.gulp.series('sass'));
    $.gulp.watch('src/static/js/main.js', $.gulp.series('script'));
    $.gulp.watch('src/static/img/**/*.*', $.gulp.series('imgmin:dev'));
  });
}