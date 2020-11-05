const { src, dest } = require('gulp')
const minify = require('gulp-minify')

function minifyJS(){
    return src('src/js/main.js', { allowEmpty: true })
        .pipe(minify({noSource: true}))
        .pipe(dest('assets/js'))
}

exports.default = minifyJS