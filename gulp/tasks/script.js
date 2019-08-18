module.exports = () => {
  $.gulp.task('scripts:lib', () => {
    return $.gulp.src(['node_modules/jquery/dist/jquery.min.js',
                       'node_modules/slick-carousel/slick/slick.min.js'])
      .pipe($.gp.concat('libs.min.js'))
      .pipe($.gulp.dest('build/js'))
      .pipe($.bs.reload({
        stream: true
      }));
  });

  $.gulp.task('script', () => {
    return $.gulp.src(['src/static/js/main.js'])
      .pipe($.gulp.dest('build/js'))
      .pipe($.bs.reload({
        stream: true
      }));
  });
}