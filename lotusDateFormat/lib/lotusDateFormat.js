 /***
     var option ={
        time: '2017-08-31 16:31:02',
        type: ['/', '/'],
        formatYear: false,
        formatDate: true
     }
     time为需要转换的时间，格式可以是时间戳or时间字符串
     type为需要转换的格式类型，需是array，如需显示2017年08月01日格式，则传['年','月','日']，如需显示2017-08-01格式，则传['-','-','-']，如需显示2017/08/01格式，则传['/','/']
     formatYear为是否显示年月日，需是bool，true显示，false不显示
     formatDate为是否显示时分秒，需是bool，true显示，false不显示
     formatYear && formatYear 同时为true，则显示年月日 时分秒
     默认这两个值可以不传
     ***/
    var lotusDateFormat = function (option) {
        try {
            //修复ios 2017-8-31获取时间戳为NaN
            if (option) {
                if(option.time instanceof String){
                    if (option.time && option.time.indexOf('-')) {
                        option.time = option.time.replace(/-/g, '/');
                    }
                }
                var curDate = option.time ? new Date(option.time).toLocaleString() : new Date().toLocaleString();
            } else {
                var curDate = new Date().toLocaleString();
            }
            var reg = /(\d{1,}\/\d{1,}\/\d{1,}).(上午|下午)(\d{1,}):(\d{1,}):(\d{1,})/;
            var timeArray = curDate.match(reg);
            var yearStr = timeArray[1];//匹配到年月日
            var formatYear = '';//存放年月日字符串
            var formatDate = '';//存放时分秒字符串
            var yearArr = [];

            //年月日
            if (yearStr.indexOf('/') > 0) {
                yearArr = yearStr.split('/');
                yearArr[1] = autoAddZero(yearArr[1]);
                yearArr[2] = autoAddZero(yearArr[2]);
                //年月日格式显示
                if (option) {
                    if (option.type instanceof Array) {
                        if (option.type.length === 3) {
                            formatYear = yearArr[0] + option.type[0] + yearArr[1] + option.type[1] + yearArr[2] + option.type[2];
                        } else {
                            formatYear = yearArr[0] + option.type[0] + yearArr[1] + option.type[1] + yearArr[2];
                        }
                    } else {
                        formatYear = yearArr[0] + '-' + yearArr[1] + '-' + yearArr[2];
                    }
                } else {
                    formatYear = yearArr[0] + '-' + yearArr[1] + '-' + yearArr[2];
                }
            }

            //时分秒
            if (timeArray[2] === '上午') {
                //时
                timeArray[3] = autoAddZero(timeArray[3]);
                //分
                timeArray[4] = autoAddZero(timeArray[4]);
                //秒
                timeArray[5] = autoAddZero(timeArray[5]);
                formatDate = timeArray[3] + ':' + timeArray[4] + ':' + timeArray[5];
            } else if (timeArray[2] === '下午' && timeArray[3] < 10) {
                //小时为下午的时候并小于10自动+12
                timeArray[3] = 12 + parseInt(timeArray[3]);
                formatDate = timeArray[3] + ':' + timeArray[4] + ':' + timeArray[5];
            }
            //自动补0
            function autoAddZero(obj) {
                return parseInt(obj) < 10 ? obj = '0' + parseInt(obj) : obj;
            }

            //检测是否有传option
            if (option) {
                //返回年月日 时分秒 yyyy-MM-dd hh:mm:ss
                if ((option.formatYear && option.formatDate) || (!option.formatYear && !option.formatDate)) {
                    //document.write(formatYear + ' ' + formatDate + '<br/>');
                    return formatYear + ' ' + formatDate;
                }
                //返回年月日 yyyy-MM-dd
                if (option.formatYear && !option.formatDate) {
                    //document.write(formatYear + '<br/>');
                    return formatYear;
                }
                //返回时分秒 hh:mm:ss
                if (option.formatDate && !option.formatYear) {
                    //document.write(formatDate + '<br/>');
                    return formatDate;
                }
            } else {
                //返回年月日 时分秒 yyyy-MM-dd hh:mm:ss
                //document.write(formatYear + ' ' + formatDate + '<br/>');
                return formatYear + ' ' + formatDate;
            }
        } catch (error) {
            console.log(error);
        }
    };

    module.exports = lotusDateFormat;