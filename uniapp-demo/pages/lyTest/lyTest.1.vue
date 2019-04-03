<template>
	<view>
		<view class="find-list">
			<button style="margin-top: 20upx;" @tap="test">test</button>
			<button style="margin-top: 20upx;" @tap="writeFn">writeFn</button>
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
var _service = require('./blueservice.js');
var _ble = new _service.Xtbluservice();
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
				console.log('getBluetoothAdapterState', res)
				if (res.discovering) {
				  this.onBluetoothDeviceFound()
				} else if (res.available) {
				  this.startBluetoothDevicesDiscovery()
				}
			  }
			})
		  },
		  startBluetoothDevicesDiscovery() {
			if (this._discoveryStarted) {
			  return
			}
			this._discoveryStarted = true
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
				
				/*const foundDevices = this.devices
				 const idx = inArray(foundDevices, 'deviceId', device.deviceId)
				const data = {}
				if (idx === -1) {
				  data[`devices[${foundDevices.length}]`] = device
				} else {
				  data[`devices[${idx}]`] = device
				}
				this.data = data; */
			  })
			})
		  },
		  createBLEConnection(e) {
			const ds = e.currentTarget.dataset
			const deviceId = ds.deviceId
			const name = ds.name
			uni.showLoading();
			setTimeout(()=>{
				uni.createBLEConnection({
				  deviceId,
				  success: () => {
					this.connected = true;
					this.name = name;
					this.deviceId = deviceId;
					uni.showLoading()
					//setTimeout(()=>{
						this.getBLEDeviceServices(deviceId)
					//},3000);
					
				  },
				  complete() {
					uni.hideLoading()
				  }
				})
				
			},1000);
			
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
			uni.getBLEDeviceServices({
			  deviceId,
			  success: (res) => {
				  console.log(`getBLEDeviceServices:${JSON.stringify(res)}`);
				  uni.hideLoading();
				  this.stopBluetoothDevicesDiscovery();
				for (let i = 0; i < res.services.length; i++) {
				  if (res.services[i].isPrimary&& i === 3) {
					this.getBLEDeviceCharacteristics(deviceId, res.services[i].uuid)
					return
				  }
				}
			  }
			})
		  },
		  getBLEDeviceCharacteristics(deviceId, serviceId) {
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
				  }
				  if (item.properties.write) {
					/* this.setData({
					  canWrite: true
					}) */
					this.canWrite = true;
					this._deviceId = deviceId
					this._serviceId = serviceId
					this._characteristicId = item.uuid
					this.writeBLECharacteristicValue()
				  }
				  if (item.properties.notify || item.properties.indicate) {
					uni.notifyBLECharacteristicValueChange({
					  deviceId,
					  serviceId,
					  characteristicId: item.uuid,
					  state: true,
					})
				  }
				}
			  },
			  fail(res) {
				console.error('getBLEDeviceCharacteristics', res)
			  }
			})
			// 操作之前先监听，保证第一时间获取数据
			uni.onBLECharacteristicValueChange((characteristic) => {
			  const idx = inArray(this.chs, 'uuid', characteristic.characteristicId)
			  const data = {}
			  if (idx === -1) {
				data[`chs[${this.chs.length}]`] = {
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
			  this.data = data;
			})
		  },
		  writeBLECharacteristicValue() {
			// 向蓝牙设备发送一个0x00的16进制数据
			const buffer = new ArrayBuffer(1)
			const dataView = new DataView(buffer)
			// eslint-disable-next-line
			dataView.setUint8(0, Math.random() * 255 | 0)
			console.log(JSON.stringify(buffer));
			uni.writeBLECharacteristicValue({
			  deviceId: this._deviceId,
			  serviceId: this._deviceId,
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
		  closeBluetoothAdapter() {
			uni.closeBluetoothAdapter()
			this._discoveryStarted = false
		  },
		  test(){
			  const _this = this;
			  _ble.Connect('DC:0D:30:45:23:2B',function(result){
			  	console.log(JSON.stringify(result));
				_this.services = result.res.services;
				
			  })
		  },
		  writeFn(){
			  const _this = this;
			  _ble.InSerAnch(_this.services,2,(obj)=>{
			  	console.log(JSON.stringify(obj));
				let printerJobs = new PrinterJobs();
					printerJobs
					  .print('2018年12月5日17:34')
					  /* .print(printerUtil.fillLine())
					  .setAlign('ct')
					  .setSize(2, 2)
					  .print('#20饿了么外卖')
					  .setSize(1, 1)
					  .print('切尔西Chelsea')
					  .setSize(2, 2)
					  .print('在线支付(已支付)')
					  .setSize(1, 1)
					  .print('订单号：5415221202244734')
					  .print('下单时间：2017-07-07 18:08:08')
					  .setAlign('lt')
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
				
					_ble.Send(buffer, (res)=>{
						console.log(JSON.stringify(res));
						//uni.closeBluetoothAdapter();
						_ble.closeConnect('DC:0D:30:45:23:2B');
					})
				
				
			  });
			  
		  }
		},
		onLoad() {
			_ble.initBle(function(obj){
				//0蓝牙不可用,1可用,2打开蓝牙适配成功,3打开蓝牙适配失败,4连接成功,5断开连接,6监听到蓝牙列表数据 ,
      //数据不同的类型数据都在obj.res,根据不同的BleType 获取指定的数据
       console.log(`有数据${JSON.stringify(obj.res)}`); //数据都在这里
      if (obj.BleType == 0 || obj.BleType == 3) {  
         
      } else if (obj.BleType == 1 || obj.BleType == 2) { 
        
      } else if (obj.BleType == 6) {
         //搜索到的蓝牙都在这
      }
			})
		}	
	}
</script>

<style>

</style>
