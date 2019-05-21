<template>
	<view>
		<canvas style="width:100%;height:60upx;" canvas-id="barcode" />
		<view class="find-list">
			<view>已发现 {{devices.length}} 个外围设备：</view>
			<view v-for="(item,index) in devices" :key="index" @tap="createBLEConnection" :data-device-id="item.deviceId" :data-name="item.name">
				<view>{{item.name}}</view>
				<view>信号强度: {{item.RSSI}}</view>
				<view>UUID:{{item.deviceId}}</view>
				<view>Service数量:{{item.advertisServiceUUIDs.length}}</view>
				<text>{{item.advertisServiceUUIDs}}</text>
			</view>
		</view>
		<view style="margin: 20upx 20upx;" class="sm-btns">
			<button @tap="openBluetoothAdapter" style="margin-bottom: 40upx;" type="primary">开始扫描</button>
			<button @tap="stopBluetoothDevicesDiscovery" type="default">停止扫描</button>
		</view>
		<view v-if="connected">
			<text>已连接到：{{name}}</text>
			<view v-for="(item,index) in chs" :key="index">
				<view>特性UUID: {{item.uuid}}</view>
				<view>特性值: {{item.value}}</view>
			</view>
		</view>
		<view v-if="canWrite" style="margin: 20upx 20upx;" class="sm-btns">
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
	function inArray(arr, key, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][key] === val) {
      return i
    }
  }
  return -1
}
function str2ab(str) {
  // Convert str to ArrayBuff and write to printer
  /* let buffer = new ArrayBuffer(str.length)
  let dataView = new DataView(buffer)
  for (let i = 0; i < str.length; i++) {
    dataView.setUint8(i, str.charAt(i).charCodeAt(0))
  }
  return buffer; */
	var buf = new ArrayBuffer(str.length*2); // 每个字符占用2个字节
var bufView = new Uint16Array(buf);
for (var i=0, strLen=str.length; i<strLen; i++) {
bufView[i] = str.charCodeAt(i);
}
return buf;
}
let tarArr = [];
let dataArr = [];
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
function getImageData(){
	uni.canvasGetImageData({
  canvasId: 'barcode',
  x: 0,
  y: 0,
  width: 100,
  height: 30,
  success(res) {
    //console.log(JSON.stringify(res.data))
		//4合1
			for (let i = 0; i < res.data.length; i++) {
				if (i % 4 == 0) {
					let rule = 0.29900 * res.data[i] + 0.58700 * res.data[i + 1] + 0.11400 * res.data[i + 2];
						if (rule > 200) {
							res.data[i] = 0;
						} else {
							res.data[i] = 1;
						}
						tarArr.push(res.data[i]);
				}	
			}
			//8合1
			for (let k = 0; k < tarArr.length; k += 8) {
				let temp = tarArr[k] * 128 + tarArr[k + 1] * 64 + tarArr[k + 2] * 32 + tarArr[k + 3] * 16 + tarArr[k + 4] * 8 + tarArr[k + 5] * 4 + tarArr[k + 6] * 2 + tarArr[k + 7] * 1
				dataArr.push(temp);
			}
			console.log(dataArr);
			
			
  }
})
}


function Hex2Arry(str) {
    var sa = str.split("%");
    var b = new Uint8Array(sa.length - 1);
    for (var i = 1; i < sa.length; i++) {
        b[i - 1] = parseInt(sa[i], 16);
    }
    return b;
}

const PrinterJobs = require('../../printer/printerjobs')
const printerUtil = require('../../printer/printerutil')
const barcode = require('./barcode')
var Buffer = require('buffer').Buffer;
var toArrayBuffer = require('to-arraybuffer')
const encodeToGb2312 = require('./encodeToGb2312.js');
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
				code: 'AQ4201000878876'
			};
		},
		methods:{
		//初始化蓝牙适配器
		openBluetoothAdapter() {
			getImageData();
			this.devices = [];
			uni.openBluetoothAdapter({
			  success: (res) => {
				console.log('openBluetoothAdapter success', res)
				this.startBluetoothDevicesDiscovery()
			  },
			  fail: (res) => {
				if (res.errCode === 10001) {
				  uni.showModal({
					title: '错误',
					content: '未找到蓝牙设备, 请打开蓝牙后重试。',
					showCancel: false
				  })
				  uni.onBluetoothAdapterStateChange(function (res) {
					console.log('onBluetoothAdapterStateChange'+JSON.stringify(res))
					if (res.available) {
					  this.startBluetoothDevicesDiscovery()
					}
				  })
				}
			  }
			})
			
		  },
		  getBluetoothAdapterState() {
			uni.getBluetoothAdapterState({
			  success: (res) => {
				console.log('getBluetoothAdapterState'+JSON.stringify(res))
				if (res.discovering) {
				  this.onBluetoothDeviceFound()
				} else if (res.available) {
				  this.startBluetoothDevicesDiscovery()
				}
			  }
			})
		  },
		  startBluetoothDevicesDiscovery() {
			/* if (this._discoveryStarted) {
			  return
			}
			this._discoveryStarted = true */
			uni.startBluetoothDevicesDiscovery({
			  allowDuplicatesKey: true,
			  success: (res) => {
				console.log('startBluetoothDevicesDiscovery success'+JSON.stringify(res))
				this.onBluetoothDeviceFound()
			  },
			})
		  },
		  stopBluetoothDevicesDiscovery() {
			uni.stopBluetoothDevicesDiscovery({
			  complete: () => {
				this._discoveryStarted = false
			  }
			})
		  },
		  onBluetoothDeviceFound() {
			  let flag = true;
			  const _this = this;
			  uni.showLoading({
			  	title:'设备扫描中...',
			  	mask:true
			  });
			uni.onBluetoothDeviceFound((res) => {
			  res.devices.forEach(device => {
				if (!device.name && !device.localName) {
				  return
				}
				if(device.name === _this.targetDevice && flag){
					_this.name = device.name;
					_this.devices.push(device);
					flag = false;
					return;
				}
			  })
			  //未搜索到指定设备提示
			  /* if(!_this.devices.length&& flag){
				  flag = false; 
				  uni.showToast({
				  	title:`未搜索到设备${_this.targetDevice}，请开启蓝牙鸭，小老弟`,
					icon:'none',
					duration:3000
				  })
			  } */
			  uni.hideLoading();
			})
		  },
		  createBLEConnection(e) {
			const ds = e.currentTarget.dataset
			const deviceId = ds.deviceId
			const name = ds.name
			uni.showLoading({
				title:'蓝牙服务连接中...',
				mask:true
			});
			uni.createBLEConnection({
			  deviceId,
			  success: () => {
				this.connected = true;
				this.name = name;
				this.deviceId = deviceId;
				uni.showLoading({
					title:'蓝牙服务连接中...',
					mask:true
				})
				this.getBLEDeviceServices(deviceId)
				
			  },
			  complete() {
				uni.hideLoading()
			  }
			})
			
		  },
		  closeBLEConnection() {
			uni.closeBLEConnection({
			  deviceId: this.deviceId
			});
			this.connected = false;
			this.chs = [];
			this.canWrite = false;
		  },
		  getBLEDeviceServices(deviceId) {
			  const _this = this;
			uni.getBLEDeviceServices({
			  deviceId,
			  success: (res) => {
				  console.log(`getBLEDeviceServices:${JSON.stringify(res)}`);
				  if(!res.services.length){
					  uni.showLoading({
						  title:'蓝牙服务连接中...',
						  mask:true
					  });
					  setTimeout(()=>{
						  _this.getBLEDeviceServices(deviceId);
					  },2000);
					  
					  return false;
				  }
				  uni.hideLoading();
				  this.stopBluetoothDevicesDiscovery();
				for (let i = 0; i < res.services.length; i++) {
				  if (res.services[i].isPrimary&&res.services[i].uuid.toUpperCase().indexOf("FEE7") != -1) {
					this.getBLEDeviceCharacteristics(deviceId, res.services[i].uuid)
					return
				  }
				}
			  }
			})
		  },
		  getBLEDeviceCharacteristics(deviceId, serviceId) {
			  const _this = this;
			uni.getBLEDeviceCharacteristics({
			  deviceId,
			  serviceId,
			  success: (res) => {
				console.log(`getBLEDeviceCharacteristics success:${JSON.stringify(res.characteristics)}`)
				for (let i = 0; i < res.characteristics.length; i++) {
				  const item = res.characteristics[i]
				  if (item.properties.read) {
					uni.readBLECharacteristicValue({
					  deviceId,
					  serviceId,
					  characteristicId: item.uuid,
					})
					_this.characteristicId = item.uuid;
				  }
				  if (item.properties.write) {
					this.canWrite = true;
					this._deviceId = deviceId
					this._serviceId = serviceId
					this._characteristicId = item.uuid
					console.log((item.uuid));
					//this.writeBLECharacteristicValue(item.uuid)
				  }
				   
				}
			  },
			  fail(res) {
				console.error('getBLEDeviceCharacteristics'+JSON.stringify(res))
			  }
			})
			
		  },
		  writeBLECharacteristicValue() {
			// eslint-disable-next-line
			console.log(this._deviceId+':'+this._characteristicId);
			let printerJobs = new PrinterJobs();
				printerJobs
				//.model('qsprinter')
				.setAlign('rt')
				//.print('XXX药业有限公司1')
				.setColor(1)
				.print('测试123456','rt')
				
				//.barcode('123456789012')
				//.print(printerUtil.fillLine())
				
				//.barcode('6789452','EAN8',{width:2,height:30})
				  /* .print('XXX药业有限公司')
				  .setAlign('ct')
				  .setSize(2, 2)
				  .print(printerUtil.fillLine())
				  .print(printerUtil.inline('收货人：辣鸡老王', '手机：18999886688'))
				  .setSize(3, 3)
				  .print('地址：广州市白云区石马村88号602房')
				  .print(printerUtil.fillLine())
				  .setSize(1, 1)
				  .print(printerUtil.inline('商品：小儿麻甘颗粒','规格：6g*18袋*100袋'))
				  .print('批号：2019032807')
				  .print('厂家：北京同仁堂')
				  .setAlign('lt') */
				  /* .print(printerUtil.fillLine())
				  .print(printerUtil.fillAround('一号口袋'))
				  .print(printerUtil.inline('意大利茄汁一面 * 1', '15'))
				  .print(printerUtil.fillAround('其他'))
				  .print('餐盒费：1')
				  .print('[赠送康师傅冰红茶] * 1')
				  .print(printerUtil.fillLine())
				  .setAlign('rt')
				  .print('原价：￥16')
				  .print('总价：￥16')
				  .setAlign('lt')
				  .print(printerUtil.fillLine())
				  .print('备注')
				  .print("无")
				  .print(printerUtil.fillLine()) */
				  .println();
			
				let buffer = printerJobs.buffer();
				//let t = str2ab('! 0 200 200 210 1 TEXT 4 0 30 40 Hello World FORM PRINT');
					
				uni.writeBLECharacteristicValue({
				  deviceId: this._deviceId,
				  serviceId: this._serviceId,
				  characteristicId: this._characteristicId,
				  value: buffer,
				  success(res) {
					  console.log(`writeBLECharacteristicValue success:${JSON.stringify(res.errMsg)}`);
					},
					fail(error){
						console.log(`writeBLECharacteristicValue fail:${JSON.stringify(error)}`);
					}
				})
		  },
		  //断开连接
		  closeBluetoothAdapter() {
			uni.closeBluetoothAdapter()
			this._discoveryStarted = false
		  }
		},
		onLoad() {
			//条形码
      barcode.code128(uni.createCanvasContext('barcode'), this.code, 680, 200);
		}	
	}
</script>

<style>

</style>
