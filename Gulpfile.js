var gulp = require('gulp');
var babel = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var rename = require('gulp-rename');

function compile(watch) {
  var bundle = browserify('./src/index.js', {debug: true});

  if (watch) {
    bundle = watchify(bundle);
    bundle.on('update', function() {
      console.log('--> Bundling...');
      rebundle();
    })
  }

  function rebundle() {
    bundle
      .transform(babel, { presets: [ 'es2015']})
      .bundle()
      .on('error', function(err) { console.log(err);this.emit('end')})
      .pipe(source('index.js'))
      .pipe(rename('app.js'))
      .pipe(gulp.dest('public'));
  }



  rebundle();
}

gulp.task('assets', function() {
  gulp
    .src('src/styles.css')
    .pipe(gulp.dest('public'));
})

gulp.task('build', function() {
  return compile();
})

gulp.task('watch', function() {
  return compile(true);
})



gulp.task('default', ['build']);
