var rp = require('request-promise');
var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var cors = require('cors');
const request = require('request');
const cheerio = require('cheerio');
const puppeteer = require('puppeteer');
app.use(bodyParser.urlencoded({extended: true}));
//支持跨域
//app.use(cors());
//静态资源访问路由
app.use('/static', express.static('static'));
function getCompany(text){
    var options = {
        uri: 'https://www.kuaidi100.com/autonumber/autoComNum',
        json: true,
        qs: {text: text}
    };
    return rp(options);
}

//物流信息请求api
app.get('/express/', function (req, res) {
    console.log(req.query.text);
    const text = req.query.text;
        return getCompany(text).then((res1)=>{
            //console.log(res1);
            //快递单号存在
            if(res1.auto.length){
                const comCode = res1.auto[0].comCode;
                const expressArr = [];
                puppeteer.launch().then(async browser => {
                    const page = await browser.newPage();
                    await page.goto('https://www.kuaidi100.com/',{
                        time:100
                    });
                    //设置input val
                    await page.type("#postid",text);
                    //点击查询
                    await page.tap("#query");
                    setTimeout(async ()=>{
                        //const len  = await page.$$eval('.result-info', divs => divs.length);
                        const len  = await page.$$eval('.result-info', divs => divs.length);
                        //有物流信息数据
                        if(len){
                            const html = await page.$eval('.result-info', e => e.outerHTML);
                            console.log(html);
                            const $ = cheerio.load(html);

                            //console.log("---------------------------");
                            $("table tr").each(function(){
                                let obj = {};
                                obj.time = $(this).find("td").eq(0).find(".day").text()+' '+$(this).find(".time").text();
                                obj.ftime = $(this).find("td").eq(0).find(".day").text()+' '+$(this).find(".time").text();
                                obj.context = $(this).find("td").eq(2).text();
                                expressArr.push(obj);
                            });
                            //console.log(arr);
                            //返回查询到物流数据
                            res.json({
                                com:comCode,
                                data:expressArr
                            });
                        }
                        // 其他操作...
                        await browser.close();
                    },300);
                });
            }else{
                //无快递单号信息
                res.json({
                    message:'快递单号不存在',
                    data:null
                });
            }
        });
});

//根据经纬度获取地址明细
app.get('/express/map',function(req,res){
    var lat = req.query.lat;
    var lng = req.query.lng;
    var ak = req.query.ak ||'50KTD4E6eiE1MkTqKHKoxGbu0rZdwfhO';
    return getMapData(lat,lng,ak).then(function(response){
        if(response){
            console.log(response);
            response = response.replace('renderReverse&&renderReverse(','');
            response = response.replace(/\)/g,'');
            var result = JSON.parse(response).result;
            res.json(result);
        }

    });
});
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
app.post('/jd',function(req,pRes){
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




app.use('*', function(req, res){
    res.sendFile(__dirname+'/index.html');
});

app.listen(process.env.PORT||3100,function(){
    console.log("listen 3100");
});


function getMapData(lat,lng,ak){
    var ak = ak || '50KTD4E6eiE1MkTqKHKoxGbu0rZdwfhO';
    var option = {
        uri:'http://api.map.baidu.com/geocoder/v2/?callback=renderReverse&location='+lat+','+lng+'&output=json&pois=1&ak='+ak,
        json:true
    };
    return rp(option);
}

//根据地址获取坐标
function getAddressLat(name,ak){
    var ak = ak || '50KTD4E6eiE1MkTqKHKoxGbu0rZdwfhO';
    var option = {
        uri:'http://api.map.baidu.com/geocoder/v2/?address='+name+'&output=json&ak='+ak+'&callback=showLocation',
        json:true
    };
    return rp(option);
}
app.get('/express/coordinate',function(req,res){
    var name = encodeURIComponent(req.query.name);
    var ak = req.query.ak || '50KTD4E6eiE1MkTqKHKoxGbu0rZdwfhO';
    return getAddressLat(name,ak).then(function(response){
        if(response){
            response = response.replace('showLocation&&showLocation(','');
            response = response.replace(/\)/g,'');
            var result = JSON.parse(response).result;
            res.json(result);
        }

    });
});


