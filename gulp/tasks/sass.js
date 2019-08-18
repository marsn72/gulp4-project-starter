module.exports = () => {
  $.gulp.task('sass', () => {
    return $.gulp.src('src/static/scss/*.scss')
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.sass())
      .pipe($.gp.autoprefixer({
        browsers: ['last 5 versions'],
      }))
      .on("error", $.gp.notify.onError({
        message: "Error: <%= error.message %>",
        title: "Error compilied styles"
      }))
      .pipe($.gp.csso())
      .pipe($.gp.sourcemaps.write())
      .pipe($.gulp.dest('build/css'))
      .pipe($.bs.reload({
        stream: true
      }));
  });
}