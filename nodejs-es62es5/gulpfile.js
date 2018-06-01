const gulp = require('gulp'),
    gulpReplace = require('gulp-replace'),
    zip = require('gulp-zip'),
    gulpSequence = require('gulp-sequence');
//打包开始
gulp.task('tsStart', function () {
    console.log('--------测试环境打包start！----------');
});
gulp.task('offStart', function () {
    console.log('--------正式环境打包start！----------');
});
//复制文件
gulp.task('copyFile', function () {
    return gulp.src([`${__dirname}/**`,'!gulpfile.js','!releaseZip/','!releaseZip/**','!lib/**','!lib/','!src/**','!src/','!node_modules/**','!node_modules'])
        .pipe(gulp.dest('lib/'))
});

//测试环境打包文件zip
gulp.task('tsReleasePackage', function () {
        return gulp.src(['lib/**'])
            .pipe(zip('tsxcximg-tsRelease.zip'))
            .pipe(gulp.dest('releaseZip'));
    }
);
//正式环境打包文件zip
gulp.task('offReleasePackage', function () {
        return gulp.src(['lib/**'])
            .pipe(zip('xcximg-offRelease.zip'))
            .pipe(gulp.dest('releaseZip'));
    }
);
//打包结束
gulp.task('end', function () {
    console.log('--------打包end！----------');
});
//测试环境打包任务执行,PS:先运行 wepy build --watch 再执行此命令 gulp tsRun
gulp.task('tsRun', gulpSequence('tsStart', [
        'copyFile'
    ],['tsReleasePackage'], 'end')
);
//正式环境打包任务执行,PS:先运行 wepy build --watch 再执行此命令 gulp offRun
gulp.task('offRun', gulpSequence('offStart', [
        'copyFile'
    ],['offReleasePackage'], 'end')
);

