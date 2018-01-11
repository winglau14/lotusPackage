//获取url参数值(query string)返回一个obj
const lotusUrlQueryString = ()=>{
    const href = location.href;
    if(href.includes('?')){
        let a = href.split('?');
        const b = a[1];
        //多个参数
        if(b.includes('&')){
            const c = b.split('&');
            let obj = {};
            c.map((item)=>{
                const d = item.split('=');
                obj[d[0]] = d[1];
            });
            return obj;
        }else{
            //一个参数
            const c = b.split('=');
            return c[1];
        }
    }
};
module.exports = lotusUrlQueryString;