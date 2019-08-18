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

$.gulp.task('default', $.gulp.series($.gulp.parallel('pug', 'sass', 'scripts:lib', 'script'),
    $.gulp.parallel('watch', 'serve')));