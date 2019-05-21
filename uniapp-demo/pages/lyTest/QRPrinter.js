let connectedDeviceId
let serviceId
let readCharacteristic
let writeCharacteristic
let glbCmd = ""
let maxBit = 200
let gbToBase64 = require("./libs/gb2312ToBase64.js").decode64
let _currentBold = -1
let _currentFont = -1

/*打开蓝牙适配器并搜索启锐打印机
  params:
    searchedPrinters:function, 回调新搜索到的设备（数组），回调参数[{name:"QR-386A-47DA",deviceId:"XXX-XXX-XXX",RRSI:"-70"}]
    fail:function,打开蓝牙适配器失败的回调
*/
function searchPrinter(searchedPrinters,fail){
	 uni.openBluetoothAdapter({
    success: function (res) {
        uni.startBluetoothDevicesDiscovery({
					allowDuplicatesKey: true,
          success: function (res) {
            uni.onBluetoothDeviceFound(function (result) {
							searchedPrinters(result.devices);
							
              /* let printers = deviceFilter(devices.devices)
              // printers = devices.devices
              if (printers.length > 0) {
                if (searchedPrinters) searchedPrinters(printers)
              } */
            })
          }
        })
    
      // success
    },
    fail:function(err){
      if(fail)fail(err)
      uni.showToast({
        title: "请检查蓝牙是否已经打开"
      })
    }
  })
}
//内部函数
function deviceFilter(devices,flag){
  let printers = new Array() 
  /* for (let i = 0; i < devices.length; i++) {
    let device = devices[i]
    console.log(device)
    if (device.name.toUpperCase().startsWith("QR") || (device.localName && device.localName.toUpperCase().startsWith("QR"))){
      printers.push({
        name:device.name,
        localName:device.localName,
        deviceId: device.deviceId,
        RRSI: device.RSSI
      })
    }
  } */
	return devices.forEach(device => {
	if (device.name.toUpperCase().startsWith("QR")&&flag || (device.localName && device.localName.toUpperCase().startsWith("QR"))&&flag){
		console.log(device.name);
		flag = false;
	  printers.push({
	    name:device.name,
	    localName:device.localName,
	    deviceId: device.deviceId,
	    RRSI: device.RSSI
	  })
		return printers;
	}
	})
  
}
/*连接打印机
  params:
    deviceId:String ,设备的id
    success:function,成功的回调,回调参数:{ "msg": "成功", "deviceId": connectedDeviceId }
    fail:function,失败的回调，回调参数:{"msg":"失败"}
*/
function connect(deviceId, success, fail){
	console.log(deviceId);
  uni.createBLEConnection({
    deviceId: deviceId,
    success: function (res) {
      uni.stopBluetoothDevicesDiscovery({
        success: function (res) {
          //console.log(res)
        }
      })
      connectedDeviceId = deviceId
      getBLEDeviceServices(success, fail)

    },
    fail:function(res){
      console.log("蓝牙连接失败")
      console.log(JSON.stringify(res))
    }
  })
}
//内部函数
let initIndex = 0;
function getBLEDeviceServices(success, fail) {
	console.log('connectedDeviceId:'+connectedDeviceId);
  uni.getBLEDeviceServices({
    deviceId: connectedDeviceId,
    success: function (res) {
			if(!res.services.length){
			  uni.showLoading({
				  title:'蓝牙服务连接中...',
				  mask:true
			  });
			  setTimeout(()=>{
				  getBLEDeviceServices(success, fail);
			  },2000);
			  
			  return false;
			}
			uni.hideLoading();
      for (let i = 0; i < res.services.length; i++) {
        console.log(JSON.stringify(res.services[i]))
        if ((res.services[i].uuid.indexOf("49535343-fe7d-4ae5-8fa9-9fafd205e455") != -1) || (res.services[i].uuid.indexOf("49535343-FE7D-4AE5-8FA9-9FAFD205E455") != -1)) {
          serviceId = res.services[i].uuid

        }
      }

      uni.getBLEDeviceCharacteristics({
        deviceId: connectedDeviceId,
        serviceId: serviceId,
        success: function (res) {

          for (let i = 0; i < res.characteristics.length; i++) {
            console.log(res.characteristics[i])
            if (res.characteristics[i].uuid.indexOf('49535343-1E4D-4BD9-BA61-23C647249616') != -1 || res.characteristics[i].uuid.indexOf('49535343-1e4d-4bd9-ba61-23c647249616') != -1) {
              readCharacteristic = res.characteristics[i].uuid

            }
            console.log(res.characteristics[i].properties.read + " and " + res.characteristics[i].properties.write)
            // if (res.characteristics[i].properties.read == false && res.characteristics[i].properties.write == true )
            // {
            //   writeCharacteristic = res.characteristics[i].uuid
              
            // }
            if (res.characteristics[i].uuid.indexOf('49535343-aca3-481c-91ec-d85e28a60318') != -1 || res.characteristics[i].uuid.indexOf('49535343-ACA3-481C-91EC-D85E28A60318') != -1) {

              writeCharacteristic = res.characteristics[i].uuid

            }
						
          }
          console.log("writeCharacteristic = " + writeCharacteristic)
          if (serviceId && writeCharacteristic && success) {
						
            success({ "msg": "成功", "deviceId": connectedDeviceId })
          } else {
            if (fail) fail({ "msg": "失败" })
          }
        },
        fail: function (res) {
          console.log(JSON.stringify(res));
          if (fail) fail({ "msg": "失败" })
        }
      })
    }


  })
}


/*断开连接，关闭蓝牙适配器
*/
function disconnect(){
  uni.closeBLEConnection({
    deviceId: connectedDeviceId,
    success: function(res) {
      connectedDeviceId = ""
      serviceId = ""
      readCharacteristic = ""
      writeCharacteristic = ""
      uni.closeBluetoothAdapter({
        success: function (res) {
          // success
          console.log('success' + res);

        }
      })
    },
  })
 
}

/*发送打印指令
  params:
    cmd:String, 打印指令，详细手册参考CPCL指令集
*/

function sendCmd(cmd , print){
  glbCmd = glbCmd + cmd + "\n\r"
  if(!print)
  {
    return
  }
  const base64Str = gbToBase64(glbCmd)
	console.log(JSON.stringify(base64Str));
  const arrayBuffer = wx.base64ToArrayBuffer(base64Str)
	/* const dataView1 = new DataView(arrayBuffer);
	console.log(JSON.stringify(dataView1)); */
  uni.showLoading({
    title: '数据传输中',
  })
  writeBLEValue(arrayBuffer)
  
}
function writeBLEValue(arrayBuffer){
	console.log(JSON.stringify(arrayBuffer));
  if(!serviceId || ! writeCharacteristic){
    uni.hideLoading()
    uni.showToast({
      title: "传输数据失败",
      //image: "src/icon_fail.png"
    })

    return
  }

  let count = arrayBuffer.byteLength
  if (count > maxBit){

    let leftArrayBuffer = arrayBuffer.slice(maxBit)
		console.log(JSON.stringify(leftArrayBuffer));
    try{
			//数据写入
      uni.writeBLECharacteristicValue({
        deviceId: connectedDeviceId,
        serviceId: serviceId,
        characteristicId: writeCharacteristic,
        value: arrayBuffer.slice(0, maxBit),
        success: function (res) {
          // console.log("分部传输中")
          writeBLEValue(leftArrayBuffer);
        },
        fail:function(e){
						console.log(e)
						uni.hideLoading();
						uni.showToast({
							title: "传输数据失败",
							//image: "src/icon_fail.png"
						});
        }
      })
    }catch (err) {
				uni.showToast({
					title: "传输数据失败",
					//image: "src/icon_fail.png"
				});
    }
  }else{
    try{
    console.log("最后一部分")
		console.log(JSON.stringify(arrayBuffer));
		console.log(connectedDeviceId+'--serviceId:'+serviceId+'=writeCharacteristic:'+writeCharacteristic);
      uni.writeBLECharacteristicValue({
          deviceId: connectedDeviceId,
          serviceId: serviceId,
          characteristicId: writeCharacteristic,
          value: arrayBuffer,
          success: function (res) {
            console.log("打印成功")
            console.log(res)
            uni.hideLoading()
          },
          fail: function (e) {
            console.log(JSON.stringify(e))
            uni.hideLoading()
            uni.showToast({
              title: "传输数据失败",
              //image: "src/icon_fail.png"
            })
          }
        })
    }
    catch(err){
      uni.showToast({
        title: "传输数据失败",
        //image: "src/icon_fail.png"
      })
    }
  }
		glbCmd = "";
		_currentBold = -1;
		_currentFont = -1;
}
/*开始打印
  params:
    revervse:bool, 是否反向打印，true反向，false正向
    skip:bool,是否定位到标签，true定位，false不定位
*/
function print(revervse, skip) {
  if (skip) feed();
  if (!revervse) {
    let cmd = "PRINT";
    sendCmd(cmd, true);
  }
  else {
    let cmd = "POPRINT";
    sendCmd(cmd, true);
  }
}
/*设置打印纸张大小（打印区域）的大小
  params:
    pageWidth:number 打印区域宽度
    pageHeight:number 是否定位到标签，true定位，false不定位
*/
function pageSetup(pageWidth, pageHeight){
  let cmd = "! 0 200 200 " + pageHeight + " " + "1";
  sendCmd(cmd);
  cmd = "PAGE-WIDTH " + pageWidth;
  sendCmd(cmd);
}
/*打印的边框
  params:
    lineWidth:number 边框线条宽度
    top_left_x:number 矩形框左上角x坐标
    top_left_y:number 矩形框左上角y坐标
    bottom_right_x:number 矩形框右下角x坐标
    bottom_right_y:number 矩形框右下角y坐标
*/
function drawBox(lineWidth, top_left_x,
  top_left_y,  bottom_right_x,  bottom_right_y) {
  if (top_left_x > 575)
    top_left_x = 575
  if (bottom_right_x > 575)
    bottom_right_x = 575

  let CPCLCmd = "BOX " + top_left_x + " " + top_left_y + " " + bottom_right_x + " " + bottom_right_y + " " + lineWidth
  sendCmd(CPCLCmd);
}
/*打印线条
  params:
  lineWidth:number 线条宽度
  start_x:number 线条起始点x坐标
  start_y:number 线条起始点y坐标
  end_x:number 线条结束点x坐标
  end_y:number 线条结束点y坐标
  fullline:bool  true:实线  false: 虚线
*/
function drawLine(lineWidth, start_x, start_y, end_x, end_y, fullline) {
  if (start_x > 575)
    start_x = 575
  if (end_x > 575)
    end_x = 575

  let CPCLCmd
  if (fullline)
    CPCLCmd = "LINE " + start_x + " " + start_y + " " + end_x + " " + end_y + " " + lineWidth
  else
    CPCLCmd = "LPLINE " + start_x + " " + start_y + " " + end_x + " " + end_y + " " + lineWidth
  sendCmd(CPCLCmd);
}
/*页模式下打印文本框
  params:
    text_x:number 起始横坐标
    text_y:number 起始纵坐标
    text:string  打印的文本内容
    fontSize:number 字体大小 :
                    1：16点阵；
                    2：24点阵；
                    3：32点阵；
                    4：24点阵放大一倍；
                    5：32点阵放大一倍
                    6：24点阵放大两倍；
                    7：32点阵放大两倍；
                  其他：24点阵
    rotate:number   旋转角度:
                    0：不旋转；    
                    1：90度；    
                    2：180°；    
                    3:270°
    bold:numer     粗体：{0-5}
    reverse:bool  是否反白：
                    false：不反白；
                    true：反白
    underline:bool  是有有下划线:
                    false:没有；
                    true：有
*/
function drawText(text_x, text_y, text, fontSize, rotate, bold, reverse, underline) {
  let CPCLCmd
  if (underline)
    CPCLCmd = "UNDERLINE ON";
  else
    CPCLCmd = "UNDERLINE OFF";
  sendCmd(CPCLCmd);

  if(bold != _currentBold){
    CPCLCmd = "SETBOLD " + bold;
    sendCmd(CPCLCmd);
    _currentBold = bold;
  }


  let family = 0;
  let size = 0;
  let ex = 1;
  let ey = 1;

  switch (fontSize) {
    case 1:
      family = 55
      break
    case 2:
      family = 1
      break
    case 3:
      family = 4
      break
    case 4:
      family = 1
      ex = 2
      ey = 2
      break
    case 5:
      family = 4
      ex = 2
      ey = 2
      break
    case 6:
      family = 1
      ex = 4
      ey = 4
      break
    case 7:
      family = 4
      ex = 3
      ey = 3
      break
    default:
      family = 1
      break
  }
  if(fontSize != _currentFont){
    CPCLCmd = "SETMAG " + ex + " " + ey;
    sendCmd(CPCLCmd);
    _currentFont = fontSize;
  }
  

  switch (rotate) {
    case 1:
      if (reverse) {
        CPCLCmd = "TR90 " + family + " " + size + " " + text_x + " " + text_y + " " + text
       
      }
      else {
        CPCLCmd = "T90 " + family + " " + size + " " + text_x + " " + text_y + " " + text
      }
      break
    case 2:
      if (reverse) {
        CPCLCmd = "TR180 " + family + " " + size + " " + text_x + " " + text_y + " " + text
      }
      else {
        CPCLCmd = "T180 " + family + " " + size + " " + text_x + " " + text_y + " " + text
      }
      break
    case 3:
      if (reverse) {
        CPCLCmd = "TR270 " + family + " " + size + " " + text_x + " " + text_y + " " + text
      }
      else {
        CPCLCmd = "T270 " + family + " " + size + " " + text_x + " " + text_y + " " + text
      }
      break
    default:
      if (reverse) {
        CPCLCmd = "TR " + family + " " + size + " " + text_x + " " + text_y + " " + text
      }
      else {
        CPCLCmd = "TEXT " + family + " " + size + " " + text_x + " " + text_y + " " + text

      }
      break
  }
  sendCmd(CPCLCmd)
}
/*一维条码
  params:
    start_x:number 一维码起始横坐标
    start_y:number 一维码起始纵坐标
    content:number  内容
    barType:number 条码类型：
          0：CODE39；    1：CODE128；
          2：CODE93；    3：CODEBAR；
          4：EAN8；      5：EAN13；
          6：UPCA;       7:UPC-E;
          8:ITF
    portrait:bool 是否横向 true:横向；false:竖向
    Linewidth:number 条码线宽度
    Height::number 条码高度
*/

function drawBarCode(start_x, start_y, content, barType, portrait, linewidth, height) {
  let radio = 2
  let barCode = portrait? "BARCODE":"VBARCODE"

  switch (barType){
    case 0:
      barCode += " 39 "
      break
    case 1:
      barCode += " 128 "
      break
    case 2:
      barCode += " 93 "
      break
    case 3:
      barCode += " CODABAR "
      break
    case 4:
      barCode += " EAN8 "
      break
    case 5:
      barCode += " EAN13 "
      break
    case 6:
      barCode += " UPCA "
      break
    case 7:
      barCode += " UPCE "
      break
    case 8:
      barCode += " ITF "
      break
    default:
      barCode += " 128 "
      break 
  }
  let CPCLCmd = barCode + (linewidth - 1) + " " + radio + " " + height + " " + start_x + " " + start_y + " " + content
  sendCmd(CPCLCmd);
}
/*二维条码
  params:
    start_x:number 二维码起始横坐标
    start_y:number 二维码起始纵坐标
    text:String    内容
    portrait:bool 是否横向 true:横向；false:竖向
    ver:number 宽度，范围(2～6)
    lel::number 大小，范围0～20
*/
function drawQrCode(start_x, start_y, text, portrait, ver, lel) {
  let CPCLCmd = "SETQRVER " + ver;
  sendCmd(CPCLCmd);
  let barCode = portrait ? "BARCODE QR " : "VBARCODE QR " 
  CPCLCmd = barCode + start_x + " " + start_y + " M 2 " + "U " + lel + "\r\nMA," + text + "\r\nENDQR";
  sendCmd(CPCLCmd);
}
//内部函数
function feed(){
  sendCmd("FORM")
  // let buffer = new ArrayBuffer(1)
  // let dataView = new DataView(buffer)
  // dataView.setUint8(0, 0x00)
  // uni.writeBLECharacteristicValue
  //   ({
  //     // 这里的 deviceId 需要在上面的 getBluetoothDevices 或 onBluetoothDeviceFound 接口中获取
  //     deviceId: connectedDeviceId,
  //     // 这里的 serviceId 需要在上面的 getBLEDeviceServices 接口中获取
  //     serviceId: serviceId,
  //     // 这里的 characteristicId 需要在上面的 getBLEDeviceCharacteristics 接口中获取
  //     characteristicId: writeCharacteristic,
  //     // 这里的value是ArrayBuffer类型
  //     value: dataView.buffer,
  //     success: function (res) {

  //     },
  //     complete: function (res) {
  //     }
  //   })
}


module.exports = {
  searchPrinter: searchPrinter,
  connect: connect,
  disconnect: disconnect,
  sendCmd: sendCmd,
  pageSetup: pageSetup,
  print: print,
  drawQrCode: drawQrCode,
  drawBarCode: drawBarCode,
  drawText: drawText,
  drawLine: drawLine,
  drawBox: drawBox
}