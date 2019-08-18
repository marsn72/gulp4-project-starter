const gulp = require('gulp');
const gp = require('gulp-load-plugins')();

gulp.task('pug', ()=>{
    return gulp.src('src/pug/pages/*.pug')
    .pipe(gp.pug({
        pretty: true
    }))
    .pipe(gulp.dest('build'));
});

gulp.task('sass', ()=>{
    return gulp.src('src/static/scss/*.scss')
    .pipe(gp.sass())
    .pipe(gp.csso())
    .pipe(gulp.dest('build/css'));
});