const gulp = require('gulp');
const pug = require('gulp-pug');

gulp.task('pug', ()=>{
    return gulp.src('src/pug/pages/*.pug')
    .pipe(pug({
        pretty: true
    }))
    .pipe(gulp.dest('build'));
});