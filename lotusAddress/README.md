# lotus-address

> vue 省市区联动picker选择器组件

## how to use 

### npm install lotus-address --save or yarn add lotus-address
### 插件的方式引入使用
1.main.js
```$xslt
    import lotusAddress from 'lotus-address'
    import 'lotus-address/dist/lotus-address.min'
    Vue.use(lotusAddress)
```
2.页面使用
```$xslt
     <lotus-address @chosedVal="chosedVal" :lotusAddressData="lotusAddressData" :openFlag="openFlag"></lotus-address>
```

3.参数说明 <br/>
(1)参数定义:<br/>
```$xslt
    data () {
         return {
            provinceName:'',
                            cityName:'',
                            townName:'',
                            openFlag:{
                                isShow:false
                            },
                            lotusAddressData:{
                                provinceName:'',
                                cityName:'',
                                townName:''
                            }
         }
    }
```

(2)items的长度为显示多少栏,values是每一栏的数值类型为array,index为每一栏显示的初始值类型为number,可传可不传,type为每一栏显示的类型命名这个参数是必须的，类型为string,maxVal为最大的滑动值，类型为number，此参数可选<br/>
(3)change为回调函数接收一个参数result，result这个参数里包含了在picker组件里选择的值还有索引值{index:0,val:1,type:'year',maxVal:6},cancel为取消按钮回调函数,返回picker组件flag标识false<br/>
(4)title为picker组件里显示的标题，可传类型为string，不传则默认是请选择</br/>
(5)flag为设置picker组件显示or隐藏<br/>
4.演示 <br/>
![lotusPicker](https://raw.githubusercontent.com/winglau14/lotusPackage/master/lotusPicker/1.gif)


