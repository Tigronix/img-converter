var gulp = require('gulp');
webp = require('gulp-webp');

gulp.task('default', defaultTask);

function defaultTask(done) {
  // place code for your default task here
  done();
}

// Convert images to WebP
gulp.task('webpp', () =>
    gulp.src('build/image/**.**') //image stored location
        .pipe(webp())
        .pipe(gulp.dest('outputs/images/webps'))
);
