'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var puppeteer = require('puppeteer');
var fs = require('fs');
var devices = require('puppeteer/DeviceDescriptors');
var iPhone = devices['iPhone 6'];
// 创建 application/x-www-form-urlencoded 解析
var urlencodedParser = bodyParser.urlencoded({ extended: true });
require('babel-polyfill');
//静态资源
app.use('/static', express.static('static'));
//网页截屏
function PageInit(obj, res) {
    var _this = this;

    var options = JSON.parse(obj.pageData);
    //参数拼接
    var str = '?';
    var clip = null;
    for (var key in options) {
        if (key !== 'pagePath') {
            str += key + '=' + options[key] + '&';
        }
    }
    //需要固定截屏大小
    if (obj.clip) {
        clip = JSON.parse(obj.clip);
    }
    puppeteer.launch().then(function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2(browser) {
            //截屏fn
            var screenShotImg = function () {
                var _ref2 = _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                    var result, _result;

                    return _regenerator2.default.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                                case 0:
                                    if (!clip) {
                                        _context.next = 5;
                                        break;
                                    }

                                    _context.next = 3;
                                    return page.screenshot({ path: __dirname + '/static/' + obj.saveDir + '/' + options.actId + '_' + options.type + '.jpeg', quality: ~~obj.quality || 50, clip: clip });

                                case 3:
                                    _context.next = 7;
                                    break;

                                case 5:
                                    _context.next = 7;
                                    return page.screenshot({ path: __dirname + '/static/' + obj.saveDir + '/' + options.actId + '_' + options.type + '.jpeg', fullPage: true, quality: ~~obj.quality || 50 });

                                case 7:

                                    // other actions...
                                    console.log(options.actId + '_' + options.type + ' \u5408\u6210\u5B8C\u6210\uFF01');
                                    //obj.reuse为true需要复用，不用再次截屏
                                    if (JSON.parse(obj.reuse)) {
                                        result = JSON.stringify({ src: options.actId + '_' + options.type + '.jpeg', isExists: false });

                                        res.end(result);
                                    } else {
                                        _result = JSON.stringify({ src: options.actId + '_' + options.type + '.jpeg' });

                                        res.end(_result);
                                    }
                                    _context.next = 11;
                                    return browser.close();

                                case 11:
                                case 'end':
                                    return _context.stop();
                            }
                        }
                    }, _callee, this);
                }));

                return function screenShotImg() {
                    return _ref2.apply(this, arguments);
                };
            }();
            //执行页面截屏


            var page;
            return _regenerator2.default.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.next = 2;
                            return browser.newPage();

                        case 2:
                            page = _context2.sent;
                            _context2.next = 5;
                            return page.emulate(iPhone);

                        case 5:
                            _context2.next = 7;
                            return page.goto('' + obj.imgPreviewUrl + str);

                        case 7:
                            setTimeout(function () {
                                screenShotImg();
                            }, ~~obj.time || 1000);

                        case 8:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, _this);
        }));

        return function (_x) {
            return _ref.apply(this, arguments);
        };
    }());
}
//图片文件是否存在
function isPosterFile(obj, res) {

    var options = JSON.parse(obj.pageData);
    //文件夹是否存在
    var dir = fs.existsSync('' + obj.saveDir);
    //dir = true文件夹存在
    if (dir) {
        console.log(obj.saveDir + '\u6587\u4EF6\u5939\u5DF2\u5B58\u5728');
        fs.exists(__dirname + '/static/' + obj.saveDir + '/' + options.actId + '_' + options.type + '.jpeg', function (exists) {
            //已存在图片
            if (exists) {
                console.log("文件存在");
                var result = JSON.stringify({ src: options.actId + '_' + options.type + '.jpeg', isExists: true });
                res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
                res.end(result);
            }
            //不存在图片
            if (!exists) {
                console.log("文件不存在");
                if (options.actId) {
                    PageInit(obj, res);
                } else {
                    res.writeHead(400, { 'Content-Type': 'text/html;charset=utf-8' });
                    var _result2 = JSON.stringify({ errorMsg: '合成失败' });
                    res.end(_result2);
                }
            }
        });
    } else {
        fs.mkdir(__dirname + '/static/' + obj.saveDir, function () {
            console.log(obj.saveDir + '\u6587\u4EF6\u5939\u521B\u5EFA\u6210\u529F');
            fs.exists(__dirname + '/static/' + obj.saveDir + '/' + options.actId + '_' + options.type + '.jpeg', function (exists) {
                //已存在图片
                if (exists) {
                    console.log("文件存在");
                    var result = JSON.stringify({ src: options.actId + '_' + options.type + '.jpeg', isExists: true });
                    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
                    res.end(result);
                }
                //不存在图片
                if (!exists) {
                    console.log("文件不存在");
                    if (options.actId) {
                        PageInit(obj, res);
                    } else {
                        res.writeHead(400, { 'Content-Type': 'text/html;charset=utf-8' });
                        var _result3 = JSON.stringify({ errorMsg: '合成失败' });
                        res.end(_result3);
                    }
                }
            });
        });
    }
}
//图片截屏
app.post('/posterCompound', urlencodedParser, function (req, res, next) {
    var reuse = JSON.parse(req.body.reuse);
    console.log(reuse);
    if (reuse) {
        isPosterFile(req.body, res);
    } else {
        //文件夹是否存在
        var dir = fs.existsSync(__dirname + '/static/' + req.body.saveDir);
        console.log('dir ' + dir);
        if (dir) {
            //不需要复用直接截屏
            PageInit(req.body, res);
        } else {
            fs.mkdir(__dirname + '/static/' + req.body.saveDir, function () {
                console.log(req.body.saveDir + '\u6587\u4EF6\u5939\u521B\u5EFA\u6210\u529F');
                PageInit(req.body, res);
            });
        }
    }
});
//赞报海报删除
app.get('/zbDelete', function (req, res, next) {
    isZbFile(req.query, res, './zanbao', 'delete');
});
//服务开启
app.listen(process.env.PORT || 3014, function () {
    console.log('express Ready port ' + (process.env.PORT || 3014));
});