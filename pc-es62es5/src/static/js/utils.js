import "layui-layer";
import CryptoJS from "./lib/CryptoJSLib";
import "./lib/cookie";
//工具类的方法集合
let lotusUtils = {
    //获取url参数
    urlQuery: function () {
        let href = location.href;
        if (href.indexOf('?') > -1) {
            let a = href.split('?');
            let b = a[1];
            //多个参数
            if (b.indexOf('&') > -1) {
                let c = b.split('&');
                let obj = {};
                c.map(function (item) {
                    let d = item.split('=');
                    obj[d[0]] = d[1];
                });
                return obj;
            } else {
                //一个参数
                let obj = {};
                let c = b.split('=');
                obj[c[0]] = c[1];
                return obj;
            }
        }
    },
    //生成随机验证码
    createAuthCode: function (codeLength) {
        let codeArr = [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            "a",
            "b",
            "c",
            "d",
            "e",
            "f",
            "g",
            "h",
            "i",
            "j",
            "k",
            "l",
            "m",
            "n",
            "o",
            "p",
            "q",
            "r",
            "s",
            "t",
            "x",
            "y",
            "z",
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "I",
            "J",
            "K",
            "L",
            "M",
            "N",
            "O",
            "P",
            "Q",
            "R",
            "S",
            "T",
            "U",
            "V",
            "W",
            "X",
            "Y",
            "Z"
        ];
        let codeStr = '';
        let colorArr = [
            '#f44336',
            '#009688',
            '#cddc39',
            '#03a9f4',
            '#9c27b0',
            '#5e4444',
            '#9ebf9f',
            '#ffc8c4',
            '#2b4754',
            '#b4ced9',
            '#835f53',
            '#aa677e'
        ];
        let randomColor = '';
        let codeLen = codeLength || 4;
        //生成随机验证码默认为4位
        for (let i = 0; i < codeLen; i++) {
            let codeIndex = Math.floor(Math.random() * codeArr.length);
            codeStr += codeArr[codeIndex];
        }
        //生成随机验证码的字体颜色
        for (let j = 0; j < colorArr.length; j++) {
            let colorIndex = Math.floor(Math.random() * colorArr.length);
            randomColor = colorArr[colorIndex];
        }
        //返回生成的随机验证码与字体颜色
        return {
            code: codeStr,
            color: randomColor
        }
    },
    //函数节流 method为回调执行的方法，wait为执行的时间，_this为了让函数能获取到this的作用域
    throttle: function (method, wait, _this) {
        clearTimeout(method.tId);
        method.tId = setTimeout(function () {
            return method.call(_this);
        }, wait);
    },
    versionUrl: 'https://config.123yyf.com/api/',
    xyzApiUrl: 'http://devipapi.xiaoyaozhan.com/api/',
    xyz: 'http://devipapi.xiaoyaozhan.com/',
    xyzUpLoadPic: 'http://deconfig.123yyf.com/api/',
    Auth: 'https://oauthserver.123yyf.com/Oauth2/Token',
    xcxImgUrl: 'https://dexcximg.123yyf.com/',
    fastUrl: 'https://decop.123yyf.com',//快捷方式下载路径
    mallUrl: 'http://demall.xiaoyaozhan.com',//商城url
    orderUrl: 'http://dedingdan.xiaoyaozhan.com',//订单url
    cartUrl: 'http://decart.xiaoyaozhan.com',//采购车url
    xyzV1: 'http://devip.xiaoyaozhan.com',
    rejectIE9: function () {
        //判断是否为IE浏览器
        var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
        var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
        if (userAgent.split(';').length >= 2) {
            var version = userAgent.split(';')[1].replace(/MSIE/i, '');
            //ie9以下浏览器
            if (parseInt(version) <= 9 && isIE) {
                location.href = lotusUtils.mallUrl + '/pages/rejectIE.html';
            }
        }
        //console.log(userAgent.split(';')[1]);
        //console.log(isIE);
    },
    //加密
    getAesString: function (data) {
        let eKey = "sa#65$f4";
        let ivs = "gzsyfdgs";
        let key = CryptoJS.enc.Utf8.parse(eKey);
        let iv = CryptoJS.enc.Utf8.parse(ivs);
        let encrypted = CryptoJS.DES.encrypt(data, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        return encrypted.toString(); //返回的是base64格式的密文
    },
    //解密
    getDAesString: function (encrypted) {
        //解密
        let eKey = "sa#65$f4";
        let ivs = "gzsyfdgs";
        let key = CryptoJS.enc.Utf8.parse(eKey);
        let iv = CryptoJS.enc.Utf8.parse(ivs);
        let decrypted = CryptoJS.DES.decrypt(encrypted, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        });
        return decrypted.toString(CryptoJS.enc.Utf8);
    },
    //图片合成进度条函数
    progressFn: function (requestTime) {
        let pModel = document.querySelector('.lotus-progress-model');
        let pl = document.querySelector('.lotus-progress-left');
        let pr = document.querySelector('.lotus-progress-right');
        let initT = 1;
        let t = 0;
        let time = null;
        pl.style.width = 0;
        pr.innerText = '';

        function setProgress() {
            let r = Math.ceil(Math.random(1, 20) * 10) + 25;
            initT += r;
            //超过十秒进度条宽度为100px 显示进度100%
            if (t >= requestTime) {
                pl.style.width = '100px';
                pr.innerText = '100%';
            } else {
                if (initT >= 100) {
                    initT = 100;
                }
                pl.style.width = initT + 'px';
                pr.innerText = initT + '%';
            }
        }

        //开启定时器
        time = setInterval(function () {
            //超过10s关闭定时器
            if (t >= requestTime) {
                clearInterval(time);
                t = 0;
                pModel.style.display = 'none';
                pl.style.width = 0;
                pr.innerText = '';
            }
            //统计定时器执行了多少s
            t += 1;
            //设置进度条宽度与显示百分比
            setProgress();
        }, 1000);
    },
    //数组去重
    resetArray: function (arr, type, isShowMsg, msg) {
        /**
         * arr类型array需要处理的目标数组
         * type判断需要处理的数组是否是对象数组还是普通的数组
         * isShowMsg是否需要显示统计重复数据的数量
         * msg显示重复数据有多少条
         * **/
        let repeatNum = 0;//统计重复数量
        let tempObj = {};
        let result = [];

        for (let i = 0; i <= arr.length - 1; i++) {
            let key = type ? (typeof arr[i][type]) + arr[i][type] : (typeof arr[i]) + arr[i];
            if (!tempObj[key]) {
                tempObj[key] = true;
                result.push(arr[i]);
            } else {
                repeatNum += 1;
            }
        }
        //是否需要显示重复数量
        if (isShowMsg && repeatNum > 0) {
            let warningText = msg.replace(/有/, '有' + repeatNum);
            if (layer) {
                layer.msg(warningText);
            } else {
                alert(warningText);
            }
        }
        return result;
    },
    //数组去重
    resetArray2: function (arr, type, isShowMsg, msg) {
        /**
         * arr类型array需要处理的目标数组
         * type判断需要处理的数组是否是对象数组还是普通的数组
         * isShowMsg是否需要显示统计重复数据的数量
         * msg显示重复数据有多少条
         * **/
        let repeatNum = 0;//统计重复数量
        let tempObj = {};
        let result = [];
        let resultData = {
            result: [],
            repeatNum: 0
        };
        for (let i = 0; i <= arr.length - 1; i++) {
            let key = type ? (typeof arr[i][type]) + arr[i][type] : (typeof arr[i]) + arr[i];
            if (!tempObj[key]) {
                tempObj[key] = true;
                result.push(arr[i]);
            } else {
                repeatNum += 1;
            }
        }
        //是否需要显示重复数量
        if (isShowMsg && repeatNum > 0) {
            let warningText = msg.replace(/有/, '有' + repeatNum);
            if (layer) {
                layer.msg(warningText);
            } else {
                alert(warningText);
            }
        }
        resultData.result = result;
        resultData.repeatNum = repeatNum;
        return resultData;
    },
    //检查字符串长度
    checkStrLen: function (val) {
        let len = 0;
        for (let i = 0; i < val.length; i++) {
            //全角（中英文、标点都占用两个字符），半角（中文占两个字符，英文占一个字符，中文状态下标点占两字符）
            if (val[i].match(/[^\x00-\xff]/ig) !== null) {
                len += 2;
            } else {
                len += 1;
            }
        }
        return len;
    },
    //打开新窗口
    openNewWindow: function (url, type) {
        window.open(url, type || '_blank');
    },
    //2位小数点字符串裁剪
    subsStringFn: function (str, len) {
        let tarStr = str.toString();
        if (tarStr.indexOf('.') > -1) {
            let arr = tarStr.split('.');
            return arr[0] + '.' + arr[1].substr(0, len || 2);
        }
    },
    //base64转码
    base64: {
        // private property
        _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        // public method for encoding
        encode: function (input) {
            var output = "";
            var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
            var i = 0;

            input = lotusUtils.base64._utf8_encode(input);

            while (i < input.length) {

                chr1 = input.charCodeAt(i++);
                chr2 = input.charCodeAt(i++);
                chr3 = input.charCodeAt(i++);

                enc1 = chr1 >> 2;
                enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                enc4 = chr3 & 63;

                if (isNaN(chr2)) {
                    enc3 = enc4 = 64;
                } else if (isNaN(chr3)) {
                    enc4 = 64;
                }

                output = output + this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) + this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);

            }

            return output;
        },

        // public method for decoding
        decode: function (input) {
            var output = "";
            var chr1, chr2, chr3;
            var enc1, enc2, enc3, enc4;
            var i = 0;

            input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

            while (i < input.length) {

                enc1 = this._keyStr.indexOf(input.charAt(i++));
                enc2 = this._keyStr.indexOf(input.charAt(i++));
                enc3 = this._keyStr.indexOf(input.charAt(i++));
                enc4 = this._keyStr.indexOf(input.charAt(i++));

                chr1 = (enc1 << 2) | (enc2 >> 4);
                chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                chr3 = ((enc3 & 3) << 6) | enc4;

                output = output + String.fromCharCode(chr1);

                if (enc3 !== 64) {
                    output = output + String.fromCharCode(chr2);
                }
                if (enc4 !== 64) {
                    output = output + String.fromCharCode(chr3);
                }

            }

            output = lotusUtils.base64._utf8_decode(output);

            return output;

        },
        // private method for UTF-8 encoding
        _utf8_encode: function (string) {
            string = string.replace(/\r\n/g, "\n");
            var utftext = "";

            for (var n = 0; n < string.length; n++) {

                var c = string.charCodeAt(n);

                if (c < 128) {
                    utftext += String.fromCharCode(c);
                } else if ((c > 127) && (c < 2048)) {
                    utftext += String.fromCharCode((c >> 6) | 192);
                    utftext += String.fromCharCode((c & 63) | 128);
                } else {
                    utftext += String.fromCharCode((c >> 12) | 224);
                    utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                    utftext += String.fromCharCode((c & 63) | 128);
                }

            }

            return utftext;
        },
        // private method for UTF-8 decoding
        _utf8_decode: function (utftext) {
            var string = "";
            var i = 0;
            var c = c1 = c2 = 0;

            while (i < utftext.length) {

                c = utftext.charCodeAt(i);

                if (c < 128) {
                    string += String.fromCharCode(c);
                    i++;
                } else if ((c > 191) && (c < 224)) {
                    c2 = utftext.charCodeAt(i + 1);
                    string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                    i += 2;
                } else {
                    c2 = utftext.charCodeAt(i + 1);
                    c3 = utftext.charCodeAt(i + 2);
                    string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                    i += 3;
                }
            }
            return string;
        }
    },
    //数组中数据相同重新分组
    arrayGroup: function (arrObj, type) {
        let result = [];
        let flag = false;
        for (let i = 0; i <= arrObj.length - 1; i++) {
            let index = 0;
            for (let j = 0; j <= result.length - 1; j++) {
                if (result[j][0][type] === arrObj[i][type]) {
                    index = j;
                    flag = true;
                    break;
                }
            }
            if (flag) {
                result[index].push(arrObj[i]);
                flag = false;
            } else if (!flag) {
                let tempArr = [];
                tempArr.push(arrObj[i]);
                result.push(tempArr);
            }
        }
        return result;
    },
    //清除所有的缓存信息
    removeCache: function () {
        return new Promise(function (resolve, reject) {
            $.removeCookie('u_i_s', {
                expires: -1,
                path: "/"
            });
            $.removeCookie('u_i_s', {
                expires: -1,
                path: "/",
                domain: ".xiaoyaozhan.com", secure: false
            });
            //删除过期时间
            $.cookie('xyzExpiresTime', '', {expires: -1, domain: '', path: '/', secure: false});
            $.cookie('xyzExpiresTime', '', {expires: -1, domain: '.xiaoyaozhan.com', path: '/', secure: false});
            resolve(true);
        });
    },
    //数组排序随机
    arrRandom: function (arr) {
        //数组随机排序
        for (let i = 0; i <= arr.length - 1; i++) {
            let temp = parseInt(Math.random() * arr.length);
            let curItem = arr[temp];
            arr[temp] = arr[i];
            arr[i] = curItem;
        }
        return arr;
    },
    //暂无数据字符串拼接
    noDataStr: function (text) {
        return `<p class='font-center' style='margin-top: 30px;'><img width='120' height='120' src=${require('../images/no-data-icon.png')} alt=''></p>
                <p class='font-center' style='margin-bottom:30px;padding-top: 10px;color:#666;font-size: 14px;'>暂无<span class='red-text'>${text ? text : ""}</span>数据喔~</p>`;
    },
    //判断登录状态
    checkUserStatus: function () {
        /***
         * 用户登录状态过期时间设置
         1.首次设置用户登录过期时间为2h;
         2.过期时间<=1h，自动在原来的过期的时间基础上+30min;
         3.以上操作都存储在cookie上。

         ***/
        let expiresFlag = lotusUtils.getUserExpires();
        let userInfor = null;

        //判断设置的时间是否已过期
        let prevExpiresTime = parseInt($.cookie('xyzExpiresTime'));//设置的cookie时间
        let nowTime = new Date().getTime();//当前时间
        let residueTime = prevExpiresTime - nowTime;//剩余时间

        //未做任何操作过期时间2h
        if (residueTime <= 0) {
            //删除cookie val
            lotusUtils.removeCache().then(function () {
                //跳转到登录页面
                location.href = lotusUtils.mallUrl + '/pages/login.html';
            });
            return false;
        }

        //获取用户信息
        if ($.cookie('u_i_s')) {
            userInfor = JSON.parse($.cookie('u_i_s'));
            //无效用户数据调整登录页面
            if (!userInfor.WxDetailCode) {
                //删除cookie val
                lotusUtils.removeCache().then(function () {
                    //跳转到登录页面
                    location.href = lotusUtils.mallUrl + '/pages/login.html';
                });
            }
        }

        //时间未过期&&有用户信息直接返回
        if (expiresFlag && userInfor) {
            return new Promise(function (resolve, reject) {
                resolve(userInfor);
            });
        } else {
            //时间过期失效
            return new Promise(function (resolve, reject) {
                //删除cookie val
                lotusUtils.removeCache().then(function () {
                    //跳转到登录页面
                    location.href = lotusUtils.mallUrl + '/pages/login.html';
                });
                resolve(false);
            });
        }
    },
    //设置与获取用户登录过期的时间
    getUserExpires: function () {
        //未设置过期时间
        if (!$.cookie('xyzExpiresTime')) {
            //过期时间为2h
            let curTime = new Date().getTime() + (60 * 60 * 1000 * 2);
            console.log(curTime);
            //1529336765884
            $.cookie('xyzExpiresTime', curTime, {
                expires: curTime,
                path: '/',
                domain: '',
                secure: false
            });
            $.cookie('xyzExpiresTime', curTime, {
                expires: curTime,
                path: '/',
                domain: '.xiaoyaozhan.com',
                secure: false
            });
            return true;
        } else {
            //已设置
            let prevExpiresTime = parseInt($.cookie('xyzExpiresTime'));//设置的cookie时间
            let nowTime = new Date().getTime();//当前时间
            let residueTime = prevExpiresTime - nowTime;//剩余时间
            //未做任何操作过期时间2h
            if (prevExpiresTime && residueTime <= 0) {
                //删除cookie val
                lotusUtils.removeCache().then(function () {
                    console.log(document.cookie);
                    //跳转到登录页面
                    location.href = lotusUtils.mallUrl + '/pages/login.html';
                });
                return false;
            } else if (residueTime > 0 && residueTime / (60 * 1000) <= 60) {
                //判断过期时间是否小于等于60，是则增加30min过期时间
                let newTime = prevExpiresTime + (30 * 60 * 1000);
                $.cookie('xyzExpiresTime', newTime, {
                    expires: newTime,
                    path: '/',
                    domain: '',
                    secure: false
                });
                $.cookie('xyzExpiresTime', newTime, {
                    expires: newTime,
                    path: '/',
                    domain: '.xiaoyaozhan.com',
                    secure: false
                });
                return true;
            } else {
                //未过期
                return true;
            }
        }
    }
};
//ajax请求
let requestUrlArr = [];//用于存储当前页面请求的url链接数
let lotusAjax = {
    /****
     * 参数介绍
     * data.hideError默认不传显示接口报错信息，传了true是不显示接口报错信息
     * data.requestNum默认不传，传了显示有加载中的遮罩
     ****/
    get: function (url, data, dataType) {
        //支持跨域
        jQuery.support.cors = true;
        //return getToken().then(function (response) {
        return lotusAjax.getFetch(url, data, dataType/*, response*/);
        //});
    },
    getFetch: function (url, data, dataType, token) {
        //统计url请求数
        requestUrlArr.push(url);
        //显示加载中弹层
        if (!data.hideLoad && jQuery('.xyz-loading-wrap').length) {
            jQuery('.xyz-loading-wrap').show();
        }
        return new Promise(function (resolve, reject) {
            jQuery.ajax({
                type: 'GET',
                url: url,
                headers: {
                    //'Authorization': 'Bearer ' + token,
                },
                data: data,
                dataType: dataType || 'JSON',
                success: function (res) {
                    resolve(res);
                },
                complete: function () {
                    //清空对应的url请求
                    for (let i = 0; i <= requestUrlArr.length - 1; i++) {
                        //移除当前请求url
                        if (requestUrlArr[i] === url) {
                            requestUrlArr.splice(i, 1);
                        }
                    }
                    //加载完成关闭弹层
                    if (!requestUrlArr.length) {
                        jQuery('.xyz-loading-wrap').hide();
                        requestUrlArr = [];
                    }
                },
                error: function (errorData) {
                    //这个error函数调试时非常有用，如果解析不正确，将会弹出错误框
                    if (!data.hideError) {
                        if (errorData.responseText) {
                            const errorText = JSON.parse(errorData.responseText);
                            layer.msg(errorText.Error.Message);
                        }
                    }
                    jQuery('.xyz-loading-wrap').hide();
                }
            });
        });
    },
    post: function (url, data, dataType) {
        /****
         * 参数介绍
         * data.hideError默认不传显示接口报错信息，传了true是不显示接口报错信息
         * data.requestNum默认不传，传了显示有加载中的遮罩
         ****/
        //支持跨域
        jQuery.support.cors = true;
        //统计url请求数
        requestUrlArr.push(url);
        //显示加载中弹层
        if (!data.hideLoad && jQuery('.xyz-loading-wrap').length) {
            jQuery('.xyz-loading-wrap').show();
        }
        return lotusAjax.postFetch(url, data, dataType);

    },
    postFetch: function (url, data, dataType, token) {
        return new Promise(function (resolve, reject) {
            jQuery.ajax({
                type: 'POST',
                url: url,
                data: data,
                headers: {
                    //'Authorization': 'Bearer ' + token,
                },
                dataType: dataType || 'JSON',
                success: function (res) {
                    resolve(res);
                },
                complete: function () {
                    //清空对应的url请求
                    for (let i = 0; i <= requestUrlArr.length - 1; i++) {
                        //移除当前请求url
                        if (requestUrlArr[i] === url) {
                            requestUrlArr.splice(i, 1);
                        }
                    }
                    //加载完成关闭弹层
                    if (!requestUrlArr.length) {
                        jQuery('.xyz-loading-wrap').hide();
                        requestUrlArr = [];
                    }
                },
                error: function (errorData) {
                    jQuery('.xyz-loading-wrap').hide();
                    //这个error函数调试时非常有用，如果解析不正确，将会弹出错误框
                    if (!data.hideError) {
                        if (errorData.responseText) {
                            const errorText = JSON.parse(errorData.responseText);
                            layer.msg(errorText.Error.Message);
                        }
                    }
                }
            });
        });
    },
    //上传文件
    upLoadFile: function (url, data) {
        //支持跨域
        jQuery.support.cors = true;
        return lotusAjax.upLoadFileFetch(url, data);
    },
    upLoadFileFetch: function (url, data, token) {
        return new Promise(function (resolve, reject) {
            jQuery.ajax({
                type: 'POST',
                url: url,
                data: data,
                headers: {
                    //'Authorization': 'Bearer ' + token,
                },
                contentType: false,
                processData: false,
                success: function (res) {
                    resolve(res);
                },
                error: function (errorData) {
                    //这个error函数调试时非常有用，如果解析不正确，将会弹出错误框
                    if (!data.hideError) {
                        if (errorData.responseText) {
                            var errorText = JSON.parse(errorData.responseText);
                            layer.msg(errorText.Error.Message);
                        }
                    }
                }
            });
        });
    }
};
//版本低于ie9
lotusUtils.rejectIE9();
//登录页、注册页、找回密码页
if (location.pathname === "/pages/rejectIE.html" || location.pathname === "/pages/login.html" || location.pathname === "/pages/register.html" || location.pathname === "/pages/tRegister.html" || location.pathname === "/pages/findPwd.html") {
    //不校验跳转登录页
} else {
    //lotusUtils.checkUserStatus();
    //开发使用
    var userInfor = JSON.stringify({"HeadImgUrl":"https://wx.qlogo.cn/mmopen/vi_32/0ONNIlKChW6nXibuLtic6FRcxyzGohlFXD8bZJywJbgJYftV4ZBUOfdyujVUia6ppEQppW5doMwjVhmYhFJ8KdaVg/132","NickName":"WingLau","OpenId":"ofd4q5B75WK306P9IQzb-nrJ4rjM","UnionId":"obToJwOekujUe4Fc5QV5eMcXtf_c","WxAdminId":10142,"WxDetailCode":"24934451127517184","Code":2});
    //测试环境
    //var userInfor = JSON.stringify({"HeadImgUrl":"https://wx.qlogo.cn/mmopen/vi_32/KTZiab90XnxS2Ps47k4VZ9x9v0IkiaUMMNkWtx1UbuDVhu3yeNqVjlOzlUccEeZx36UrF9vA2NkiawnicMK1icvF6tA/132","NickName":"岁月静好","OpenId":"ofd4q5HORsiwoD0tj5w85vWdVgrs","UnionId":"obToJwElTJZBO6amnkMR9mGeiJI0","WxAdminId":10199,"WxDetailCode":"26914088334655488","Code":2});

    $.cookie('u_i_s', userInfor, {
       path: '/',
       domain: "",
       secure: false
   });
}
window.lotusUtils = lotusUtils;
export {
    lotusUtils,
    lotusAjax
}



