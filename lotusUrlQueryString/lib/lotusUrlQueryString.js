//获取url参数值(query string)返回一个obj
function lotusUrlQueryString (){
    var href = location.href;
    if(href.indexOf('?') > -1){
        var a = href.split('?');
        var b = a[1];
        //多个参数
        if(b.indexOf('&') > -1){
            var c = b.split('&');
            var obj = {};
            c.map(function(item) {
                var d = item.split('=');
                obj[d[0]] = d[1];
            });
            return obj;
        }else{
            //一个参数
            var obj = {};
            var c = b.split('=');
            obj[c[0]] = c[1];
            return obj;
        }
    }
};
module.exports = lotusUrlQueryString;