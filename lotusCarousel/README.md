# lotus-carousel

> vue 滑动轮播、无缝轮播组件

## how to use 

### npm install lotus-carousel --save or yarn add lotus-carousel
### 插件的方式引入使用
1.main.js
```$xslt
    import lotusCarousel from 'lotus-carousel'
    import 'lotus-carousel/dist/lotus-carousel.min'
    Vue.use(lotusCarousel)
```
2.页面使用
```$xslt
    <lotus-carousel :imageList="imageList" :_isAuto="false" :_autoTime="2000"></lotus-carousel>
```

3.参数说明 <br/>
(1)imageList:图片列表类型为数组;此参数必须 <br/>
(2)参数定义:
```$xslt
    data () {
         return {
            imageList:[{pic:'https://img1.360buyimg.com/da/jfs/t18547/198/647803212/149303/924ff4da/5a9cf105N2f3a0824.jpg',url:'/index'},{pic:'https://img14.360buyimg.com/da/s750x366_jfs/t18937/201/636859513/203851/71ed12bb/5a9d419fNc65b2edd.jpg',url:'/index2'}]
         }
    }
```

(3)_isAuto，可选，不传也可以，默认是_isAuto=true开启自动轮播，_isAuto= false不开启自动轮播;，_autoTime，可选，不传默认轮播间隔3000，自定义则_autoTime=2000 <br/>
4.演示 <br/>
![lotusCarousel](https://raw.githubusercontent.com/winglau14/lotusPackage/master/lotusCarousel/1.gif)


