var gulp = require("gulp"),
    connect = require('gulp-connect'),
    sass = require('gulp-sass');


gulp.task('webserver', function(){
  connect.server({
    livereload: true
  });
});

gulp.task('sass', function(){
  gulp.src('./src/scss/main.scss')
      .pipe(sass.sync().on('error', sass.logError))
      .pipe(gulp.dest('./dist'));
});



gulp.task('default', ['webserver']);
gulp.task('default',['sass', 'watch']);

gulp.task('watch', function(){
  gulp.watch('./src/scss/main.scss',['sass']);
})
