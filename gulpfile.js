global.$ = {
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    bs: require('browser-sync').create(),

    path: {
        tasks: require('./gulp/config/tasks.js')
    }
}

$.path.tasks.forEach(taskPath => {
    require(taskPath)();
});

$.gulp.task('default', $.gulp.series($.gulp.parallel('pug', 'sass', 'scripts:lib', 'script', 'imgmin:dev', 'svg'),
    $.gulp.parallel('watch', 'serve')));

$.gulp.task('build', $.gulp.series($.gulp.parallel('pug', 'sass', 'scripts:lib', 'script', 'imgmin:build'),
    $.gulp.parallel('watch', 'serve')));