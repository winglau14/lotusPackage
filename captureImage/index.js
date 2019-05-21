const express = require("express");
const path = require('path'); //系统路径模块
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
const rp = require('request-promise');
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
        },1000);
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
            console.log(url);
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
    }if(type === 'jd'){
        request(url,function(err,res,body){
            const t = url.split('/');
            const dirName = dirName1||t[t.length-1].replace('.html','');
            //console.log(url);
            if(!err && res.statusCode === 200){
                const $ = cheerio.load(body);
                //京东图片下载
                $(".spec-list li").each(function(){
                    const imgUrl = 'https:'+$(this).find("img").attr("src").replace('/n5/',`/n1/`);
                    imgUrlList.push(imgUrl);
                });
                //console.log(imgUrlList);
                saveImg('./static/'+dirName,imgUrlList,res1);
            }
        });
    }else if(type === 'aljk'){
        console.log(type);
        puppeteer.launch().then(async browser => {
            const page = await browser.newPage();
            await page.goto(`${url}`);
            setTimeout(async ()=>{
                const html = await page.$eval("#J_UlThumb",ele=>ele.innerHTML);
                //console.log(html);
                const reg = /"\/\/.*\.jpg"/g;
                const t = html.match(reg);
                t.map((item)=>{
                    item = item.replace('"','https:').replace('60x60',`${imgSize}x${imgSize}`).replace('"','');
                    imgUrlList.push(item);
                });
                //console.log(imgUrlList);
                saveImg('./static/'+dirName1,imgUrlList,res1);
                await browser.close();
            },1000);
        });
    }
}
//爱漫画api
var mApiUri = "https://wx.ac.qq.com/1.0.0/";
function mangaApi(uri,optionData,method){
    var options = {};
    if(method === "POST"){
        options = {
            method: method,
            uri:uri,
            body:optionData||{},
            json: true
        }
    }else{
        options = {
            method: "GET",
            uri:uri,
            qs:optionData||{},
            json: true
        }
    }
    return rp(options);
}
app.post('/mApi',function(req,res){
    var uri = req.body.uri;
    var options = req.body.options;
    var method = req.body.method || "GET";
    if(!uri||!options){
        res.status(404);
        res.json({
           errorMessage:"参数错误辣，小老弟"
        });
        return false;
    }
    //console.log(typeof options);
    mangaApi(mApiUri+uri,JSON.parse(options),method).then(function(response){
        //console.log(response);
        if(response){
            if(typeof response === "string"){
                res.json({
                    data:JSON.parse(response).data
                });
            }else{
                res.json({
                    data:response.data
                });
            }

        }
    },function(error){
        res.status(404);
        res.json({
            errorMessage:"非法请求"
        });
    });
});
//鼠绘api
var shApiUri = "https://prod-api.ishuhui.com/ver/b6202578/anime/detail?id=1&type=comics&.json";
app.post('/shApi',function(req,res){
    var method = req.body.method || "GET";
    mangaApi(shApiUri,'',method).then(function(response){
        console.log(response);
        if(response){
            if(typeof response === "string"){
                res.json({
                    data:JSON.parse(response).data
                });
            }else{
                res.json({
                    data:response.data
                });
            }

        }
    },function(error){
        res.status(404);
        res.json({
            errorMessage:"非法请求"
        });
    });
});
//海贼王最新一集api
app.post('/lastApi',function(req,res){
    var method = req.body.method || "GET";
    var id = req.body.id;
    console.log(id);
    mangaApi('https://prod-api.ishuhui.com/comics/detail?id='+id,'',method).then(function(response){
        console.log(response);
        if(response){
            if(typeof response === "string"){
                res.json({
                    data:JSON.parse(response).data
                });
            }else{
                res.json({
                    data:response.data
                });
            }

        }
    },function(error){
        res.status(404);
        res.json({
            errorMessage:"非法请求"
        });
    });
});

//最快资源url
const zyUrl = 'http://yongjiuzy.cc/'||'http://156zy.cc/'||'http://zuikzy.com/';
//动漫列表下载
function requestList(url,pRes){
    request(zyUrl+url,function(err,res,body){
        //console.log(url);
        if(!err && res.statusCode === 200){
            //console.log(body);
            const $ = cheerio.load(body);
            const totalPageText = $(".page_num").text();
            const reg1 = /共\d{1,}/g;
            const arr1 = totalPageText.match(reg1);
            let data = {};
            if(arr1.length){
                //data.totalPage = arr1[0].replace("共","");
                let curPageArr = [];
                //console.log($("#data_list").find(".DianDian").length);
                $("#data_list").find(".DianDian").each(function(){
                    let obj = {};
                    $(this).find("td").each(function(index){
                        //console.log($(this).text(),index);
                        if(index === 0){
                            const curText = $(this).text();
                            obj.name  = curText.split(" [")[0];//资源名称
                            const tArr = curText.split(" [")[1].replace(']','').match(/\d{1,}/);
                            if(tArr){
                                obj.pageIndex  = curText.split(" [")[1].replace(']','').match(/\d{1,}/)[0];//资源集数
                            }
                            obj.url  = $(this).find("a").attr("href");//链接
                        }if(index === 1){
                            obj.lm  = $(this).text();//所属栏目
                        }else if(index === 2){
                            obj.range = $(this).text();//地区分类
                        }else if(index === 3){
                            obj.status = $(this).text();//连载状态
                        }else{
                            obj.updateTime = $(this).text().split(" ")[0];//更新时间
                        }

                    });
                    if(obj.lm === "动漫"){
                        curPageArr.push(obj);
                    }
                });
                //当前列表数据
                data.list = curPageArr;

                pRes.json({
                    code:1,
                    data
                });
            }else{
                pRes.json({
                    code:0,
                    data:null
                });
            }
        }
    });
}
//动漫详情下载
function requestDetail(url,pRes){
    request(zyUrl+url,function(err,res,body){
        //console.log(url);
        if(!err && res.statusCode === 200){
            //console.log(body);
            const $ = cheerio.load(body);
            const pic = $(".videoPic img").attr("src");
            let data = {pic};
            let curPageArr = [];
            $(".videoDetail").find("li").each(function(index){
                if(index === 0){
                    data.name  = $(this).text();//影片名称: 逆转裁判 〜对这个“真实”，有异议！Season 2
                }else if(index === 1){
                    data.otherName = $(this).text();//影片别名: Gyakuten Saiban
                }else if(index === 3){
                    data.zy = $(this).text();//影片主演: 梶裕贵,悠木碧,玉木雅士,中村千绘
                }else if(index === 4){
                    data.dy = $(this).text();//影片导演: 渡边步
                }else if(index === 6){
                    data.lan = $(this).find(".left").text();//语言分类: 日语
                    data.range = $(this).find(".right").text();//影片地区: 日本
                }else if(index === 7){
                    data.status = $(this).find(".left").text();//连载状态：21
                    data.year = $(this).find(".right").text();//上映年份: 2018
                }else if(index === 8){
                    data.updateTime = $(this).find(".left").text();//更新时间
                }
            });
            //遍历动漫集数
            $(".movievod").find("ul").find("li").each(function(index){
                //console.log($(this).text());
                let curObj = {};
                const len = $(".movievod").find("ul").find("li").length-1;
                if($(this).text().indexOf("m3u8")<0&&index>0&&index<len){
                    const curText = $(this).text().replace("$"," ");
                    curObj.page = curText.split(" ")[0];
                    curObj.url = curText.split(" ")[1];
                    curPageArr.push(curObj);
                }
            });
            //当前列表数据
            data.list = curPageArr.reverse();

            pRes.json({
                code:1,
                data
            });
        }else{
            pRes.json({
                code:0,
                data:null
            });
        }
    });
}
//动漫搜索下载
function requestSearch(url,pRes,wd){
    request.post(zyUrl+'index.php?m=vod-search',{form:{wd}},function(err,res,body){
        //console.log(url);
        if(!err && res.statusCode === 200){
            //console.log(body);
            const $ = cheerio.load(body);
            const totalPageText = $(".page_num").text();
            const reg1 = /共\d{1,}/g;
            const arr1 = totalPageText.match(reg1);
            let data = {};
            if(arr1.length){
                //data.totalPage = arr1[0].replace("共","");
                let curPageArr = [];
                //console.log($("#data_list").find(".DianDian").length);
                $("#data_list").find(".DianDian").each(function(){
                    let obj = {};
                    $(this).find("td").each(function(index){
                        //console.log($(this).text(),index);
                        if(index === 0){
                            const curText = $(this).text();
                            obj.name  = curText.split(" [")[0];//资源名称
                            const tArr = curText.split(" [")[1].replace(']','').match(/\d{1,}/);
                            if(tArr){
                                obj.pageIndex  = curText.split(" [")[1].replace(']','').match(/\d{1,}/)[0];//资源集数
                            }
                            obj.url  = $(this).find("a").attr("href");//链接
                        }if(index === 1){
                            obj.lm  = $(this).text();//所属栏目
                        }else if(index === 2){
                            obj.range = $(this).text();//地区分类
                        }else if(index === 3){
                            obj.status = $(this).text();//连载状态
                        }else{
                            obj.updateTime = $(this).text().split(" ")[0];//更新时间
                        }
                    });
                    if(obj.name.indexOf(wd)>-1&&obj.lm === "动漫"){
                        curPageArr.push(obj);
                    }
                });
                //当前列表数据
                data.list = curPageArr;

                pRes.json({
                    code:1,
                    data
                });
            }else{
                pRes.json({
                    code:0,
                    data:null
                });
            }
        }
    });
}
//动漫栏目数据请求
app.post('/movie',function(req,res){
    const url = req.body.url;
    //console.log(url);
    //获取动漫栏目数据
    requestList(url,res);
});
//动漫搜索
app.post('/movieSearch',function(req,res){
    const wd = req.body.wd;
    //console.log(url);
    //获取动漫栏目数据
    requestSearch(zyUrl+"index.php?m=vod-search",res,wd);
});
//具体动漫集数请求
app.post('/movieDetail',function(req,res){
    const url = req.body.url;
    //console.log(url);
    //获取动漫栏目数据
    requestDetail(url,res);
});

//京东cps链接转换
app.post('/jdcps',function(req,pRes){
    const url = req.body.url;
    const type = req.body.type;
    const timestamp = req.body.timestamp;
    const sign = req.body.sign;
    const param_json = req.body.param_json;
    const reg = /\d{1,}/g;
    const id = url.match(reg);
    let method = '';
    let requestUrl = '';
    //获取推广商品信息接口
    if(type === "detail"){
        method = "jd.union.open.goods.promotiongoodsinfo.query";
    }else{
        // 获取通用推广链接
        method = "jd.union.open.promotion.common.get";
    }
    requestUrl = 'http://router.jd.com/api?v=1.0&method='+method+'&app_key=d5a7072c08a24cc2858c9f79ed37b5c7&sign_method=md5&format=json&timestamp='+timestamp+'&sign='+sign+'&param_json='+param_json;
    console.log(requestUrl);
    request(requestUrl,function(err,res,body){
        const result = JSON.parse(body);
        //没有返回结果
        if(result.errorResponse){
            pRes.json({
                code:0,
                data:result
            });
        }else{
            //有数据返回
            pRes.json({
                code:1,
                data:result
            });
        }

    })
});


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
//京东下载
app.post('/jd',function(req,res){
    const url = req.body.url;
    const dirName = req.body.dirName;
    const imgSize = req.body.imgSize||'500';
    //console.log(url);
    //京东下载
    requestType(url,'jd',res,dirName,imgSize);
});
//删除文件
app.get('/delete',function(req,res){
    del([__dirname+'/static/*']).then(paths => {
        res.json({
           msg:'删除成功'
        });
    });
});
app.use('*', function(req, res){
    res.sendFile(__dirname+'/index.html');
});
//开启服务
app.listen(process.env.PORT || 3100, function () {
    console.log('listen port:3100');
});

