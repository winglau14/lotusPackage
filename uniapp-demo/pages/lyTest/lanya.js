var BLData = {
  openOK: false,//蓝牙是否打开
  BLZT: false,//蓝牙状态是否可用
  BLSO: false,//蓝牙是否正在搜索
  TS: "开始初始化蓝牙模块...",
}
var dayinok=false;//连接成功时，记录为 true,检测到断开后记录为false;
var lianjieing=false;//记录是否正在尝试连接
var dayinji = {
  uuid: "",
  suuid: "",
  nuuid: ""
}//已连接的蓝牙设备 uuid
var BLSB = new Array();//记录已搜索到的蓝牙设备
function GETData() {
  return BLData;
}
module.exports = {
  dayinji: dayinji,//连接的打印机信息
  OpenPrint: OpenP,
  GETData: GETData,
  GETSB: GETSB,
  stopBL: stopBL,
  lianjie: lianjie,
  duankai: duankai,
  zdlj:zdlianjie,
  chonglian:chonglian,
};
function chonglian(back){
  if(dayinok==true){
    back('ok');
    return;
  }
  if(lianjieing==true){
    back("正在尝试连接请稍后");
    return;
  }
  try {
    var value = uni.getStorageSync('dayinji')
    if (value) {
      //重新初始化蓝牙
      uni.openBluetoothAdapter({
        success: function (res) {
          lianjie(value.uuid,back);//成功则开始连接
        },
        fail: function (res) {
          lianjieing=false;
          back('请先打开蓝牙');
          BLData.TS = "请先打开蓝牙开关!"
        }
      })
    }
  } catch (e) {
    console.log("读取缓存数据错误:", e)
  }

}

function OpenP() {
  BLSB = new Array();
  //先关闭再打开
  uni.closeBluetoothAdapter({
    success: function (res) {
      //初始化蓝牙模块
      uni.openBluetoothAdapter({
        success: function (res) {
          console.log(res.errMsg);
          if (res.errMsg == "openBluetoothAdapter:ok") {
            BLData.openOK = true
            BLData.TS = "蓝牙模块初始化成功!"
            GetBLZT();
          }
          else {
            BLData.TS = "请先打开蓝牙开关!"
          }
        },
        fail: function (res) {
          BLData.TS = "请先打开蓝牙开关!"
        }
      })
    }
  })
  
  //wx.closeBluetoothAdapter 关闭蓝牙模块,使其进入未初始化状态 
}

function GetBLZT() {
  //获取本机蓝牙适配器状态
  uni.getBluetoothAdapterState({
    success: function (res) {
      if (res.available) {
        BLData.BLZT = true;
        BLData.TS = "蓝牙适配器状态可用";
        SOBL();
      }
    }
  })

  //监听本机蓝牙适配器变化(蓝牙状态变化时触发)
  uni.onBluetoothAdapterStateChange(function (res) {
    if (res.available) {
      BLData.BLZT = true;
      BLData.TS = "蓝牙适配器状态可用";
      SOBL();
    } else {
      BLData.BLZT = false;
      BLData.TS = "蓝牙适配器当前不可用";
    }
  })
}

//开始搜索蓝牙设备
function SOBL() {
  BLData.TS = "开始搜索蓝牙设备";
  uni.startBluetoothDevicesDiscovery({
    success: function (res) {
      if (res.errMsg == "startBluetoothDevicesDiscovery:ok") {
        BLData.BLZT = true;
        BLData.TS = "开始搜索蓝牙设备";
        newSB();
      }
    }
  })
}
function newSB(){
  //监听搜索到新设备事件
  uni.onBluetoothDeviceFound(function (res) {
    console.log(res)
    var SB = {
      name: "",
      id: "",
      tp: "",
      dis: false,
      LJ: "1",
      LJOK: "0"
    };
    BLData.TS = "搜索到蓝牙设备";
    console.log("localName:", res.devices[0].localName)
    if (res.devices[0].localName == "" || !res.devices[0].localName) {
      return;
    }
    if (chongfu(res.devices[0].deviceId)) {
      return;
    }
    SB.name = res.devices[0].localName;
    SB.id = res.devices[0].deviceId;
    var xh = res.devices[0].RSSI
    if (xh > -70) {
      SB.tp = "xinhao5"
    } else if (xh > -85) {
      SB.tp = "xinhao4"
    }
    else if (xh > -90) {
      SB.tp = "xinhao3"
    }
    else if (xh > -100) {
      SB.tp = "xinhao2"
    }
    else {
      SB.tp = "xinhao1"
    }
    SB.dis = false;
    SB.LJ = "0";
    BLSB.push(SB)
    //console.log(SB)
  })
}

function chongfu(uuid) {
  var iscf=false;
  for (var x in BLSB) {
    if (BLSB[x].id == uuid) {
      iscf=true
    }
  }
  return iscf;
}
function GETSB() {
  return BLSB;
}
function stopSO(){
  console.log("停止搜索:")
  uni.stopBluetoothDevicesDiscovery({
    success: function (res) {
      console.log("停止搜索成功:",res)
      uni.onBluetoothAdapterStateChange(function (res) {
        console.log(`adapterState changed, now is`, res)
      })
    }, fail: function (res) {
      console.log("停止搜索失败:", res)
    }
  })
}
function stopBL() {
  uni.stopBluetoothDevicesDiscovery({
    success: function (res) {
      uni.closeBluetoothAdapter({
        success: function (resx) {
          console.log(resx)
        }
      })
    }
  })
}
var lcs = 0;//尝试连接的次数
var cgcs = 0;//成功连接的次数
var jianting = false;
function lianjie(uuid,back) {
  if(lianjieing==true){
    back("正在尝试连接,请稍后再试");
    return;
  }
  if (dayinji.uuid != "" && dayinji.uuid !=uuid)
  {
    duankai(dayinji.uuid,uuid,back);
    console.log("换一个")
  }//如果有已连接的打印,并且uuid 不等于现在要连接的uuid 则 先断开之前的打印机
  else
  {
    lcs = 0;
    cgcs = 0;
    lianjiego(uuid, back);//开始连接
    hidesb(uuid, "1")
  }

}
function hidesb(uuid, h) {
  for (var x in BLSB) {
    if (BLSB[x].id == uuid) {
      BLSB[x].LJ = h
    }
  }
}
function lianjiego(deviceId,back) {
  lianjieing = true;//记录开始尝试连接
  lcs += 1;
  console.log("第" + lcs + "次尝试连接")
  uni.createBLEConnection({
    deviceId: deviceId,
    success: function (res) {
      //stopSO();
      stopSO();
      cgcs += 1;
      console.log("连接成功.第" + lcs + "次:", res)
      if (cgcs == 1) { jtlj() }
      jianting = false;
      hidesb(deviceId, '2')
      getFW(deviceId,back);//开始获取服务
    }, fail: function (res) {
      console.log("连接失败:", res)
      dayinok=false;
      if (lcs > 5) {
        back('连接失败,请重新配置打印机');
        lianjieing=false;//已经不在尝试连接了
        hidesb(deviceId, "3");
      } else {
        lianjiego(deviceId,back);//再次尝试连接
      }
    }
  })
}
function duankai(deviceId,uuid,back) {
  hidesb(deviceId, "0")
  jianting = true;
  uni.closeBLEConnection({
    deviceId: deviceId,
    success: function (res) {
      dayinok = false;
      console.log("断开成功:",res)
      if(uuid!="no"){
        console.log("断开再连接")
          lcs = 0;
          cgcs = 0;
          lianjiego(uuid, back);//开始连接
          hidesb(uuid, "1")
      }
    }
  })
}
function jtlj() {
  uni.onBLEConnectionStateChange(function (res) {
    if (res.connected == false && jianting == false) {
      dayinok=false;//记录已断开
      console.log("监测到断开,自动重连");
      hidesb(res.deviceId, "1");
      lcs = 0;
      cgcs = 0;
      lianjiego(res.deviceId,function(res){
        //console.log("打印机断开了连接");
      });
      jianting = true;
    }
  })
}
var tzz = 0;
//获取蓝牙设备所有 service（服务）
function getFW(deviceId,back) {
  tzz=0;
  uni.getBLEDeviceServices({
    deviceId: deviceId,
    success: function (res) {
      console.log("所有服务:",res)
      for(var p in res.services) {
        if(tzz==1)break;
        getTZ(deviceId, res.services[p].uuid,back);//开始获取特征吗
       
      }
    }
  })
}
//获取蓝牙设备某个服务中的所有 characteristic（特征值）
function getTZ(xuuid, xsuuid,back) {
  if(tzz==1)return;
  uni.getBLEDeviceCharacteristics({
    deviceId: xuuid,
    serviceId: xsuuid,
    success: function (res) {
      //console.log("所有特征值:",res)
      for (var p in res.characteristics) {
        var rr = res.characteristics[p].properties
       if (rr.notify && rr.read && rr.write) {
        //if (rr.notify &&  rr.write) {
          dayinji.uuid = xuuid;
          dayinji.suuid = xsuuid;
          dayinji.nuuid = res.characteristics[p].uuid;
          console.log("当前打印机:uuid:"+dayinji.uuid+"suuid:"+dayinji.suuid+"nuuid:"+dayinji.nuuid);
          uni.setStorage({
            key: "dayinji",
            data: dayinji
          })
          dayinok = true;
          lianjieing=false;
          tzz = 1;
          back('ok');
          break;
        }
      }
    }
  })
}
function zdlianjie(){
  try {
    var value = uni.getStorageSync('dayinji')
    if (value) {
      uni.openBluetoothAdapter({
        success: function (res) {
          lianjie(value.uuid,function(re){});
        },
        fail: function (res) {
          BLData.TS = "请先打开蓝牙开关!"
        }
      })     
    }
  } catch (e) {
    console.log("读取缓存数据错误:",e)
  }
}