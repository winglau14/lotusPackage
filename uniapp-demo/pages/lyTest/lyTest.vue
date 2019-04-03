<template>
	<view>
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
  let buffer = new ArrayBuffer(str.length)
  let dataView = new DataView(buffer)
  for (let i = 0; i < str.length; i++) {
    dataView.setUint8(i, str.charAt(i).charCodeAt(0))
  }
  return buffer;
}

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
/* var _service = require('./blueservice.js');
var _ble = new _service.Xtbluservice(); */
const PrinterJobs = require('../../printer/printerjobs')
const printerUtil = require('../../printer/printerutil')


	export default {
		data() {
			return {
				devices: [],
				connected: false,
				chs: [],
				canWrite:false,
				name:'',
				services:[]
			};
		},
		methods:{
		//初始化蓝牙适配器
		openBluetoothAdapter() {
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
					console.log('onBluetoothAdapterStateChange', res)
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
				console.log('startBluetoothDevicesDiscovery success', res)
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
			uni.onBluetoothDeviceFound((res) => {
			  res.devices.forEach(device => {
				if (!device.name && !device.localName) {
				  return
				}
				if(device.name === "QR-386A-232B-LE" && flag){
					this.name = device.name;
					this.devices.push(device);
					flag = false;
					return;
				}
			  })
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
				  if (res.services[i].isPrimary&&res.services[i].uuid.toUpperCase().indexOf("FEE7") != -1/* res.services[i].isPrimary&& i === 3 */) {
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
				  if (item.properties.notify || item.properties.indicate) {
					/* uni.notifyBLECharacteristicValueChange({
					  deviceId,
					  serviceId,
					  characteristicId: item.uuid,
					  state: true,
					  success(res) {
					  	    // 操作之前先监听，保证第一时间获取数据
					  	    uni.onBLECharacteristicValueChange((characteristic) => {
					  	      const idx = inArray(_this.chs, 'uuid', characteristic.characteristicId)
					  	      const data = {}
					  	      if (idx === -1) {
					  	    	data[`chs[${_this.chs.length}]`] = {
					  	    	  uuid: characteristic.characteristicId,
					  	    	  value: ab2hex(characteristic.value)
					  	    	}
					  	      } else {
					  	    	data[`chs[${idx}]`] = {
					  	    	  uuid: characteristic.characteristicId,
					  	    	  value: ab2hex(characteristic.value)
					  	    	}
					  	      }
					  	      // data[`chs[${this.data.chs.length}]`] = {
					  	      //   uuid: characteristic.characteristicId,
					  	      //   value: ab2hex(characteristic.value)
					  	      // }
					  	      console.log(JSON.stringify(data));
					  	      _this.data = data;
					  	    })
					  }
					}) */
				  }
				  
				}
			  },
			  fail(res) {
				console.error('getBLEDeviceCharacteristics', res)
			  }
			})
			
		  },
		  writeBLECharacteristicValue() {
			// eslint-disable-next-line
			console.log(this._deviceId+':'+this._characteristicId);
			let printerJobs = new PrinterJobs();
				printerJobs
				  .print('XXX药业有限公司')
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
				  .setAlign('lt')
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
			
		}	
	}
</script>

<style>

</style>
