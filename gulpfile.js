global.$ = {
    gulp: require('gulp'),
    del: require('del'),
    gp: require('gulp-load-plugins')(),
    bs: require('browser-sync').create(),

    path: {
        tasks: require('./gulp/config/tasks.js')
    }
}

$.path.tasks.forEach(taskPath => {
    require(taskPath)();
});

$.gulp.task('dev', $.gulp.series('clean', 
                   $.gulp.parallel(
                       'pug',
                        'sass', 
                        'scripts:lib',
                        'script', 
                        'imgmin:dev'
                    ),
   ));

$.gulp.task('build', $.gulp.series('clean', 
                     $.gulp.parallel(
                         'pug', 
                         'sass', 
                         'scripts:lib', 
                         'script', 
                         'imgmin:build'
                         ),
    ));

$.gulp.task('default', $.gulp.series('dev', 
                       $.gulp.parallel('watch', 'serve')));