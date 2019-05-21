<template>
    <view class="ly-wrap">
        <canvas style="width:100%;height:60upx;" canvas-id="barcode" />
        <view class="find-list">
            <view>已发现 {{devices.length}}个外围设备：</view>
            <view v-for="(item,index) in devices" :key="index" @tap="createBLEConnection" :data-device-id="item.deviceId" :data-name="item.name">
                <view>{{item.name}}</view>
                <view>信号强度: {{item.RSSI}}</view>
                <view>UUID:{{item.deviceId}}</view>
                <view>Service数量:{{item.advertisServiceUUIDs.length}}</view>
                <text>{{item.advertisServiceUUIDs}}</text>
            </view>
        </view>
        <view style="margin: 20upx 0;" class="sm-btns">
            <button @tap="openBluetoothAdapter" style="margin-bottom: 40upx;" type="primary">开始扫描</button>
            <button @tap="closeBluetoothAdapter" type="default">关闭蓝牙设备器</button>
        </view>
        <view v-if="connected">
            <text>已连接到：{{name}}</text>
            <view v-for="(item,index) in chs" :key="index">
                <view>特性UUID: {{item.uuid}}</view>
                <view>特性值: {{item.value}}</view>
            </view>
        </view>
        <view v-if="canWrite" style="margin: 20upx 0;" class="sm-btns">
            <button  @tap="writeBLECharacteristicValue" style="margin-bottom: 40upx;" type="primary">写入数据</button>
            <button @tap="closeBLEConnection" type="default">断开连接</button>
        </view>
        <view v-for="(item,index) in chs" :key="index" style="font-size: 12px; margin-top: 10px;">
          <view>特性UUID: {{item.uuid}}</view>
          <view>特性值: {{item.value}}</view>
        </view>
    </view>
</template>

<script>
// ArrayBuffer转16进度字符串示例
function ab2hex(buffer) {
  const hexArr = Array.prototype.map.call(
    new Uint8Array(buffer),
    function (bit) {
      return ('00' + bit.toString(16)).slice(-2)
    }
  )
  return hexArr.join('')
}
//条形码生成库
const barcode = require('./barcode')
const gb2312ToBase64 = require('./libs/gb2312ToBase64');
const CryptoJS = require('crypto-js');
//const QRPrinter = require('./QRPrinter.js')
const iconv = require('iconv-lite');
    export default {
        data() {
            return {
                devices: [],
                connected: false,
                chs: [],
                canWrite:false,
                name:'',
                services:[],
                targetDevice:'QR-386A-232B-LE',
                code: 'AQ4201000878876',
                serviceId: "",
                connectedDeviceId: "", //已连接设备uuid
                readCharacteristic: "",
                writeCharacteristic: "",
                glbCmd:""
            };
        },
        methods:{
        //初始化蓝牙适配器
        openBluetoothAdapter() {
            const _this = this;
            _this.devices = [];
                // 初始化蓝牙适配器
                wx.openBluetoothAdapter({
                  success: function (res) {
                    console.log(res.errMsg);
                    // success toast
                    wx.showToast({
                      title: "设备搜索中，请骚等",
                      icon:'none',
                      mask:true,
                      duration:10000
                    });
                    //开始搜寻附近的蓝牙外围设备
                    wx.startBluetoothDevicesDiscovery({
                      success(res) {
                        console.log(JSON.stringify(res));
                        
                        //监听寻找到新设备的事件
                        wx.onBluetoothDeviceFound(function (newDevices) {
                          //遍历已搜索到的蓝牙设备
                          const devicesList = newDevices.devices;
                                devicesList.map((item)=>{
                                    //找到指定设备 QR-386A-232B-LE
                                    if(item.name.indexOf('QR')>-1&&item.localName){
                                        console.log(JSON.stringify(item));
                                        _this.devices.push(item);
                                        //关闭搜索toast
                                        wx.hideToast();
                                        
                                        //关闭蓝牙搜索
                                        /* wx.stopBluetoothDevicesDiscovery({
                                          success(res) {
                                            console.log(JSON.stringify(res));
                                          }
                                        }); */
                                        
                                    }
                                });
                        });
                        
                      }
                    });
                  }
                });
                // 获取本机蓝牙适配器状态
                wx.getBluetoothAdapterState({
                  success: function (res) {
                    console.log("适配器状态:"+JSON.stringify(res.errMsg));
                  }
                });
                //监听蓝牙适配器状态变化事件
                wx.onBluetoothAdapterStateChange(function (res) {
                  console.log(`adapterState changed, now is:${JSON.stringify(res)}`)
                });
        },
        //创建链接
        createBLEConnection(e) {
            //设备已连接
            if(this.connected){
                wx.showToast({
                  title: "设备已连接",
                  icon:'none',
                  mask:true,
                  duration:1000
                });
                return false;
            }else{
							uni.showToast({
								title: '连接蓝牙...',
								icon: 'loading',
								duration: 99999
							});
						}
            const deviceId = e.currentTarget.dataset.deviceId;
            const _this = this;
            //已连接的设备名称
            _this.name = e.currentTarget.dataset.name;
            //连接设备
            wx.createBLEConnection({
              // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接
              deviceId,
              success(res) {
											uni.hideToast();
                      //成功连接设备提示
                      wx.showToast({
                        title: `已成功连接设备:${deviceId}`,
                        icon:'none',
                        mask:true,
                        duration:1000
                      });
                    //console.log(`已成功连接设备:${deviceId}`);
                    _this.connectedDeviceId = deviceId;
                    _this.connected = true;
                    _this.canWrite = true;
                    // 获取蓝牙设备所有characteristic(特征值)
                    setTimeout(function () {
                      _this.servicefunction();
                    }, 1000)
              },
              fail(err) {
                console.log(`连接失败:${JSON.stringify(err)}`);
              }
            });
        },
        //获取蓝牙设备所有characteristic(特征值)
        servicefunction(){
            const _this = this;
            console.log("servicefunction:"+_this.connectedDeviceId+'---'+_this.serviceId);
            wx.getBLEDeviceServices({
              deviceId: _this.connectedDeviceId,
              success: function (res) {
                console.log(JSON.stringify(res));
                for (var i = 0; i < res.services.length; i++) {
                  console.log(res.services[i].uuid)
                  if ((res.services[i].uuid.indexOf("49535343-fe7d-4ae5-8fa9-9fafd205e455") != -1) || (res.services[i].uuid.indexOf("49535343-FE7D-4AE5-8FA9-9FAFD205E455") != -1)) {
                    _this.serviceId = res.services[i].uuid;
                    console.log(res.services[i].uuid);
                  }
                }
                    /* console.log(_this.serviceId);
                    wx.showToast({
                      title: "获取service（服务）成功",
                      duration: 1000,
                      icon:"none"
                    }); */
              }
            })
            // 获取蓝牙设备所有characteristic(特征值)
            setTimeout(function () {
                  wx.getBLEDeviceCharacteristics({
                    deviceId: _this.connectedDeviceId,
                    serviceId: _this.serviceId,
                    success: function (res) {
                          wx.showToast({
                            title: "获取特征值成功",
                            duration: 1000,
                            icon:"none"
                          });
                          //   || res.characteristics[i].uuid.indexOf('1E4D') > 0 || res.characteristics[i].uuid.indexOf('1e4d') > 0
                          for (var i = 0; i < res.characteristics.length; i++) {
                                const item = res.characteristics[i];
                                //console.log(JSON.stringify(item))
                                // lif (res.characteristics[i].uuid.indexOf('FFF1') > 0 || res.characteristics[i].uuid.indexOf('fff1') > 0  )
                                if (res.characteristics[i].uuid.indexOf('49535343-1E4D-4BD9-BA61-23C647249616') != -1 || res.characteristics[i].uuid.indexOf('49535343-1e4d-4bd9-ba61-23c647249616') != -1) {
                                    _this.readCharacteristic = res.characteristics[i].uuid;
                                    //读取低功耗蓝牙设备的特征值的二进制数据值
                                    /* wx.readBLECharacteristicValue({
                                        deviceId: _this.connectedDeviceId,
                                        serviceId: _this.serviceId,
                                        characteristicId: _this.readCharacteristic,
                                        success: function (res) {
                                            console.log('readBLECharacteristicValue:'+JSON.stringify(res));
                                        }
                                    }); */
                                }
                                //res.characteristics[i].uuid.indexOf('8841') > 0
                                // if (res.characteristics[i].uuid.indexOf('FFF2') > 0 || res.characteristics[i].uuid.indexOf('fff2') > 0 ) 
                                if (res.characteristics[i].uuid.indexOf('49535343-aca3-481c-91ec-d85e28a60318') != -1 || res.characteristics[i].uuid.indexOf('49535343-ACA3-481C-91EC-D85E28A60318') != -1) {
                                    _this.writeCharacteristic = res.characteristics[i].uuid;
                                    //_this.writeBLECharacteristicValue();
                                }
                                if (item.properties.notify || item.properties.indicate) {
                                    wx.notifyBLECharacteristicValueChange({
                                      deviceId:_this.connectedDeviceId,
                                      serviceId:_this.serviceId,
                                      characteristicId: item.uuid,
                                      state: true,
                                      success(res) {
                                        console.log('notifyBLECharacteristicValueChange success:'+JSON.stringify(res.errMsg));
                                        //监听低功耗蓝牙设备的特征值变化事件。必须先启用 notifyBLECharacteristicValueChange 接口才能接收到设备推送的 notification
                                        wx.onBLECharacteristicValueChange(function (res) {
                                          console.log(ab2hex(res.value));
                                          /* console.log('characteristic value comed:');
                                                let buffer = res.value;
                                                let dataView = new DataView(buffer);
                                                let dataResult = [];
                                                //console.log("拿到的数据");
                                                console.log("dataView.byteLength:"+dataView.byteLength)
                                                for (let i = 0; i < dataView.byteLength; i++) {
                                                    console.log("0x" + dataView.getUint8(i).toString(16))
                                                    dataResult.push(dataView.getUint8(i).toString(16))
                                                }
                                                console.log(JSON.stringify(dataResult)); */
                                        }); 
                                      },
                                      fail(res) {
                                        console.log(JSON.stringify(res));
                                      },
                                      complete(){
                                        
                                      }
                                    });
                                 }
                          }
                            console.log(_this.readCharacteristic);
                            console.log(_this.writeCharacteristic);
                        },
                        fail: function (res) {
                          console.log(JSON.stringify(res));
                        }
                  });
            }, 1000);
        },
        //写入数据
        writeBLECharacteristicValue() {
                
                /* const buffs = '! 0 200 200 400 1 \n\r'
                + 'TEXT 4 0 0 0 同仁堂药业有限公司 \n\r'
                + 'SETBOLD 0 \n\r'
                + 'TEXT 24 10 10 60 收货人：刘小三 \n\r'
                + 'SETBOLD 0 \n\r'
                + 'TEXT 24 10 210 60 手机：13316246506 \n\r'
                + 'SETBOLD 0 \n\r'
                + 'TEXT 24 10 10 94 地址：广州市白云区石马村88号602房 \n\r'
                + 'SETBOLD 1 \n\r'
                + 'TEXT 1 0 10 144 第49件/共1500件 \n\r'
                + 'BARCODE 128 1 1 50 0 188 123456789 \n\r'
                + 'SETBOLD 0 \n\r'
                + 'TEXT 3 0 0 284 XX健康药业(广州)有限公司 \n\r'
                + 'SETBOLD 0 \n\r'
                + 'TEXT 55 0 10 324 发货人：王祖2 \n\r'
                + 'SETBOLD 0 \n\r'
                + 'TEXT 55 0 10 350 发货时间：2019-04-16 13:30:20 \n\r'
                + 'PRINT \n\r'; */
                
                
                const _this = this;
                ///const temp = 'ISAwIDIwMCAyMDAgMTQyMCAxIApQQUdFLVdJRFRIIDYwMCAKQk9YIDAgMCA1NzUgNjY0IDIgCkxJTkUgMCA5MiA1NzUgOTIgMiAKTElORSAwIDE3OCA1NzUgMTc4IDIgCkxJTkUgMCAyNTggNTc1IDI1OCAyIApMSU5FIDAgNDMwIDUyNiA0MzAgMiAKTElORSAwIDU3MCA1MjYgNTcwIDIgCkxJTkUgNTIgMjU4IDUyIDU3MCAyIApMSU5FIDUyNiAyNTggNTI2IDY2NCAyIApCIDEyOCAxIDIgNTAgMzAwIDE2IDIyMDE3NDQ5OTE5OCAKVU5ERVJMSU5FIE9GRiAKU0VUQk9MRCAwIApTRVRNQUcgMSAxIApURVhUIDI0IDAgMzQ0IDY4IDIyMDE3NDQ5OTE5OCAKVU5ERVJMSU5FIE9GRiAKU0VUQk9MRCAwIApTRVRNQUcgMiAyIApURVhUIDI0IDAgMTYgMTEyIMfgxtYzMDMgMDcxIDY4NiAKVU5ERVJMSU5FIE9GRiAKU0VUQk9MRCAwIApTRVRNQUcgMiAyIApURVhUIDI0IDAgMTYgMTk4IMfgxtbH+MTasPwgClVOREVSTElORSBPRkYgClNFVEJPTEQgMCAKU0VUTUFHIDEgMSAKVEVYVCAyNCAwIDEyIDI5MCDK1SAKVU5ERVJMSU5FIE9GRiAKU0VUQk9MRCAwIApTRVRNQUcgMSAxIApURVhUIDI0IDAgMTIgMzU0ILz+IApVTkRFUkxJTkUgT0ZGIApTRVRCT0xEIDAgClNFVE1BRyAxIDEgClRFWFQgMjQgMCAxMiA0NjIgt6IgClVOREVSTElORSBPRkYgClNFVEJPTEQgMCAKU0VUTUFHIDEgMSAKVEVYVCAyNCAwIDEyIDUxMCC8/iAKVU5ERVJMSU5FIE9GRiAKU0VUQk9MRCAxIApTRVRNQUcgMSAxIApURVhUIDQgMCA3MiAyODIg19yyv7LiytTK1bz+IDE1MjQwNTUwMDg0IApVTkRFUkxJTkUgT0ZGIApTRVRCT0xEIDEgClNFVE1BRyAxIDEgClRFWFQgNCAwIDcyIDMxNCDJz7qjyc+6o8rQx+DG1sf4ClVOREVSTElORSBPRkYgClNFVEJPTEQgMSAKU0VUTUFHIDEgMSAKVEVYVCA0IDAgNzIgMzQ2INbYuczV8tXU1ti5q8K3MTg4OLrFIApVTkRFUkxJTkUgT0ZGIApTRVRCT0xEIDAgClNFVE1BRyAxIDEgClRFWFQgMjQgMCA3MiA0NTQg19yyv7LiytQgMTUyNDA1NTAwODQgClVOREVSTElORSBPRkYgClNFVEJPTEQgMCAKU0VUTUFHIDEgMSAKVEVYVCAyNCAwIDcyIDQ4NiDJvc73yqHUy7PHytDB2eKiz9gKVU5ERVJMSU5FIE9GRiAKU0VUQk9MRCAwIApTRVRNQUcgMSAxIApURVhUIDI0IDAgNzIgNTEwIMHZ4qLG+7O11b4gClVOREVSTElORSBPRkYgClNFVEJPTEQgMCAKU0VUTUFHIDEgMSAKVEVYVCAyNCAwIDUzNyAzNjIgxckgClVOREVSTElORSBPRkYgClNFVEJPTEQgMCAKU0VUTUFHIDEgMSAKVEVYVCAyNCAwIDUzNyA0MTggvP4gClVOREVSTElORSBPRkYgClNFVEJPTEQgMCAKU0VUTUFHIDEgMSAKVEVYVCAyNCAwIDUzNyA0NjYgwaogCkxJTkUgMTI4IDU3MCAxMjggNjY0IDIgClVOREVSTElORSBPRkYgClNFVEJPTEQgMCAKU0VUTUFHIDEgMSAKVEVYVCAyNCAwIDE2IDU4MiC08tOhyNXG2iAKVU5ERVJMSU5FIE9GRiAKU0VUQk9MRCAwIApTRVRNQUcgMSAxIApURVhUIDU1IDAgMTYgNjE0IDIwMTctMTAtMjAgClVOREVSTElORSBPRkYgClNFVEJPTEQgMCAKU0VUTUFHIDEgMSAKVEVYVCA1NSAwIDEyIDYzMCAwNDQxMDAwMDA2IApVTkRFUkxJTkUgT0ZGIApTRVRCT0xEIDAgClNFVE1BRyAxIDEgClRFWFQgMjQgMCAxNDAgNTg2IMepytXIyy/HqcrVyrG85CAKVU5ERVJMSU5FIE9GRiAKU0VUQk9MRCAwIApTRVRNQUcgMSAxIApURVhUIDU1IDAgMTQwIDYxOCAKxPq1xMep19a0+rHtxPrS0dHpytW0y7D8ufwssqLIt8jPyczGt9DFz6LO3s7zLCAKVU5ERVJMSU5FIE9GRiAKU0VUQk9MRCAwIApTRVRNQUcgMSAxIApURVhUIDU1IDAgMTQwIDYzNCAKsPzXsM3qusMszt67rrrbLMbGy/C1yLHtw+bWysG/zsrM4iAKVU5ERVJMSU5FIE9GRiAKU0VUQk9MRCAwIApTRVRNQUcgMSAxIApURVhUIDI0IDAgNDMwIDYwNiAKVEVYVCAyNCAwIDQzMCA2MzYg1MIgClVOREVSTElORSBPRkYgClNFVEJPTEQgMCAKU0VUTUFHIDEgMSAKVEVYVCAyNCAwIDQ5MCA2MDYgClRFWFQgMjQgMCA0OTAgNjM2IMjVIApCT1ggMCA2OTYgNTc1IDk2OCAyIApMSU5FIDAgNzkyIDU3NSA3OTIgMiAKTElORSAwIDkyMCA1MjYgOTIwIDIgCkxJTkUgMjY0IDc5MiAyNjQgOTIwIDIgCkxJTkUgNTI2IDc5MiA1MjYgOTY4IDIgCkIgMTI4IDEgMiAzNiAzMDAgNzEyIDIyMDE3NDQ5OTE5OCAKVU5ERVJMSU5FIE9GRiAKU0VUQk9MRCAwIApTRVRNQUcgMSAxIApURVhUIDU1IDAgMzI4IDc1MCAyMjAxNzQ0OTkxOTggClVOREVSTElORSBPRkYgClNFVEJPTEQgMCAKU0VUTUFHIDEgMSAKVEVYVCA1NSAwIDE2IDgwNiDK1bz+IApVTkRFUkxJTkUgT0ZGIApTRVRCT0xEIDAgClNFVE1BRyAxIDEgClRFWFQgNTUgMCAxNiA4MzIg19yyv7LiytTK1bz+IDE1MjQwNTUwMDg0IApVTkRFUkxJTkUgT0ZGIApTRVRCT0xEIDAgClNFVE1BRyAxIDEgClRFWFQgNTUgMCAxNiA4NTggyc+6o8nPuqPK0MfgxtbH+ApVTkRFUkxJTkUgT0ZGIApTRVRCT0xEIDAgClNFVE1BRyAxIDEgClRFWFQgNTUgMCAxNiA4NzQg1ti5zNXy1dTW2LmrwrcxODg4usUgClVOREVSTElORSBPRkYgClNFVEJPTEQgMCAKU0VUTUFHIDEgMSAKVEVYVCA1NSAwIDI4MCA4MDYgt6K8/iAKVU5ERVJMSU5FIE9GRiAKU0VUQk9MRCAwIApTRVRNQUcgMSAxIApURVhUIDU1IDAgMjgwIDgzMiDX3LK/suLK1CAxNTI0MDU1MDA4NCAKVU5ERVJMSU5FIE9GRiAKU0VUQk9MRCAwIApTRVRNQUcgMSAxIApURVhUIDU1IDAgMjgwIDg1OCDJvc73yqHUy7PHytDB2eKiz9gKVU5ERVJMSU5FIE9GRiAKU0VUQk9MRCAwIApTRVRNQUcgMSAxIApURVhUIDU1IDAgMjgwIDg3NCDB2eKixvuztdW+IApVTkRFUkxJTkUgT0ZGIApTRVRCT0xEIDAgClNFVE1BRyAxIDEgClRFWFQgMjQgMCA1MzcgODA4IL/NIApVTkRFUkxJTkUgT0ZGIApTRVRCT0xEIDAgClNFVE1BRyAxIDEgClRFWFQgMjQgMCA1MzcgODQwILunIApVTkRFUkxJTkUgT0ZGIApTRVRCT0xEIDAgClNFVE1BRyAxIDEgClRFWFQgMjQgMCA1MzcgODY0IMGqIApVTkRFUkxJTkUgT0ZGIApTRVRCT0xEIDAgClNFVE1BRyAxIDEgClRFWFQgMjQgMCAxNiA5MzYgzu/Gt6O6zsS8/iAxa2cgMNSqIApCT1ggNDA2IDkzMSA1MTAgOTYyIDIgClVOREVSTElORSBPRkYgClNFVEJPTEQgMCAKU0VUTUFHIDEgMSAKVEVYVCAyNCAwIDQyMyA5Mzcg0tHR6crTIApCT1ggMCA5OTggNTc1IDE0MDAgMiAKTElORSAwIDEwNzggNTc1IDEwNzggMiAKTElORSAwIDEyMTQgNTI2IDEyMTQgMiAKTElORSAwIDEzNTAgNTI2IDEzNTAgMiAKTElORSA1MiAxMDc4IDUyIDEzNTAgMiAKTElORSA1MjYgMTA3OCA1MjYgMTQwMCAyIApCIDEyOCAxIDIgMzYgMzAwIDEwMTQgMjIwMTc0NDk5MTk4IApVTkRFUkxJTkUgT0ZGIApTRVRCT0xEIDAgClNFVE1BRyAxIDEgClRFWFQgNTUgMCAzMjggMTA1MiAyMjAxNzQ0OTkxOTggClVOREVSTElORSBPRkYgClNFVEJPTEQgMCAKU0VUTUFHIDEgMSAKVEVYVCAyNCAwIDEyIDExMTAgytUgClVOREVSTElORSBPRkYgClNFVEJPTEQgMCAKU0VUTUFHIDEgMSAKVEVYVCAyNCAwIDEyIDExNTggvP4gClVOREVSTElORSBPRkYgClNFVEJPTEQgMCAKU0VUTUFHIDEgMSAKVEVYVCAyNCAwIDEyIDEyNDYgt6IgClVOREVSTElORSBPRkYgClNFVEJPTEQgMCAKU0VUTUFHIDEgMSAKVEVYVCAyNCAwIDEyIDEyOTQgvP4gClVOREVSTElORSBPRkYgClNFVEJPTEQgMCAKU0VUTUFHIDEgMSAKVEVYVCAyNCAwIDcyIDEwOTUg19yyv7LiytTK1bz+IDE1MjQwNTUwMDg0IApVTkRFUkxJTkUgT0ZGIApTRVRCT0xEIDAgClNFVE1BRyAxIDEgClRFWFQgMjQgMCA3MiAxMTI3IMnPuqPJz7qjytDH4MbWx/gKVU5ERVJMSU5FIE9GRiAKU0VUQk9MRCAwIApTRVRNQUcgMSAxIApURVhUIDI0IDAgNzIgMTE1MSDW2LnM1fLV1NbYuavCtzE4ODi6xSAKVU5ERVJMSU5FIE9GRiAKU0VUQk9MRCAwIApTRVRNQUcgMSAxIApURVhUIDI0IDAgNzIgMTIzMSDX3LK/suLK1CAxNTI0MDU1MDA4NCAKVU5ERVJMSU5FIE9GRiAKU0VUQk9MRCAwIApTRVRNQUcgMSAxIApURVhUIDI0IDAgNzIgMTI2MyDJvc73yqHUy7PHytDB2eKiz9gKVU5ERVJMSU5FIE9GRiAKU0VUQk9MRCAwIApTRVRNQUcgMSAxIApURVhUIDI0IDAgNzIgMTI4NyDB2eKixvuztdW+IApVTkRFUkxJTkUgT0ZGIApTRVRCT0xEIDAgClNFVE1BRyAxIDEgClRFWFQgMjQgMCA1MzcgMTE2MiC8xCAKVU5ERVJMSU5FIE9GRiAKU0VUQk9MRCAwIApTRVRNQUcgMSAxIApURVhUIDI0IDAgNTM3IDEyMTggvP4gClVOREVSTElORSBPRkYgClNFVEJPTEQgMCAKU0VUTUFHIDEgMSAKVEVYVCAyNCAwIDUzNyAxMjY2IMGqIApVTkRFUkxJTkUgT0ZGIApTRVRCT0xEIDAgClNFVE1BRyAxIDEgClRFWFQgMjQgMCAyMCAxMzYzIM7vxrejus7EvP4gMWtnIDDUqiAgCkJPWCA0MDYgMTM1OCA1MTAgMTM5MiAyIApVTkRFUkxJTkUgT0ZGIApTRVRCT0xEIDAgClNFVE1BRyAxIDEgClRFWFQgMjQgMCA0MjMgMTM2MyDS0dHpytMgClBSSU5UIAoO';
                
                /* const base64 = iconv.encode(buffs,'gb2312');
                const tempMsg = base64.toString('base64'); */
                
                
                setTimeout(()=>{
                    const buffs = '! 0 200 200 500 1 \n'
                    +'PAGE-HEIGHT 500 \n'
                    + 'TEXT 4 0 0 0 同仁堂药业有限公司 \n'
                    + 'SETBOLD 0 '
                    + 'TEXT 1 0 0 50 收货人：黄某杰 \n'
                    + 'SETBOLD 0 '
                    + 'TEXT 1 0 0 90 手机：13211111111 \n'
                    + 'SETBOLD 0 '
                    + 'TEXT 1 0 0 120 地址：广州市白云区石马村88号602房 \n'
                    + 'SETBOLD 0 '
                    + 'TEXT 1 0 0 150 商品：小儿麻甘颗粒 \n'
                    + 'SETBOLD 0 '
                    + 'TEXT 1 0 0 180 规格：6g*18袋*100袋 \n'
                    + 'SETBOLD 0 '
                    + 'TEXT 1 0 0 210 批号：2019041607 \n'
                    + 'SETBOLD 0 '
                    + 'TEXT 1 0 0 240 厂家：北京康帝尼药业有限 \n'
                    + 'SETBOLD 1 '
                    + 'TEXT 1 0 0 280 第49件/共1500件 \n'
                    + 'BARCODE 128 1 1 50 0 310 123456789 \n'
                    + 'SETBOLD 0 '
                    + 'TEXT 20 0 0 370 XX健康药业(广州)有限公司 \n'
                    + 'SETBOLD 0 '
                    + 'TEXT 3 0 0 400 发货人：辣鸡王 \n'
                    + 'SETBOLD 0 '
                    + 'TEXT 3 0 0 424 发货时间：2019-04-16 13:30:20 \n'
                    + 'PRINT \n';
                    /* const buffs = '! 0 200 200 400 1 \n'
                    +'TEXT 4 0 0 0 同仁堂药业有限公司 \n'
                    +'SETBOLD 0 \n'
                    +'TEXT 24 10 10 60 收货人：刘小三 \n'
                    +'SETBOLD 0 \n'
                    +'TEXT 24 10 210 60 手机：13316246506 \n'
                    +'SETBOLD 0 \n'
                    +'TEXT 24 10 10 94 地址：广州市白云区石马村88号602房 \n'
                    +'SETBOLD 1 \n'
                    +'TEXT 1 0 10 144 第49件/共1500件 \n'
                    +'BARCODE 128 1 1 50 0 188 123456789 \n'
                    +'SETBOLD 0 \n'
                    +'TEXT 3 0 0 284 XX健康药业(广州)有限公司 \n'
                    +'SETBOLD 0 \n'
                    +'TEXT 55 0 10 324 发货人：王祖2 \n'
                    +'SETBOLD 0 \n'
                    +'TEXT 55 0 10 350 发货时间：2019-04-16 13:30:20 \n'
                    +'PRINT \n' */
                    /* const tempMsg = gb2312ToBase64.encode64(buffs); */
                    const base64 = gb2312ToBase64.encode64(buffs)||iconv.encode(buffs,'gb2312');
                    console.log(base64);
                    /* return false;
                    const tempMsg = base64.toString('base64');
                    console.log((tempMsg)); */
                    //console.log(gb2312ToBase64.decode64(tempMsg));
                    //let a = 'ISAwIDIwMCAyMDAgNDAwIDEgClRFWFQgNCAwIDAgMCDlkIzku4HloILoja/kuJrmnInpmZDlhazlj7ggClNFVEJPTEQgMCAKVEVYVCAyNCAxMCAxMCA2MCDmlLbotKfkurrvvJrliJjlsI/kuIkgIApTRVRCT0xEIDAgIApURVhUIDI0IDEwIDIxMCA2MCDmiYvmnLrvvJoxMzMxNjI0NjUwNiAKU0VUQk9MRCAwICAKVEVYVCAyNCAxMCAxMCA5NCDlnLDlnYDvvJrlub/lt57luILnmb3kupHljLrnn7PpqazmnZE4OOWPtzYwMuaIvyAKU0VUQk9MRCAxIApURVhUIDEgMCAxMCAxNDQg56ysNDnku7Yv5YWxMTUwMOS7tiAKQkFSQ09ERSAxMjggMSAxIDUwIDAgMTg4IDEyMzQ1Njc4OSAKU0VUQk9MRCAwIApURVhUIDMgMCAwIDI4NCBYWOWBpeW6t+iNr+S4mijlub/lt54p5pyJ6ZmQ5YWs5Y+4IApTRVRCT0xEIDAgClRFWFQgNTUgMCAxMCAzMjQg5Y+R6LSn5Lq677ya546L56WWMiAKU0VUQk9MRCAwIApURVhUIDU1IDAgMTAgMzUwIOWPkei0p+aXtumXtO+8mjIwMTktMDQtMTYgMTM6MzA6MjAgClBSSU5UIA==';
                    
                    
                    const arrayBuffer = wx.base64ToArrayBuffer(base64||tempMsg);
                    console.log(JSON.stringify(arrayBuffer));
                    let dataView1 = new DataView(arrayBuffer);
                    let dataLength = dataView1.byteLength;
                    
                    const size = 400;
                    const package_count = Math.round(dataLength / size + 0.5);
                    _this.writeFuction(_this, dataView1.buffer, package_count, size);
                },1000);
                
        },
        //写入函数
        writeFuction(that, data, count, size) {
            console.log(data.byteLength)
            /* let tbuffer = data;
            let dataView = new DataView(tbuffer);
            let dataResult = [];
            //console.log("拿到的数据");
            console.log("dataView.byteLength:"+dataView.byteLength)
            for (let i = 0; i < dataView.byteLength; i++) {
                //console.log("0x" + dataView.getUint8(i).toString(16))
                dataResult.push(dataView.getUint8(i).toString(16))
            }
            //console.log(JSON.stringify(dataResult));
            let tBuffer = new Uint8Array(dataResult).buffer;
            console.log(JSON.stringify(tBuffer));
            const _this = this;
            //向低功耗蓝牙设备特征值中写入二进制数据。注意：必须设备的特征值支持 write 才可以成功调用
            wx.writeBLECharacteristicValue({
              // 这里的 deviceId 需要在上面的 getBluetoothDevices 或 onBluetoothDeviceFound 接口中获取
              deviceId: that.connectedDeviceId,
              // 这里的 serviceId 需要在上面的 getBLEDeviceServices 接口中获取
              serviceId: that.serviceId,
              // 这里的 characteristicId 需要在上面的 getBLEDeviceCharacteristics 接口中获取
              characteristicId: that.writeCharacteristic,
              // 这里的value是ArrayBuffer类型
              value: data,
              // value: arrayBuffer,
              success: function (res) {
                console.log(JSON.stringify(res)+'---count:'+count);
                if (count != 0) {
                  console.log(tBuffer.byteLength);
                  that.writeFuction(that, data, count, size);
                } else {
                  wx.showToast({
                    title: "write",
                    duration: 500
                  })
                }
              },
              fail(error) {
                  console.log('---count:'+count);
                console.log(JSON.stringify(error));
              },
              complete: function (res) {
                //console.log(JSON.stringify(res));
              }
            });
            return false; */
            
            // console.log("writeFuction")
            let dataView_temp1 = new DataView(data);
            var packages = Math.round(dataView_temp1.byteLength / size + 0.5);
            var yushu = dataView_temp1.byteLength % size;
            // console.log("the yushu is " + yushu)

            let buffer = null;
            let dataView_temp2 = null;

            // console.log(dataView1.getUint8(i))
            if (yushu != 0 && count == 1) {
                  buffer = new ArrayBuffer(yushu);
                  dataView_temp2 = new DataView(buffer);
                  // console.log(" yushu the packages is " + packages)
                  // console.log("yushu the count is " + count)
                  for (var i = 0; i < dataView_temp2.byteLength; i++) {
                    dataView_temp2.setUint8(i, dataView_temp1.getUint8((packages - count) * size + i));
                    // console.log("yushu the index is " + ((packages - count) * size + i))
                  }
            } else {
                  buffer = new ArrayBuffer(size)
                  dataView_temp2 = new DataView(buffer)
                  for (var i = 0; i < dataView_temp2.byteLength; i++) {
                    // console.log("the packages is " + packages)
                    // console.log("the count is " + count)
                    dataView_temp2.setUint8(i, dataView_temp1.getUint8((packages - count) * size + i))
                    // console.log("the index is " + ((packages - count) * size + i))
                  }
            }
            //向低功耗蓝牙设备特征值中写入二进制数据。注意：必须设备的特征值支持 write 才可以成功调用
            wx.writeBLECharacteristicValue({
              // 这里的 deviceId 需要在上面的 getBluetoothDevices 或 onBluetoothDeviceFound 接口中获取
              deviceId: that.connectedDeviceId,
              // 这里的 serviceId 需要在上面的 getBLEDeviceServices 接口中获取
              serviceId: that.serviceId,
              // 这里的 characteristicId 需要在上面的 getBLEDeviceCharacteristics 接口中获取
              characteristicId: that.writeCharacteristic,
              // 这里的value是ArrayBuffer类型
              value: buffer,
              // value: arrayBuffer,
              success: function (res) {
                  console.log(JSON.stringify(res));
                if (count != 0) {
                    //count = count-1;
                  that.writeFuction(that, data, count, size);
                } else {
                  wx.showToast({
                    title: "write",
                    duration: 500
                  });
                }
              },
              fail(error) {
                console.log('count:'+count);
                console.log(JSON.stringify(error));
              },
              complete: function (res) {
                //console.log(JSON.stringify(res));
              }
            });
            count--;
            return 0;
        },
        string2buffer: function (str) {
            // 首先将字符串转为16进制
            let val = ""
            for (let i = 0; i < str.length; i++) {
              if (val === '') {
                val = str.charCodeAt(i).toString(16)
              } else {
                val += ',' + str.charCodeAt(i).toString(16)
              }
            }
            // 将16进制转化为ArrayBuffer
            return new Uint8Array(val.match(/[\da-f]{2}/gi).map(function (h) {
              return parseInt(h, 16)
            })).buffer
          },
        //关闭连接
        closeBLEConnection() {
            //QRPrinter.disconnect();
            const deviceId = this.connectedDeviceId;
            const _this = this;
            wx.closeBLEConnection({
              deviceId,
              success(res) {
                //console.log(JSON.stringify(res));
                _this.connected = false;
                _this.canWrite = false;
                wx.showToast({
                  title: `设备:${deviceId}已断开`,
                  icon:'none',
                  mask:true,
                  duration:1000
                });
                _this.devices = [];
              }
            });
        },
            //断开连接
            closeBluetoothAdapter() {
                wx.closeBluetoothAdapter()
                this._discoveryStarted = false;
                this.connected = false;
                this.canWrite = false;
                this.devices = [];
            } 
        },
        onLoad() {
            //条形码
            //barcode.code128(wx.createCanvasContext('barcode'), this.code, 680, 200);
            /* this.closeBLEConnection();
            this.closeBluetoothAdapter(); */
        },
        onShow() {
            
        }
    }
</script>

<style>
.ly-wrap{
    padding:0 30upx;
}
</style>
