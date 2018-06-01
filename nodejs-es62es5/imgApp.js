const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const puppeteer = require('puppeteer');
const fs = require('fs');
const devices = require('puppeteer/DeviceDescriptors');
const iPhone = devices['iPhone 6'];
// 创建 application/x-www-form-urlencoded 解析
const urlencodedParser = bodyParser.urlencoded({ extended: true });
require('babel-polyfill');
//静态资源
app.use('/static', express.static('static'));
//网页截屏
function PageInit(obj, res) {
    const options = JSON.parse(obj.pageData);
    //参数拼接
    let str = '?';
    let clip = null;
    for(let key in options){
        if(key !== 'pagePath'){
            str += `${key}=${options[key]}&`
        }
    }
    //需要固定截屏大小
    if(obj.clip){
        clip = JSON.parse(obj.clip);
    }
    puppeteer.launch().then(async browser => {
        const page = await browser.newPage();
        await page.emulate(iPhone);
        await page.goto(`${obj.imgPreviewUrl}${str}`);
        console.log(`${obj.imgPreviewUrl}${str}`);
        //截屏fn
        async function screenShotImg() {
            //clip不等于null说明是要固定截屏，这个时候就要传x,y,width,height这些参数
            if(clip){
                await page.screenshot({ path: `${__dirname}/static/${obj.saveDir}/${options.actId}_${options.type}.jpeg`,quality: ~~obj.quality||50,clip:clip});
            }else{
                //整屏截屏
                await page.screenshot({ path: `${__dirname}/static/${obj.saveDir}/${options.actId}_${options.type}.jpeg`, fullPage: true, quality: ~~obj.quality||50});
            }

            // other actions...
            console.log(`${options.actId}_${options.type} 合成完成！`);
            //obj.reuse为true需要复用，不用再次截屏
            if(JSON.parse(obj.reuse)){
                const result = JSON.stringify({ src: `${options.actId}_${options.type}.jpeg`, isExists: false });
                res.end(result);
            }else{
                const result = JSON.stringify({ src: `${options.actId}_${options.type}.jpeg`});
                res.end(result);
            }
            await browser.close();
        }
        //执行页面截屏
        setTimeout(() => {
            screenShotImg();
        }, ~~obj.time||1000);
    });
}
//图片文件是否存在
function isPosterFile(obj, res)  {

    const options = JSON.parse(obj.pageData);
    //文件夹是否存在
    const dir = fs.existsSync(`${obj.saveDir}`);
    //dir = true文件夹存在
    if(dir){
        console.log(`${obj.saveDir}文件夹已存在`);
        fs.exists(`${__dirname}/static/${obj.saveDir}/${options.actId}_${options.type}.jpeg`, function(exists) {
            //已存在图片
            if (exists) {
                console.log("文件存在");
                const result = JSON.stringify({ src: `${options.actId}_${options.type}.jpeg`, isExists: true });
                res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
                res.end(result);
            }
            //不存在图片
            if (!exists) {
                console.log("文件不存在");
                if(options.actId){
                    PageInit(obj, res);
                }else{
                    res.writeHead(400,{'Content-Type':'text/html;charset=utf-8'});
                    const result = JSON.stringify({errorMsg:'合成失败'});
                    res.end(result);
                }
            }
        });
    }else{
        fs.mkdir(`${__dirname}/static/${obj.saveDir}`,function(){
            console.log(`${obj.saveDir}文件夹创建成功`);
            fs.exists(`${__dirname}/static/${obj.saveDir}/${options.actId}_${options.type}.jpeg`, function(exists) {
                //已存在图片
                if (exists) {
                    console.log("文件存在");
                    const result = JSON.stringify({ src: `${options.actId}_${options.type}.jpeg`, isExists: true });
                    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
                    res.end(result);
                }
                //不存在图片
                if (!exists) {
                    console.log("文件不存在");
                    if(options.actId){
                        PageInit(obj, res);
                    }else{
                        res.writeHead(400,{'Content-Type':'text/html;charset=utf-8'});
                        const result = JSON.stringify({errorMsg:'合成失败'});
                        res.end(result);
                    }
                }
            });
        });
    }
}
//图片截屏
app.post('/posterCompound', urlencodedParser,function(req, res, next) {
    const reuse = JSON.parse(req.body.reuse);
    console.log(reuse);
    if(reuse){
        isPosterFile(req.body,res);
    }else{
        //文件夹是否存在
        const dir = fs.existsSync(`${__dirname}/static/${req.body.saveDir}`);
        console.log(`dir ${dir}`);
        if(dir){
            //不需要复用直接截屏
            PageInit(req.body,res);
        }else{
            fs.mkdir(`${__dirname}/static/${req.body.saveDir}`,function(){
                console.log(`${req.body.saveDir}文件夹创建成功`);
                PageInit(req.body,res);
            });
        }
    }
});
//赞报海报删除
app.get('/zbDelete',function(req, res, next){
    isZbFile(req.query, res,'./zanbao','delete');
});
//服务开启
app.listen(process.env.PORT||3014, function() {
    console.log(`express Ready port ${process.env.PORT||3014}`);
});