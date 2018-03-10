# lotus-carousel

> vue 滑动轮播、无缝轮播组件

## how to use 

### npm install lotus-carousel --save or yarn add lotus-carousel
### 插件的方式引入使用
1.main.js <br/>
import lotusCarousel from 'lotus-carousel' <br/>
import 'lotus-carousel/dist/lotus-carousel.min' <br/>
Vue.use(lotusCarousel) <br/>
2.页面使用 <br/>
'<lotus-carousel :imageList="imageList" :_isAuto="false" :_autoTime="2000"></lotus-carousel>'<br/>
3.参数说明 <br/>
(1)imageList:图片列表类型为数组;此参数必须 <br/>
(2)如：imageList:['1.jpg','2.jpg'] <br/>
(3)_isAuto，可选，不传也可以，默认是_isAuto=true开启自动轮播，_isAuto= false不开启自动轮播;，_autoTime，可选，不传默认轮播间隔3000，自定义则_autoTime=2000 <br/>
4.演示 <br/>
![lotusCarousel](https://raw.githubusercontent.com/winglau14/lotusPackage/master/lotusCarousel/1.gif)


