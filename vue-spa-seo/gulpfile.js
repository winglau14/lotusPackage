const gulp = require('gulp'),
    gulpReplace = require('gulp-replace'),
    tiny = require('gulp-tinypng-nokey'),
    zip = require('gulp-zip'),
    gulpSequence = require('gulp-sequence');
gulp.task('replFile', function () {
    return gulp.src(['./src/**/*.vue', './src/**/*.js'])
        /*.pipe(gulpReplace(/localStorage.SalesManNid2/g, 'localStorage.SalesManNid3'))//替换字符
        .pipe(gulpReplace(/wxSalesMan11/g, 'wxSalesMan12'))//替换字符
        .pipe(gulpReplace(/salesManInformation11/g, 'salesManInformation12'))//替换字符*/
        .pipe(gulpReplace(/localStorage/g, 'sessionStorage'))
        .pipe(gulp.dest('src/'));
});

//url替换模块
//开发环境
gulp.task('deReplace', function () {
    return gulp.src(['dist/**/*.js'])
        .pipe(gulpReplace(/appid.{1,}&redirect_uri=?/, 'appid=wx4084b905a56a374f&redirect_uri='))//替换开发环境微信端appid
        .pipe(gulpReplace(/(Auth:"http:\/\/.*?")/, 'Auth:"http://deoauth2.123yyf.com/OAuth/Token"'))//替换开发环境api url
        .pipe(gulpReplace(/(yyfApiUrl:"http:\/\/.*?")/, 'yyfApiUrl:"http://deyaojili.123yyf.com/api/"'))//替换开发环境api url
        .pipe(gulpReplace(/(wxApiUrl:"http:\/\/.*?")/, 'wxApiUrl:"http://dewx.123yyf.com/api/"'))//替换开发环境api url
        .pipe(gulp.dest('dist/'));
});
//测试环境
gulp.task('tsReplace', function () {
    return gulp.src(['dist/**/*.js'])
        .pipe(gulpReplace(/appid.{1,}&redirect_uri=?/, 'appid=wx42f716fb71359b73&redirect_uri='))//替换测试环境微信端appid
        .pipe(gulpReplace(/(Auth:"http:\/\/.*?")/, 'Auth:"http://tsoauth2.123yyf.com/OAuth/Token"'))//替换测试环境api url
        .pipe(gulpReplace(/(yyfApiUrl:"http:\/\/.*?")/, 'yyfApiUrl:"http://tsyaojili.123yyf.com/api/"'))//替换测试环境api url
        .pipe(gulpReplace(/(downloadFileUrl:"http:\/\/.*?")/, 'yyfApiUrl:"http://tsyaojili.123yyf.com/"'))//替换测试环境api url
        .pipe(gulpReplace(/(wxApiUrl:"http:\/\/.*?")/, 'wxApiUrl:"http://tswx.123yyf.com/api/"'))//替换开发环境api url
        .pipe(gulp.dest('dist/'));
});
//统计模块的添加
const jsStr = `<script>
  	var _mtac = {};
  	(function() {
  		var mta = document.createElement("script");
  		mta.src = "http://pingjs.qq.com/h5/stats.js?v2.0.4";
  		mta.setAttribute("name", "MTAH5");
  		mta.setAttribute("sid", "500528344");
  		mta.setAttribute("cid", "500528347");
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
        .pipe(gulpReplace(/appid.{1,}&redirect_uri=?/, 'appid=wxd2e9f3d4d74d0036&redirect_uri='))//替换测试环境微信端appid
        .pipe(gulpReplace(/(Auth:"http:\/\/.*?")/, 'Auth:"http://oauth2.123yyf.com/OAuth/Token"'))//替换正式环境api url
        .pipe(gulpReplace(/(yyfApiUrl:"http:\/\/.*?")/, 'yyfApiUrl:"http://yaojili.123yyf.com/api/"'))//替换正式环境api url
        .pipe(gulpReplace(/(downloadFileUrl:"http:\/\/.*?")/, 'yyfApiUrl:"http://yaojili.123yyf.com/"'))//替换测试环境api url
        .pipe(gulpReplace(/(wxApiUrl:"http:\/\/.*?")/, 'wxApiUrl:"http://wx.123yyf.com/api/"'))//替换开发环境api url
        .pipe(gulp.dest('dist/'));
});

//编译文件打包模块
//开发环境打包文件zip
gulp.task('depackage', function () {
        gulp.src(['dist/**', '!dist/test.bat'])
            .pipe(zip('deyyy.123yyf.com.zip'))
            .pipe(gulp.dest('release'));
    }
);
//测试环境打包文件zip
gulp.task('tspackage', function () {
        gulp.src(['dist/**', '!dist/test.bat'])
            .pipe(zip('tsyyy.123yyf.com.zip'))
            .pipe(gulp.dest('release'));
    }
);
//正式环境打包文件zip
gulp.task('offpackage', function () {
        gulp.src(['dist/**', '!dist/test.bat'])
            .pipe(zip('yyy.123yyf.com.zip'))
            .pipe(gulp.dest('release'));
    }
);

//图片压缩
gulp.task('tinypng', function () {
    gulp.src(['static/*','!static/*.json'])
        .pipe(tiny())
        .pipe(gulp.dest('static'));
});

gulp.task('jsonReplace',function(){
   gulp.src('static/lotus-address2.json')
       .pipe(gulpReplace(/\s/g,''))
       .pipe(gulp.dest('static'));
});
//开发环境打包任务执行,PS:先运行yarn run build 再执行此命令
gulp.task('deRun', gulpSequence(['deReplace'],'depackage'));
//测试环境打包任务执行
gulp.task('tsRun', gulpSequence(['tsReplace'], 'tspackage'));
//正式环境打包任务执行
gulp.task('offRun', gulpSequence(['offReplace','offAppendJs'],'offpackage'));

