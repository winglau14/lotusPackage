# imgfile2base64

imgfile2base64能将一个image文件转换成base64字符串，基于[canvas](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas)和[FileReader](https://developer.mozilla.org/en-US/docs/Web/API/FileReader)，在**浏览器**中使用。



### 用法：

`npm i imgfile2base64 `
或
`<script src="imgfile2base64.js"></script>`


```javascript
imgfile2base64(file, function (base64) {
  console.log(base64);
  //data:image/jpeg;base64,.....
});
```



### 参数：

- file:File，一个[File](https://developer.mozilla.org/en-US/docs/Web/API/File)对象。通常从 `<input type=“file” />` 获取。
- complete:Function，一个回调函数，将在转换完成后执行，它的参数便是base64字符串。
- opt:Object，一个object对象，一些参数。
  - quality:Number，一个介于0~1之间的值，用来设定图片质量，默认值:1。
  - widht:Number，用来设定图片宽度，默认值:原图的宽度。
  - height:Number，用来设定图片高度，默认值:原图高度。

### 例子：

[查看效果](https://b5156.net/imgfile2base64-example.html)

```javascript
<input id="file" type="file"/>
<img id="img" src=""/>
```

```javascript
document.getElementById('file').addEventListener('change',
    function (e) {
        var file = e.target.files[0];
        imgfile2base64(file, function (base64) {
            document.getElementById('img').setAttribute('src', base64);
        }, {
            width: 100,
            quality: 0.5
        });
    }
)
```

