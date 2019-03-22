const gulp = require('gulp'),
    gulpReplace = require('gulp-replace'),
    tiny = require('gulp-tinypng-nokey'),
    clean = require('gulp-clean'),
    Uglify = require('gulp-uglify'),
    zip = require('gulp-zip'),
    gutil = require('gulp-util'),
    htmlmin = require('gulp-htmlmin'),
    autoprefixer = require('gulp-autoprefixer'),
    //spriter = require('./gulpLib/gulp-css-spriter'),
    minifyCSS = require('gulp-minify-css'),
    gulpSequence = require('gulp-sequence');
const tempL = __dirname.split('\\');
const dirName = tempL[tempL.length-1];
//打包开始
gulp.task('tsStart', function () {
    console.log('--------测试环境打包start！----------');
});
gulp.task('offStart', function () {
    console.log('--------正式环境打包start！----------');
});
//样式自动补全
gulp.task('cssAuto', function () {
    const timestamp = +new Date();
    return gulp.src(['lib/**/*.css'])
        .pipe(autoprefixer({
            browsers: ['iOS >= 7', 'Android >= 4.1','last 2 versions'],
            cascade: false
        }))
        /*.pipe(spriter({
            // 生成的spriter的位置
            'spriteSheet': './lib/static/images/sprite'+timestamp+'.png',
            // 生成样式文件图片引用地址的路径
            // 如下将生产：backgound:url(../images/sprite20324232.png)
            'pathToSpriteSheetFromCSS': '/static/images/sprite'+timestamp+'.png'
        }))*/
        .pipe(minifyCSS())//样式压缩
        .pipe(gulp.dest('lib/'))
});
//html压缩
gulp.task('tsHtmlmin', function () {
    var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
    return gulp.src(['lib/**/*.html','lib/index.html'])
        .pipe(htmlmin(options))
        .on('error', function(err) {
            gutil.log(gutil.colors.red('[Error]'), err.toString());
        })
        .pipe(gulp.dest('lib/'));
});
gulp.task('offHtmlmin', function () {
    var options = {
        removeComments: true,//清除HTML注释
        collapseWhitespace: true,//压缩HTML
        collapseBooleanAttributes: true,//省略布尔属性的值 <input checked="true"/> ==> <input />
        removeEmptyAttributes: true,//删除所有空格作属性值 <input id="" /> ==> <input />
        removeScriptTypeAttributes: true,//删除<script>的type="text/javascript"
        removeStyleLinkTypeAttributes: true,//删除<style>和<link>的type="text/css"
        minifyJS: true,//压缩页面JS
        minifyCSS: true//压缩页面CSS
    };
    return gulp.src(['lib/**/*.html'])
        .pipe(htmlmin(options))
        .on('error', function(err) {
            gutil.log(gutil.colors.red('[Error]'), err.toString());
        })
        .pipe(gulp.dest('lib/'));
});
//复制文件
gulp.task('copyFile', function () {
    return gulp.src([`${__dirname}/dist/**`])
        .pipe(gulp.dest('lib/'))
});
//图片压缩
gulp.task('tinyPng', ['copyFile'], function () {
    return gulp.src(['src/static/images/*.{jpg,png,jpeg}'])
        .pipe(tiny())
        .pipe(gulp.dest('src/static1/images'))
});
//测试环境apiUrl替换
gulp.task('tsReplaceDom', function () {
    return gulp.src(['lib/index.html','lib/**/index.html'])
        .pipe(gulpReplace(/<div class="lotus-loading-wrap">.*<\/body>/, "</body>"))
        .pipe(gulp.dest('lib/'));
});
//pages文件夹js css文件加时间戳
gulp.task('filesAddVersion1', function () {
    var time = new Date().getTime();
    return gulp.src(['lib/pages/**/*.html'])
        .pipe(gulpReplace(/(\.css">)/g, '.css?v='+time+'">'))
        .pipe(gulpReplace(/(\.js">)/g, '.js?v='+time+'">'))
        .pipe(gulp.dest('lib/pages/'));
});
//index.html js css文件加时间戳
gulp.task('filesAddVersion2', function () {
    var time = new Date().getTime();
    return gulp.src(['lib/index.html'])
        .pipe(gulpReplace(/(\.css">)/g, '.css?v='+time+'">'))
        .pipe(gulpReplace(/(\.js">)/g, '.js?v='+time+'">'))
        .pipe(gulp.dest('lib/'));
});
//正式环境apiUrl替换
gulp.task('offApiUrlReplace', function () {
    return gulp.src(['lib/static/js/vendors.js'])
        .pipe(gulpReplace(/(https?:\/\/devipapi.*?com)/g, "https://vipapi.xiaoyaozhan.com"))
        .pipe(gulpReplace(/(https?:\/\/demall.*?com)/g, "https://www.xiaoyaozhan.com"))
        .pipe(gulpReplace(/(https?:\/\/dexcximg.*?com)/g, "https://xcximg.xiaoyaozhan.com"))
        .pipe(gulpReplace(/(https?:\/\/devip.*?com)/g, "https://po.xiaoyaozhan.com"))
        .pipe(gulpReplace(/(https?:\/\/dedingdan.*?com)/g, "https://dingdan.xiaoyaozhan.com"))
        .pipe(gulpReplace(/(https?:\/\/decart.*?com)/g, "https://cart.xiaoyaozhan.com"))
        .pipe(gulp.dest('lib/static/js/'));
});
//统计模块的添加
var jsStr = `<script>
  	var _mtac = {"senseQuery":1};
  	(function() {
  		var mta = document.createElement("script");
  		mta.src = "https://pingjs.qq.com/h5/stats.js?v2.0.4";
  		mta.setAttribute("name", "MTAH5");
  		mta.setAttribute("sid", "500628964");
  		mta.setAttribute("cid", "500628965");
  		var s = document.getElementsByTagName("script")[0];
  		s.parentNode.insertBefore(mta, s);
  	})();
</script></body>`;
gulp.task('offAppendJs', function () {
    return gulp.src(['lib/index.html'])
        .pipe(gulpReplace(/<\/body>/,jsStr))
        .pipe(gulp.dest('lib/'));
});
//删除多余css文件
gulp.task('cleanCss', function () {
    return gulp.src(['lib/**/*.less','lib/static/style/config.css','lib/static/style/config.less'])
        .pipe(clean());
});
//删除临时文件夹
gulp.task('tsCleanFiles', ['tsReleasePackage'], function () {
    return gulp.src(['lib'])
        .pipe(clean());
});
//删除临时文件夹
gulp.task('offCleanFiles', ['offReleasePackage'], function () {
    return gulp.src(['lib'])
        .pipe(clean());
});
//js压缩
gulp.task('jsMin', function () {
    return gulp.src(['lib/**/*.js'])
        .pipe(Uglify())
        .on('error', function(err) {
            gutil.log(gutil.colors.red('[Error]'), err.toString());
        })
        .pipe(gulp.dest('lib/'))
});
//测试环境打包文件zip
gulp.task('tsReleasePackage', function () {
        return gulp.src(['lib/**'])
            .pipe(zip(`${dirName}-tsRelease.zip`))
            .pipe(gulp.dest('releaseZip'));
    }
);
//正式环境打包文件zip
gulp.task('offReleasePackage', function () {
        return gulp.src(['lib/**'])
            .pipe(zip(`${dirName}-offRelease.zip`))
            .pipe(gulp.dest('releaseZip'));
    }
);
//打包结束
gulp.task('end', function () {
    console.log('--------打包end！----------');
});
//测试环境打包任务执行,PS:先运行 wepy build --watch 再执行此命令 gulp tsRun
gulp.task('tsRun', gulpSequence('tsStart', [
    'copyFile',
    /*'tinyPng'*/
    ], 'cssAuto', 'tsHtmlmin', 'tsReplaceDom','cleanCss', 'jsMin', ['tsReleasePackage', 'tsCleanFiles'], 'end')
);
//正式环境打包任务执行,PS:先运行 wepy build --watch 再执行此命令 gulp offRun
gulp.task('offRun', gulpSequence('offStart', [
        'copyFile'
        /*, 'tinyPng'*/
    ], 'cssAuto', 'offHtmlmin', 'offApiUrlReplace', 'offAppendJs','filesAddVersion1', 'filesAddVersion2','cleanCss', 'jsMin', ['offReleasePackage', 'offCleanFiles'], 'end')
);





