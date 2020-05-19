const { task, src, dest, watch } = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

/* function consoleToTerminal () {
console.log('Hello from Gulp');
}

task('log', consoleToTerminal); */

function cssPrefix() {
return src ('Process/css/**/*.css')
.pipe(autoprefixer())
.pipe(dest('dist/Process/css'))
}

task('css-prefix', cssPrefix)

task('watch', () => {
  watch('Process/css/**/*.css', cssPrefix);
  watch('Home 1/css/**/*.css', cssPrefix);
  watch('Home 3/css/**/*.css', cssPrefix);
watch('Home 4/css/**/*.css', cssPrefix)
})

// exports.default = function () {
//  watch('Process/css/**/*.css', cssPrefix)
//} 