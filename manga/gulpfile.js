const gulp = require('gulp'),
    gulpReplace = require('gulp-replace'),
    tiny = require('gulp-tinypng-nokey'),
    zip = require('gulp-zip'),
    gulpSequence = require('gulp-sequence');
const len = __dirname.split('\\').length;
const dirName = __dirname.split('\\')[len-1];

//url替换模块

//测试环境
gulp.task('tsReplace', function () {
    return gulp.src(['dist/**/*.js'])
        .pipe(gulpReplace(/appid.{1,}&redirect_uri=?/, 'appid=wx9239832d3e8f16ca&redirect_uri='))//替换测试环境微信端appid
        .pipe(gulpReplace(/(Auth:"https?:\/\/.*?")/, 'Auth:"https://oauthserver.xiaoyaozhan.com/Oauth2/Token"'))//替换正式环境api url
        .pipe(gulpReplace(/(h5SyUrl:"https?:\/\/.*?")/, 'h5SyUrl:"http://tsxyj.xiaoyaozhan.com/api/"'))//替换正式环境api url
        .pipe(gulpReplace(/(config:"https?:\/\/.*?")/, 'config:"http://tsconfig.123yyf.com/api/"'))//替换正式环境api url
        .pipe(gulp.dest('dist/'));
});
//统计模块的添加
const jsStr = `<script>
  	var _mtac = {"senseQuery":1};
  	(function() {
  		var mta = document.createElement("script");
  		mta.src = "http://pingjs.qq.com/h5/stats.js?v2.0.4";
  		mta.setAttribute("name", "MTAH5");
  		mta.setAttribute("sid", "500596592");
  		mta.setAttribute("cid", "500596593");
  		var s = document.getElementsByTagName("script")[0];
  		s.parentNode.insertBefore(mta, s);
  	})();
</script></body>`;
gulp.task('offAppendJs', function () {
    return gulp.src(['dist/index.html'])
        .pipe(gulpReplace(/<\/body>/,jsStr))
        .pipe(gulp.dest('dist/'));
});
//正式环境
gulp.task('offReplace', function () {
    return gulp.src(['dist/**/*.js'])
        .pipe(gulpReplace(/(Auth:"https?:\/\/.*?")/, 'Auth:"https://oauthserver.xiaoyaozhan.com/Oauth2/Token"'))//替换正式环境api url
        .pipe(gulpReplace(/(h5SyUrl:"https?:\/\/.*?")/, 'h5SyUrl:"https://xyj.xiaoyaozhan.com/api/"'))//替换正式环境api url
        .pipe(gulpReplace(/(config:"https?:\/\/.*?")/, 'config:"https://config.xiaoyaozhan.com/api/"'))//替换正式环境api url
        .pipe(gulpReplace(/wx9239832d3e8f16ca/, "wxd298d25b6cb7925a"))//替换正式环境appid
        .pipe(gulp.dest('dist/'));
});

//编译文件打包模块
//测试环境打包文件zip
gulp.task('tspackage', function () {
        gulp.src(['dist/**'])
            .pipe(zip(`ts${dirName}.zip`))
            .pipe(gulp.dest('release'));
    }
);
//正式环境打包文件zip
gulp.task('offpackage', function () {
        gulp.src(['dist/**'])
            .pipe(zip(`${dirName}.zip`))
            .pipe(gulp.dest('release'));
    }
);

//图片压缩
gulp.task('tinypng', function () {
    gulp.src(['static/images/*','!static/*.json'])
        .pipe(tiny())
        .pipe(gulp.dest('static/images/'));
});

//测试环境打包任务执行
gulp.task('tsRun', gulpSequence(['tsReplace'], 'tspackage'));
//正式环境打包任务执行
gulp.task('offRun', gulpSequence(['offReplace'/*,'offAppendJs'*/],'offpackage'));

