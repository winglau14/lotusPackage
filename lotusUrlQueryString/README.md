# lotus-url-query-string

### 安装步骤
step npm i lotus-url-query-string --save or yarn add lotus-url-query-string
### 如何使用
例如：url: http://baidu.com?a=1&b=2&c=666<br/>
const lotusUrlQueryString = require("lotus-url-query-string"); <br />
const urlQueryString = lotusUrlQueryString();<br/>
urlQueryString.a = 1;<br/>
urlQueryString.b = 2;<br/>
urlQueryString.c = 666;


