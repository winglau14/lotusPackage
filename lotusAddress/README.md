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
    },
    methods: {
                //打开picker
                openPicker() {
                    this.openFlag.isShow = true;
                },
                //获取最后选择的省市区的值
                chosedVal(result) {
                    if (!this.openFlag.isShow) {
                        this.provinceName = result.province;
                        this.cityName = result.city;
                        this.townName = result.town;
                        this.lotusAddressData.provinceName = result.province;
                        this.lotusAddressData.cityName = result.city;
                        this.lotusAddressData.townName = result.town;
                    }
                }
            },
```

(2)lotusAddressData,provinceName:省,cityName:市,townName:区,参数类型为字符串<br/>
(3)chosedVal，result这个参数里包含了在picker组件里选择的值还有索引值{index:0,val:'省',type:'province'}<br/>
(4)openFlag为设置lotusAddress组件显示or隐藏<br/>
(5)使用有疑问可以参考src/App.vue文件,有清晰的demo操作与使用。<br/>
4.演示 <br/>
![lotusAddress](https://raw.githubusercontent.com/winglau14/lotusPackage/master/lotusAddress/1.gif)


