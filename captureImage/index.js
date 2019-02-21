const express = require("express");
const app = express();
const request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');
const Bagpipe = require('bagpipe');
const puppeteer = require('puppeteer');
const bodyParser = require("body-parser");
const compressing = require('compressing');
const cors = require('cors');
const del = require('del');
app.use(bodyParser.urlencoded({extended: true}));
//静态资源访问路由
app.use('/static', express.static('static'));
app.use('/images', express.static('images'));
//支持跨域
app.use(cors());
//图片下载
const downloadPic = function(src, dest){
    //console.log(src, dest);
    request(src).pipe(fs.createWriteStream(dest)).on('close',function(){
        console.log('图片保存成功!')
    })
};
//保存图片
const saveImg = function(dirName,imgUrlList,res){
    //console.log(imgUrlList.length);
    const bagpipe = new Bagpipe(10);
    fs.mkdir(dirName,function(){

        for(let i = 0; i < imgUrlList.length; i++) {
            const t = imgUrlList[i].split('/');
            const imgName = t[t.length-1];
            bagpipe.push(downloadPic, imgUrlList[i], dirName+'/'+imgName, function(err, data){});
        }
        //打包压缩包
        setTimeout(()=>{
            compressing.zip.compressDir(dirName, dirName+'.zip')
                .then(() => {
                    console.log('success');
                    const url = dirName.replace('.','');
                    res.json({
                        msg:'抓取完成',
                        url:url+'.zip'
                    });
                }).catch(err => {
                    console.error(err);
                });
        },500);
    });
};
//图片下载来源选择
function requestType(url,type,res1,dirName1,imgSize){
    //获取图片url
    const imgUrlList = [];
    if(type === 'jk'){
        request(url,function(err,res,body){
            const t = url.split('/');
            const dirName = dirName1||t[t.length-1].replace('.html','');
            //console.log(url);
            if(!err && res.statusCode === 200){
                const $ = cheerio.load(body);
                //健客网图片下载
                $(".pro_pic_li li").each(function(){
                    const imgUrl = 'https:'+$(this).find("img").attr("src").replace('!50x50',`!${imgSize}x${imgSize}`);
                    imgUrlList.push(imgUrl);
                });
                //console.log(imgUrlList);
                saveImg('./static/'+dirName,imgUrlList,res1);
            }
        });
    }else if(type === 'aljk'){
        puppeteer.launch().then(async browser => {
            const page = await browser.newPage();
            await page.goto(`${url}`);
            const html = await page.$eval("#J_UlThumb",ele=>ele.innerHTML);
            //console.log(html);
            const reg = /"\/\/.*"/g;
            const t = html.match(reg);
            t.map((item)=>{
                item = item.replace('"','https:').replace('60x60',`${imgSize}x${imgSize}`).replace('"','');
                imgUrlList.push(item);
            });
            //console.log(imgUrlList);
            saveImg('./static/'+dirName1,imgUrlList,res1);
            await browser.close();
        });
    }
}

//健客下载
app.post('/jk',function(req,res){
    const url = req.body.url;
    const dirName = req.body.dirName;
    const imgSize = req.body.imgSize||'500';
    //console.log(url);
    //健客下载
    requestType(url,'jk',res,dirName,imgSize);
});
//阿里健康下载
app.post('/aljk',function(req,res){
    const url = req.body.url;
    const dirName = req.body.dirName;
    const imgSize = req.body.imgSize||'500';
    //阿里健康下载
    requestType(url,'aljk',res,dirName,imgSize);
});
//删除文件
app.get('/delete',function(req,res){
    del([__dirname+'/static/*']).then(paths => {
        res.json({
           msg:'删除成功'
        });
    });
});
app.use('/', function(req, res){
    res.sendFile(__dirname+'/index.html');
});



//开启服务
app.listen(process.env.PORT || 3100, function () {
    console.log('listen port:3100');
});

