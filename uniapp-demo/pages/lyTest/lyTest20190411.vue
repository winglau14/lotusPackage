<template>
	<view>
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

/* const PrinterJobs = require('../../printer/printerjobs')
const printerUtil = require('../../printer/printerutil') */
const barcode = require('./barcode')
const QRPrinter = require('./QRPrinter.js')
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
			
			const _this = this;
			_this.devices = [];
			QRPrinter.searchPrinter(function(res){
				res.map((item)=>{
					if(item.name === _this.targetDevice&&!_this.devices.length){
						_this.devices.push(item);
					}
				});
			});
		},
		//创建链接
		createBLEConnection(e) {
			const deId = e.currentTarget.dataset.deviceId;
			const _this = this;
			QRPrinter.connect(deId,(res)=>{
				console.log(JSON.stringify(res));
				if(res.msg === '成功'){
					_this.canWrite = true;
				}
			});
		},
		//关闭连接
		closeBLEConnection() {
			QRPrinter.disconnect();
			this.devices = [];
		},
		//写入数据
		writeBLECharacteristicValue() {
				/*const buffs = '! 0 200 200 1280 1 \n\r' 
				+ 'B 128 1 2 48 320 118 608186431866 \n\r'
				 + 'B 128 2 2 50 23 714 608186431866 \n\r'
				+ 'VB 128 2 2 80 460 630 4000074490040 \n\r' 
				+ 'B QR 32 216 M 2 U 6 \n\r'
				+ 'MA, 4000074490040 \n\r'
				+ 'ENDQR \n\r'
				
				+ 'SETBOLD 0 \n\r'
				
				+ 'TEXT 55 3 24 40 送达 \n\r'
				
				+ 'SETBOLD 0 \n\r'
				
				+ 'TEXT 55 3 24 68 地址 \n\r'
				
				+ 'SETBOLD 0 \n\r'
				
				+ 'TEXT 24 3 200 216 849 \n\r'
				
				+ 'SETBOLD 0 \n\r'
				
				+ 'TEXT 24 3 32 388 黑- 双鸭山 \n\r'
				+ 'LINE 4 192 576 192 1 \n\r'
				+ 'LINE 4 448 440 448 1 \n\r'
				+ 'LINE 4 512 440 512 1 \n\r'
				+ 'LINE 4 775 576 775 1 \n\r'
				+ 'LINE 4 1204 576 1204 1 \n\r'
				+ 'LINE 440 192 440 670 1 \n\r'
				
				+ 'SETBOLD 0 \n\r'
				
				+ 'TEXT 55 0 24 8 始发网点: 上海青浦区公司 \n\r'
				
				 + ' SETBOLD 0 \n\r'
				
				+ ' TEXT 55 0 100 40 收件人: Hai \n\r'
				
				+ ' SETBOLD 0 \n\r'
				
				+ ' TEXT 55 0 100 60 电话: 15863214477 \n\r'
				
				+ ' SETBOLD 0 \n\r'
				
				+ 'TEXT 55 0 100 80 收件地址: 黑龙江省.双鸭山市.宝鸡山区 \n\r'
				
				+ ' SETBOLD 0 \n\r'
				
				+ ' TEXT 55 0 100 100 黑龙江省.双鸭山市.宝鸡山区 \n\r'
				
				+ ' SETBOLD 0 \n\r'
				
				+ ' TEXT 55 0 448 28 2016- 07 - 14 \n\r'
				
				+ ' SETBOLD 0 \n\r'
				
				+ 'TEXT 55 0 448 48 09:31:13 \n\r'
				
				+ 'SETBOLD 0 \n\r'
				
				+ 'TEXT 55 0 448 8 体积：\n\r'
				
				+ ' SETBOLD 0 \n\r'
				
				+ 'TEXT 24 0 16 167 集包地: 黑龙江哈尔滨分拨中心 \n\r'

				+ '  SETBOLD 0 \n\r'
				
				+ ' TEXT 24 0 365 168 J150088 \n\r'
				
				+ ' SETBOLD 0 \n\r'
				
				+ ' TEXT 24 0 328 8 6.00 kg \n\r'
				
				+ ' SETBOLD 0 \n\r'
				
				+ ' TEXT 24 0 328 33 普通 \n\r'
				
				+ ' SETBOLD 0 \n\r'
				
				+ 'TEXT 24 0 24 470 运单编号: 4000074490040 \n\r'
				
				+ 'SETBOLD 0 \n\r'
				
				+ 'TEXT 55 0 32 600 收件人/ 代签人 \n\r'
				
				+ ' SETBOLD 0 \n\r'
				
				+ ' TEXT 55 0 32 634 签收时间: 年  月  日 \n\r'
				
				+ ' SETBOLD 0 \n\r'
				
				+ ' TEXT 55 0 24 782 发件人: 张三 \n\r'
				
				+ ' SETBOLD 0 \n\r'
				+ '  IT 0 \n\r'
				+ ' TEXT 55 0 24 802 电话: 18221009215 \n\r'
				
				+ ' SETBOLD 0 \n\r'
				
				+ ' TEXT 55 0 24 822 发件地址: 上海市.上海市.闵行区 \n\r'
				
				+ ' SETBOLD 0 \n\r'
				
				+ 'TEXT 55 0 32 862 收件人: Hai \n\r'
				
				+ 'SETBOLD 0 \n\r'
				
				+ 'TEXT 55 0 32 882 电话: 15863214477 \n\r'
				
				+ 'SETBOLD 0 \n\r'
				
				+ ' TEXT 55 0 32 902 收件地址: 黑龙江省.双鸭山市.宝鸡山区 \n\r'
				
				+ 'SETBOLD 0 \n\r'
				
				+ 'TEXT 55 0 120 922 黑龙江省.双鸭山市.宝鸡山区 \n\r'
				
				+ 'SETBOLD 0 \n\r'
				
				+ 'TEXT 55 0 24 1006 发件人: 张三 \n\r'
				
				+ ' SETBOLD 0 \n\r'
				
				+ 'TEXT 55 0 24 1026 电话: 18221009215 \n\r'
				
				+ ' SETBOLD 0 \n\r'
				
				+ 'TEXT 55 0 24 1046 发件地址: 上海市.上海市.闵行区 \n\r'
				
				+ 'SETBOLD 0 \n\r'
				
				+ 'TEXT 55 0 32 1086 收件人: Hai \n\r'
				
				+ 'SETBOLD 0 \n\r'
				
				+ 'TEXT 55 0 32 1106 电话: 15863214477 \n\r'
				
				+ ' SETBOLD 0 \n\r'
				
				+ 'TEXT 55 0 32 1126 收件地址: 黑龙江省.双鸭山市.宝鸡山区 \n\r'
				
				+ 'SETBOLD 0 \n\r'
				
				+ ' TEXT 55 0 120 1146 黑龙江省.双鸭山市.宝鸡山区 \n\r'
				
				+ '  SETBOLD 0 \n\r'
				
				+ ' TEXT 55 0 448 1147 2016- 07 - 14 \n\r'
				
				+ ' SETBOLD 0 \n\r'
				
				+ ' TEXT 55 0 448 1162 09:31:13 \n\r'
				
				+ ' SETBOLD 0 \n\r'
				
				+ 'TEXT 24 0 448 1097 6.00 kg \n\r'
				
				+ 'SETBOLD 0 \n\r'
				
				+ ' TEXT 24 0 448 1122 普通 \n\r'
				
				+ ' SETBOLD 0 \n\r'
				
				+ ' TEXT 24 0 32 1177 运单编号: 4000073642731\n\r'
				
				+ 'SETBOLD 0 \n\r'
				
				+ 'TEXT 55 0 24 1210 官方网址: http://yundaex.com 客服热线: 95546 发货人联 \n\r' 

				+ 'FORM \n\r'
				+ 'PRINT'
				
			QRPrinter.sendCmd(buffs, true)*/
			/* let x = 0
			let y = -20
			QRPrinter.pageSetup(100, 20) */
			QRPrinter.drawBarCode(0,0,1234567,4,true,1,2)
			QRPrinter.print(false,true)
		},
		  //断开连接
		  closeBluetoothAdapter() {
			uni.closeBluetoothAdapter()
			this._discoveryStarted = false
		  }
		},
		onLoad() {
			//条形码
			//barcode.code128(uni.createCanvasContext('barcode'), this.code, 680, 200);
		}	
	}
</script>

<style>

</style>
