module.exports = () => {
  $.gulp.task('imgmin:dev', () => {
    return $.gulp.src('src/static/img/**/*.{png,jpg,gif}')
      //.pipe($.gp.tinypng('sjLH4p5gMff9T0hlf2FZ8GYQG8tHKXNb'))
      .pipe($.gulp.dest('build/img'))
      .pipe($.bs.reload({
        stream: true
      }));
  });

  $.gulp.task('imgmin:build', () => {
    return $.gulp.src('src/static/img/**/*.{png,jpg,gif}')
      .pipe($.gp.tinypng('sjLH4p5gMff9T0hlf2FZ8GYQG8tHKXNb'))
      .pipe($.gulp.dest('build/img'))
      .pipe($.bs.reload({
        stream: true
      }));
  });
}