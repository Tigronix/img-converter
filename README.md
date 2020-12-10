Author: https://santhoshveer.com/webp-image-conversion-using-gulpjs/

Convert JPG, JPEG & PNG into WebP Image format by using Gulp.js

Requirements
Node.js (Stable - LTS Version)
Gulp.js CLI (For running the Gulp tasks npm install --global gulp-cli )
WebP image conversion
Run the Below commands on your Project Directory don't run it on outside directory
it requires package.json and gulpfile.js on your project folder.

Install Gulp on your Project Directory
npm install --save-dev gulp@next
you project Must be having package.json File if not create it by using this below command line
npm init
Next, create a new js file named as gulpfile.js
copy & paste the below code on newly created js file
var gulp = require('gulp');

gulp.task('default', defaultTask);

function defaultTask(done) {
  // place code for your default task here
  done();
}
test the gulp installation by running this below command line
gulp
if you add gulp properly you will get this below output
[14:01:33] Using gulpfile /your-project-folder/gulpfile.js
[14:01:33] Starting 'default'...
[14:01:33] Finished 'default' after 2.3 ms
next install gulp WebP Image convertor npm Module
npm install --save-dev gulp-webp
Next open the gulpfile.js & add this below code
Save the File
var gulp = require('gulp');
webp = require('gulp-webp');

gulp.task('default', defaultTask);

function defaultTask(done) {
  // place code for your default task here
  done();
}

// Convert images to WebP
gulp.task('webpp', () =>
    gulp.src('build/image/exampleimage.png') //image stored location
        .pipe(webp())
        .pipe(gulp.dest('outputs/images/webps'))
);
Run the below command line it will convert your Images into WebP format
gulp webpp
Output
[14:08:42] Using gulpfile /your-project-folder/gulpfile.js
[14:08:42] Starting 'webpp'...
[14:08:42] Finished 'webpp' after 123 ms
Converted Images are stored in outputs/images/webps webps Folder these folders automatically created while running the gulp WebP Module for the fist time
Gulp-webp Module - https://www.npmjs.com/package/gulp-webp
