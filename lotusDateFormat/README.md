# dateFormat
### 参数描述
var option ={
        time: '2017-08-31 16:31:02',
        type: ['/', '/'],
        formatYear: false,
        formatDate: true
     }<br/>
time为需要转换的时间，格式可以是时间戳or时间字符串<br/>
type为需要转换的格式类型，需是array，如需显示2017年08月01日格式，则传['年','月','日']，如需显示2017-08-01格式，则传['-','-','-']，如需显示2017/08/01格式，则传['/','/']<br/>
formatYear为是否显示年月日，需是bool，true显示，false不显示<br/>
formatDate为是否显示时分秒，需是bool，true显示，false不显示<br/>
formatYear && formatYear 同时为true，则显示年月日 时分秒默认这两个值可以不传

### 安装步骤
step npm i lotusdateformat --save or yarn add lotusdateformat 
### 如何使用
var forMatDate = require("lotusdateformat"); <br />
1.显示时分秒 如：11:29:10<br />
forMatDate({
        formatDate: true
    });<br />
2.显示年月日 如：2017-08-31<br />
    forMatDate({
        time: '2017-08-31 16:31:02',
        formatYear: true
    });<br />
3.显示年月日 如：2017年08月31日<br />
    forMatDate({
        time: '2017-08-31 16:31:02',
        type: ['年', '月', '日'],
        formatYear: true
    });<br />
4.显示年月日时分秒 如：2017/08/31 16:31:02<br />
    forMatDate({
        time: '2017-08-31 16:31:02',
        type: ['/', '/']
    });<br />
5.显示年月日时分秒 如：2017-09-01 11:29:10<br />
    forMatDate();<br />
6.显示年月日时分秒 如：2017年09月01日 16:31:02<br />
    forMatDate({
        time: '2017-9-1 16:31:02',
        type: ['年', '月', '日']
    });


