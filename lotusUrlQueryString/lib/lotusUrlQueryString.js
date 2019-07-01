//获取url参数值(query string)返回一个obj
function lotusUrlQueryString (urlStr){
    var href = urlStr||location.href;
    var obj = {};
    if(href.indexOf('?') > -1){
        var a = href.split('?');
        var tArr = [];

        //参数数据整理
        a.map(function(item){
            if(item.indexOf('&')>-1){
                var b =  item.split('&');
                tArr = tArr.concat(b);
            }else if(item.indexOf('=')>-1){
                var c = item.split('=');
                obj[c[0]] = c[1];
            }
        });
        //遍历新组装新参数数组
        if(tArr.length){
            tArr.map(function(item) {
                var d = item.split('=');
                obj[d[0]] = d[1];
            });
        }
        return obj;
    }
}
module.exports = lotusUrlQueryString;
