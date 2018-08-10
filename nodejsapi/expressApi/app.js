
var rp = require('request-promise');
var express = require('express');
var app = express();


app.get('/express/', function (req, res) {
    console.log(req.query.text);
    var text = req.query.text;
    return getCompany(text).then((res1)=>{
        if(res1.auto.length > 0 ){
            var comCode = res1.auto[0].comCode;
            return getExpressMsg(comCode,text).then((result)=>{
                res.json(result);
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

app.listen(process.env.PORT);


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

function getCompany(text){
    var options = {
        uri: 'http://www.kuaidi100.com/autonumber/autoComNum',
        json: true,
        qs: {text: text}
    };
    return rp(options);
}


function getExpressMsg(type,postId){
    var options = {
        uri: 'http://www.kuaidi100.com/query',
        json: true,
        qs: {type: type, postid: postId, id: 1, valicode: '', temp: Math.random()},
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.87 Safari/537.36 QQBrowser/9.2.5748.400'
        }
    };
    return rp(options);
}

