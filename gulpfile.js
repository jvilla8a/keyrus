const { series } = require('gulp');
const gulp = require('gulp');
const less = require('gulp-less');
const path = require('path');
const open = require('gulp-open');

function Less () {
  return gulp.src('./src/less/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./src/css'));
}

function Open () {
  gulp.src('./src/index.html')
      .pipe(open('<%file.path%>'));
}

exports.default = series(Less, Open);