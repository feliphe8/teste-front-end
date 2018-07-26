const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const sass        = require('gulp-sass');

// Compile Sass & Inject Into Browser
gulp.task('sass', function() {
    return gulp.src(['assets/scss/*.scss'])
        .pipe(sass())
        .pipe(gulp.dest("assets/css"))
        .pipe(browserSync.stream());
});


// Watch Sass & Serve
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: "./"  
    });

    gulp.watch(['assets/scss/*.scss'], ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});

// Default Task
gulp.task('default', ['serve']);