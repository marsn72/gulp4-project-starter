const gulp = require('gulp');
const gp = require('gulp-load-plugins')();
const browserSync = require('browser-sync').create();

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./build"
        }
    });
});

gulp.task('pug', ()=>{
    return gulp.src('src/pug/pages/*.pug')
    .pipe(gp.pug({
        pretty: true
    }))
    .pipe(gulp.dest('build'))
    .on('end', browserSync.reload);
});

gulp.task('sass', ()=>{
    return gulp.src('src/static/scss/*.scss')
    .pipe(gp.sourcemaps.init())
    .pipe(gp.sass())
    .pipe(gp.autoprefixer({
        browsers: ['last 5 versions'],
    }))
    .on("error", gp.notify.onError({
        message: "Error: <%= error.message %>",
        title: "Error compilied styles"
      }))
    .pipe(gp.csso())
    .pipe(gp.sourcemaps.write())
    .pipe(gulp.dest('build/css'))
    .pipe(browserSync.reload({
        stream: true
    }));
});

gulp.task('watch', ()=>{
    gulp.watch('src/pug/**/*.pug', gulp.series('pug'));
    gulp.watch('src/static/scss/**/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.series(gulp.parallel('pug', 'sass'), 
                                 gulp.parallel('watch', 'serve')));