//初始化蓝牙
var wc = require("./wcache.js");
var Xtbluservice = function () {
  var bleList = [];
  var that = this;
  //重连次数
  var _ReNumber = 0;
  this.GetList = function () {
    return bleList;
  }
  this.getReNumber = function () {
    return _ReNumber;
  }
  this.setReNumber = function (num) {
    _ReNumber = num;
  }
  //初始化
  this.Init = function () {
    //获取平台信息 
    uni.getSystemInfo({
      success: function (res) {
        that.CurrentDevice.platform = res["platform"].toLowerCase();
        console.log("获取平台信息platform=" + that.CurrentDevice.platform);
      },
    });

  };
  this.Init();
}
Xtbluservice.prototype = {
  constructor: Xtbluservice,
  test: function () {//测试
    //console.clear();
    var newData = this.GetList();
    console.log("xtx "+newData.length);
    console.log("xtx "+this.CurrentDevice.platform);
  },
  // //初始化蓝牙
  initBle: function (Callback) {
    var that = this;
    var obj = new Object();
    //0蓝牙不可用,1可用,2打开蓝牙适配成功,3打开蓝牙适配失败,4连接成功,5断开连接,6监听到蓝牙列表数据
    //监听蓝牙状态的改变
    console.log("蓝牙开始初始化...");
    var IsOpen = false;
    //打开蓝牙适配器
    uni.openBluetoothAdapter({
      success: function (res) {
        IsOpen = true;
        obj.BleType = 2;
        obj.res = res;
        console.log("打开适配器成功");
        if (Callback != null) {
          Callback(obj);
        }
        var json = wc.get("blue_Xtbluservice", "");
        if (json != "" && json != "undefined" && json != undefined) {
          console.log("xt", json);
          obj.BleType = 6;
          obj.res = JSON.parse(json);
          console.log("xt 从缓存获取数据");
          Callback(obj);
        }
        console.log("xt 打开监听扫描设备结果数据...");
        //监听扫描
        uni.onBluetoothDeviceFound(function (res) {
          // res电脑模拟器返回的为数组；手机返回的为蓝牙设备对象
          obj.BleType = 6;
          if (res instanceof Array) {
            console.log("onBluetoothDeviceFound数组=" + JSON.stringify(res))
            that.AddBle(res);
          }
          else {
            console.log("onBluetoothDeviceFound对象=" + JSON.stringify(res))
            obj.res = [res];
            that.AddBle([res]);
          }
          if (Callback != null) {
            Callback(obj);
          }
        });
        console.log("xt 打开监听连接状态...");
        //监听蓝牙连接状态
        uni.onBLEConnectionStateChanged(function (res) {

          if (!res.connected) {
            obj.BleType = 4;
            console.log("连接断开");
          } else {
            obj.BleType = 5;
            console.log("连接成功");
          }
          obj.res = res;
          if (Callback != null) {
            Callback(obj);
          }
        })
      },
      fail: function (res) {
        obj.BleType = 3;
        obj.res = res;
        if (Callback != null) {
          Callback(obj);
        }
        // fail
        console.log("打开蓝牙适配失败...")
        //蓝牙不可用
        //$.toast("打开蓝牙适配失败!");
        uni.showModal({
          content: '蓝牙打开,请手动打开蓝牙!',
          showCancel: false,
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定')
            }
          }
        });
      }
    });
    uni.onBluetoothAdapterStateChange(function (res) {
      if (res.available) {
        obj.BleType = 1;
        //使按钮能用
        console.log("蓝牙已经打开...");

        if (!IsOpen) {
          that.initBle(Callback);
          console.log("重新初始化...");
        }
      } else {
        console.log("检测到蓝牙关闭...");
        obj.BleType = 0;
        that.stopScan();
        IsOpen = false;
        //蓝牙不可用
        uni.showModal({
          content: '检测到蓝牙已经关闭,是否手动打开蓝牙?',
          showCancel: false,
          success: function (res) {
            if (res.confirm) {
            }
          }
        });

      }
      obj.res = res;
      if (Callback != null) {
        Callback(obj);
      }
    });
  },
  //获取在小程序蓝牙模块生效期间所有已发现的蓝牙设备，包括已经和本机处于连接状态的设备。
  getDevices: function (Callback) {
    uni.getBluetoothDevices({
      success: function (res) {
        if (res.devices.length > 0) {
          Callback(res.devices);
        }
      },
      fail: function () {
      }
    })
  },
  //添加设备
  AddBle: function (devices) {
    var tempDevice = null;
    var newData = this.GetList();
    for (var i = 0; i < devices.length; i++) {
      //ios设备
      if (devices[i].devices != null) {
        if (devices[i].devices.length > 0) {
          tempDevice = devices[i].devices[0];
        }
        else {
          continue;
        }
      }
      else {
        //安卓
        tempDevice = devices[i];
      }
      if (!this.isExist(tempDevice)) {
        newData.push(tempDevice);
      }
    }
    console.log("xt", "缓存列表60分钟");
    //保存缓存60分钟
    wc.put('blue_Xtbluservice', JSON.stringify(newData), 60 * 60);
  },
  //是否已存在 存在返回true 否则false
  isExist: function (device) {
    var tempData = this.GetList();
    for (var i = 0; i < tempData.length; i++) {
      if (tempData[i].deviceId == device.deviceId) {
        return true;
      }
    }
    return false;
  },
  //开始扫描
  startScan: function (Callback) {
    //开始扫描
    uni.startBluetoothDevicesDiscovery({
      services: [],
      allowDuplicatesKey: false,
      success: function (res) {
        if (Callback!=null){
          Callback(res);
        }
        console.log("startBluetoothDevicesDiscovery=" + JSON.stringify(res))
      }
    })
  },
  //结束扫描
  stopScan: function (Callback) {
    //停止扫描
    uni.stopBluetoothDevicesDiscovery({
      success: function (res) {
        // success
        console.log("关闭蓝牙扫描...");
        if (Callback != null) {
          Callback(res);
        }
      }
    })
  },
  //关闭连接
  closeConnect: function (deviceId, Callback) {
    uni.hideLoading();
    uni.closeBLEConnection({
      deviceId: deviceId,
      success: function (res) {
        // success
        if (Callback!=null){
          Callback(res);
        }
        console.info("关闭蓝牙连接deviceId=" + deviceId);
      },fail:function(res){
        if (Callback != null) {
          Callback(res);
        }
      }
    })
  },
  //发起连接指定的蓝牙设备
  Connect: function (deviceId, Callback) {
    console.log("开始连接---" + deviceId);
    var that = this;
    var num = that.getReNumber();
    uni.stopBluetoothDevicesDiscovery({ //先停止搜索周边设备
      success: function (res) {
      }
    });
    if (num > 0) {
      uni.showLoading({
        title: '重新连接' + num + "/8次",
      });
    } else {
      uni.showLoading({
        title: '连接蓝牙设备中...',
      });
    }
    var obj = new Object();
    // obj.conType = 0;
    //conType=0连接成功,1,连接失败,2获取服务成功,3获取服务失败,4获取特征值成功,5获取特征值失败 ,6重新查找设备
    uni.createBLEConnection({
      deviceId: deviceId,
      success: function (res) {
        //连接成功
        that.setReNumber(0);
        that.CurrentDevice.deviceId = deviceId;
        console.log("连接成功>" + deviceId);
        //获取蓝牙设备所有 service（服务）
        console.log("开始获取蓝牙设备服务>" + deviceId);
        setTimeout(()=>{
					uni.getBLEDeviceServices({
					  deviceId: deviceId,
					  success: function (res) {
							console.log(JSON.stringify(res.services));
					    if (res.services != null && res.services) {
					      that.CurrentDevice.services = res.services;
					    }
					    console.log("获取蓝牙服务成功>" + deviceId);
					    obj.conType = 2;
					    obj.res = res;
					    if (Callback != null) {
					      Callback(obj);
					    }
					
					  }, fail: function (res) {
					    obj.conType = 3;
					    obj.res = res;
					    if (Callback != null) {
					      Callback(obj);
					    }
					  }
					});
					if (Callback != null) {
					  obj.conType = 0;
					  obj.res = res;
					  Callback(obj);
					}
					uni.hideLoading();
				},2000);
      }, fail: function (res) {
        uni.closeBLEConnection({
          deviceId: deviceId,
          success: function (res) {
            console.log("关闭连接");
          }, fail: function (res) {
            console.log("关闭连接失败--->" + JSON.stringify(res));
          }
        })
        console.log("连接失败:" + JSON.stringify(res) + "  ReNumber=" + that.ReNumber);
        uni.hideLoading();
        if (Callback != null) {
          obj.conType = 1;
          obj.res = res;
          Callback(obj);
        }
        var num = that.getReNumber();
        //连接是要要重连
        if (num < 8) {
          uni.showLoading({
            title: '正在重新连接...',
          });
          num = num + 1;
          that.setReNumber(num);
          setTimeout(function () {
            uni.hideLoading();
            that.Connect(deviceId, Callback);
          }, 4000);
        } else {
          that.setReNumber(0);
          uni.showToast({
            title: '重连失败,请重试',
          })
        }

      }
    })
  },
  //发送消息
  Send: function (buffer, Callback) {
   // obj.sendType = 0//0发送成功,1发送失败,2发送完成
	 console.log(JSON.stringify(buffer));
    var that = this;
    var obj=new Object();
    var deviceId = that.CurrentDevice.deviceId;
    var serviceId = that.CurrentDevice.wri_serviceId;
    var characteristicId = that.CurrentDevice.wri_characteristicId;
    var read_characteristicId = that.CurrentDevice.read_characteristicId;
    console.log("serviceId=" + serviceId);
    console.log("characteristicId=" + characteristicId);
    if (deviceId == null || serviceId == null || characteristicId == null) {
      uni.showToast({
        title: '蓝牙未连接,发送失败',
        icon: 'forbidden',
        duration: 2000
      })
      return;
    }
    uni.writeBLECharacteristicValue({
      deviceId: deviceId,
      serviceId: serviceId,
      characteristicId: characteristicId,
      value: buffer,
      success: function (res) {
        obj.sendType=0;
        obj.res=res;
        if (Callback!=null){
          Callback(obj);
        }
        // success
        console.log('write success:'+JSON.stringify(res))
      },
      fail: function (res) {
        // fail
        console.log('write failed:'+JSON.stringify(res))
        obj.sendType =1;
        obj.res = res;
        if (Callback != null) {
          Callback(obj);
        }
      },
      complete: function (res) {
        // complete
        console.log('write', res)
        obj.sendType = 2;
        obj.res = res;
        if (Callback != null) {
          Callback(obj);
        }
      }
    })
    if (read_characteristicId != null && read_characteristicId != "") {
      uni.readBLECharacteristicValue({
        deviceId: deviceId,
        serviceId: serviceId,
        characteristicId: read_characteristicId,
        success: function (res) {

          console.log("read成功");
        },
      })
    }
  },
  //接收消息
  ReceiveMessage: function (Callback) {
    var that = this;
    var services = that.CurrentDevice.services;
    //搜索可用特征值
    that.InSerAnch(services, 0, Callback);
  },
  //
  InSerAnch(services, index, Callback) {
    var that = this;
    if (services[index].isPrimary) {
      uni.getBLEDeviceCharacteristics({
        deviceId: that.CurrentDevice.deviceId,
        serviceId: services[index].uuid,
        success: function (res) {
          console.log(services[index].uuid + "特征值=>" + JSON.stringify(res));

          that.CurrentDevice.wri_serviceId = services[index].uuid;
          for (var i = 0; i < res.characteristics.length; i++) {
            var ch = res.characteristics[i];
            if (ch.properties.notify) {
              that.CurrentDevice.notif_characteristicId = ch.uuid;
            }
            if (ch.properties.write) {
              that.CurrentDevice.wri_characteristicId = ch.uuid;
            }
            if (ch.properties.read) {
              that.CurrentDevice.read_characteristicId = ch.uuid;
            }
            var notif_characteristicId = that.CurrentDevice.notif_characteristicId;
            var wri_characteristicId = that.CurrentDevice.wri_characteristicId;
            var read_characteristicId = that.CurrentDevice.read_characteristicId;
            if (
              (wri_characteristicId != null
                && wri_characteristicId != ""
                && wri_characteristicId != undefined)
              &&
              ((notif_characteristicId != null
                && notif_characteristicId != ""
                && notif_characteristicId != undefined) ||
                (read_characteristicId != null
                  && read_characteristicId != ""
                  && read_characteristicId != undefined))) {
              console.log("正在开启消息通知...");
              if (notif_characteristicId != null && notif_characteristicId != "") {
                uni.notifyBLECharacteristicValueChange({
                  deviceId: that.CurrentDevice.deviceId,
                  serviceId: services[index].uuid,
                  characteristicId: notif_characteristicId,
                  state: true,
                  success: function (res) {

                    console.log("开启消息接收成功!"+JSON.stringify(res));
                    uni.onBLECharacteristicValueChange(function (res) {
                      // callback
                      console.log('value change', res)
                      const hex = that.buf2hex(res.value)
                      if (Callback != null) {
                        Callback(res);
                      }
                      console.log('返回的数据：' + JSON.stringify(hex))
                    });

                  },
                  fail: function (res) {
                    console.log("开启消息接收失败!"+JSON.stringify(res));
                  }
                });
              } else {
                uni.readBLECharacteristicValue({
                  deviceId: that.CurrentDevice.deviceId,
                  serviceId: services[index].uuid,
                  characteristicId: read_characteristicId,
                  success: function (res) {
                    console.log("开启消息接收成功!"+JSON.stringify(res));
                    uni.onBLECharacteristicValueChange(function (res) {
                      // callback
                      console.log('value change'+JSON.stringify(res))
                      const hex = that.buf2hex(res.value)
                      if (Callback != null) {
                        Callback(res);
                      }
                      console.log('返回的数据：' + JSON.stringify(hex))
                    });
                  }, fail: function (res) {
                    console.log("readBLECharacteristicValue消息失败");
                  }
                })
              }



              return;
            } else {
              that.CurrentDevice.notif_characteristicId = "";
              that.CurrentDevice.wri_characteristicId = "";
              that.CurrentDevice.wri_serviceId = "";
              index = index + 1;
              console.log("未找到符合条件服务,重新查找...");
              if (index < services.length) {
                that.InSerAnch(services, index, Callback);
              }
            }
          }

        }, fail: function (res) {
          console.log("获取特征值失败" + JSON.stringify(res));
        }
      })
    }
  },
  //服务id
  getServiceId: function (serviceId) {

    var platform = this.CurrentDevice.platform
    //ios 平台 服务id 中字母必须为大写
    if (platform == "ios") {
      return serviceId.toUpperCase();
    }
    else if (platform == "android") {
      //android 平台 服务id 中字母必须为小写
      return serviceId.toLowerCase();
    }
    else {
      return serviceId
    }
  },
  //通知id
  getReceiveId: function (receiveId) {

    var platform = this.CurrentDevice.platform;
    //ios 平台 服务id 中字母必须为大写
    if (platform == "ios") {
      return receiveId.toUpperCase();
    }
    else if (platform == "android") {
      //android 平台 服务id 中字母必须为小写
      return receiveId.toLowerCase();
    }
    else {
      return receiveId
    }
  },
  buf2hex: function (buffer) { // buffer is an ArrayBuffer
    return Array.prototype.map.call(new Uint8Array(buffer), x => ('00' + x.toString(16)).slice(-2)).join('');
  },
  //字符串转arraybuffer
  char2buf: function (str) {
    var out = new ArrayBuffer(str.length * 2);
    var u16a = new Uint16Array(out);
    var strs = str.split("");
    for (var i = 0; i < strs.length; i++) {
      u16a[i] = strs[i].charCodeAt();
    }
    return out;
  },
  //arraybuffer 转字符串
  buf2char: function (buf) {
    var out = "";
    var u16a = new Uint16Array(buf);
    var single;
    for (var i = 0; i < u16a.length; i++) {
      single = u16a[i].toString(16)
      while (single.length < 4) single = "0".concat(single);
      out += "\\u" + single;
    }
    return out//eval("'"+out+ "'");
  },
  //当前连接的设备serviceId 和characteristicId,deviceId
  CurrentDevice: {
    platform: null,//当前平台
    deviceId: null,//蓝牙设备 id 
    services: null,
    characteristics: [],
    wri_serviceId: null,
    wri_characteristicId: null,
    notif_characteristicId: null,
    read_characteristicId: null,
  }

}
//公开对象
module.exports = {
  Xtbluservice: Xtbluservice
};
