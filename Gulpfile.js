
var gulp = require('gulp');
var babel = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var sass = require('gulp-sass');

/* var _css = [
  './node_modules/bootstrap/dist/css/bootstrap.css', 
  './node_modules/font-awesome/css/font-awesome.css',
  './src/styles.css'
]; */

var _js = [
  './node_modules/jquery/dist/jquery.js', 
  './node_modules/bootstrap-sass/assets/javascripts/bootstrap.js'
];

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
  // CSS
  /* gulp
    .src(_css)
    .pipe(concat('app.css'))
    .pipe(gulp.dest('./public/')); */

   gulp
    .src('./src/styles.scss')
    .pipe(sass())
    .pipe(rename('app.css'))
    .pipe(gulp.dest('./public'));

  // Javascript
   gulp
    .src(_js)
    .pipe(concat('lib-app.js'))
    .pipe(gulp.dest('./public/'));

  // Fonts
  gulp

    .src('./node_modules/bootstrap-sass/assets/fonts/bootstrap/*')
    .pipe(gulp.dest('./public/fonts/bootstrap'));

  // Images
  gulp
    .src('src/images/*')
    .pipe(gulp.dest('public/images'));
})

gulp.task('build', function() {
  return compile();
})

gulp.task('watch', function() {
  return compile(true);
})

gulp.task('dev', ['assets', 'build', 'watch' ]);

gulp.task('default', ['build']);

