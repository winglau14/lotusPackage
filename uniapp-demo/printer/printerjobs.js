const commands = require('./commands.js');
const TextEncoder = require('text-encoding/index').TextEncoder;
const utils = require('./utils.js');
//const BufferHelper = require('bufferhelper');
const { MutableBuffer } = require('mutable-buffer');

const printerJobs = function () {
  this._queue = Array.from(commands.HARDWARE.HW_INIT);
	//this._queue = new BufferHelper();
  this._encoder = new TextEncoder("gb2312", {NONSTANDARD_allowLegacyEncoding: true});
	console.log(JSON.stringify(commands.HARDWARE.HW_INIT));
  this._enqueue = function (cmd) {
		console.log(JSON.stringify(cmd));
		//this._queue.push.apply(this._queue,cmd);
	this._queue = this._queue.concat(cmd)
  }
};

/**
 * 增加打印内容
 * @param  {string} content  文字内容
 */
printerJobs.prototype.text = function (content) {
  if (content) {
    let uint8Array = this._encoder.encode(content);
		console.log(JSON.stringify(uint8Array));
    let encoded = Array.from(uint8Array);
    this._enqueue(encoded);
  }
  return this;
};

/**
 * 打印文字
 * @param  {string} content  文字内容
 */
printerJobs.prototype.print = function (content,al) {
console.log(al);
	this.setAlign(al);
  this.text(content);
  this._enqueue(commands.LF);
  return this;
};

/**
 * 打印文字并换行
 * @param  {string}  content  文字内容
 */
printerJobs.prototype.println = function (content = '') {
  return this.print(content + commands.EOL);
};

/**
 * 设置对齐方式
 * @param {string} align 对齐方式 LT/CT/RT
 */
printerJobs.prototype.setAlign = function (align) {
	console.log(JSON.stringify(commands.TEXT_FORMAT['TXT_ALIGN_' + align.toUpperCase()]));
  this._enqueue(commands.TEXT_FORMAT['TXT_ALIGN_' + align.toUpperCase()]);
  return this;
};

/**
 * 设置字体
 * @param  {string} family A/B/C
 */
printerJobs.prototype.setFont = function (family) {
  this._enqueue(commands.TEXT_FORMAT['TXT_FONT_' + family.toUpperCase()]);
  return this;
};

/**
 * 设定字体尺寸
 * @param  {number} width 字体宽度 1~2
 * @param  {number} height 字体高度 1~2
 */
printerJobs.prototype.setSize = function (width, height) {
  if (2 >= width && 2 >= height) {
    this._enqueue(commands.TEXT_FORMAT.TXT_NORMAL);
    if (2 === width && 2 === height) {
      this._enqueue(commands.TEXT_FORMAT.TXT_4SQUARE);
    } else if (1 === width && 2 === height) {
      this._enqueue(commands.TEXT_FORMAT.TXT_2HEIGHT);
    } else if (2 === width && 1 === height) {
      this._enqueue(commands.TEXT_FORMAT.TXT_2WIDTH);
    }
  }
  return this;
};

/**
 * 设定字体是否加粗
 * @param  {boolean} bold
 */
printerJobs.prototype.setBold = function (bold) {
  if (typeof bold !== 'boolean') {
    bold = true;
  }
  this._enqueue(bold ? commands.TEXT_FORMAT.TXT_BOLD_ON : commands.TEXT_FORMAT.TXT_BOLD_OFF);
  return this;
};

/**
 * 设定是否开启下划线
 * @param  {boolean} underline
 */
printerJobs.prototype.setUnderline = function (underline) {
  if (typeof underline !== 'boolean') {
    underline = true;
  }
  this._enqueue(underline ? commands.TEXT_FORMAT.TXT_UNDERL_ON : commands.TEXT_FORMAT.TXT_UNDERL_OFF);
  return this;
};

/**
 * 设置行间距为 n 点行,默认值行间距是 30 点
 * @param {number} n 0≤n≤255
 */
printerJobs.prototype.setLineSpacing = function (n) {
  if (n === undefined || n === null) {
    this._enqueue(commands.LINE_SPACING.LS_DEFAULT);
  } else {
    this._enqueue(commands.LINE_SPACING.LS_SET);
    this._enqueue([n]);
  }
  return this;
};

/**
 * 打印空行
 * @param {number} n
 */
printerJobs.prototype.lineFeed = function (n = 1) {
  return this.print(new Array(n).fill(commands.EOL).join(''));
};

/**
 *  设置字体颜色，需要打印机支持
 *  @param  {number} color - 0 默认颜色黑色 1 红色
 */
printerJobs.prototype.setColor = function (color) {
  this._enqueue(commands.COLOR[color === 1 ? 1 : 0]);
  return this;
};
/**
 * Set printer model to recognize model-specific commands.
 * Supported models: [ null, 'qsprinter' ]
 *
 * For generic printers, set model to null
 *
 * [function set printer model]
 * @param  {[String]}  model [mandatory]
 * @return {[Printer]} printer  [the escpos printer instance]
 */
printerJobs.prototype.model = function (_model) {
  this._model = _model;
  return this;
};
/**
 * [barcode]
 * @param  {[type]}    code     [description]
 * @param  {[type]}    type     [description]
 * @param  {[type]}    options  [description]
 * @return {[printerJobs]} printer  [the escpos printer instance]
 */

 /**
     * 二维码
     * @param  {string} code     打印内容
     * @param  {string} type     打印类型，UPC-A(11-12)/UPC-E(11-12，不可用)/EAN13(默认,12-13)/EAN8(7-8)/CODE39(1-255，不可用)/ITF(1-255偶数,不可用)/NW7(1-255，不可用)
     * @param  {number} width    宽度
     * @param  {number} height   高度
     * @param  {string} position OFF/ABV/BLW/BTH
     * @param  {string} font     字体A/B
     * @return {object}          当前对象
     */

printerJobs.prototype.barcode = function (code, type, options) {
  options = options || {};
  var width, height, position, font, includeParity;
  if (typeof width === 'string' || typeof width === 'number') { // That's because we are not using the options.object
    width = arguments[2];
    height = arguments[3];
    position = arguments[4];
    font = arguments[5];
  } else {
    width = options.width;
    height = options.height;
    position = options.position;
    font = options.font;
    includeParity = options.includeParity !== false; // true by default
  }
	console.log(this._model)
  type = type || 'EAN13'; // default type is EAN13, may a good choice ?
  var convertCode = String(code), parityBit = '', codeLength = '';
  if (typeof type === 'undefined' || type === null) {
    throw new TypeError('barcode type is required');
  }
  if (type === 'EAN13' && convertCode.length !== 12) {
    throw new Error('EAN13 Barcode type requires code length 12');
  }
  if (type === 'EAN8' && convertCode.length !== 7) {
    throw new Error('EAN8 Barcode type requires code length 7');
  }
  if (this._model === 'qsprinter') {
    this._enqueue(commands.MODEL.QSPRINTER.BARCODE_MODE.ON);
  }
  if (this._model === 'qsprinter') {
    // qsprinter has no BARCODE_WIDTH command (as of v7.5)
  } else if (width >= 2 || width <= 6) {
    this._enqueue(commands.BARCODE_FORMAT.BARCODE_WIDTH[width]);
  } else {
    this._enqueue(commands.BARCODE_FORMAT.BARCODE_WIDTH_DEFAULT);
  }
  if (height >= 1 || height <= 255) {
    this._enqueue(commands.BARCODE_FORMAT.BARCODE_HEIGHT(height));
  } else {
    if (this._model === 'qsprinter') {
      this._enqueue(commands.MODEL.QSPRINTER.BARCODE_HEIGHT_DEFAULT);
    } else {
      this._enqueue(commands.BARCODE_FORMAT.BARCODE_HEIGHT_DEFAULT);
    }
  }
  if (this._model === 'qsprinter') {
    // Qsprinter has no barcode font
		this._enqueue(commands.BARCODE_FORMAT[
		  'BARCODE_FONT_' + ('A').toUpperCase()
		]);
  } else {
    this._enqueue(commands.BARCODE_FORMAT[
      'BARCODE_FONT_' + (font || 'A').toUpperCase()
    ]);
  }
  this._enqueue(commands.BARCODE_FORMAT[
    'BARCODE_TXT_' + (position || 'BLW').toUpperCase()
  ]);
  this._enqueue(commands.BARCODE_FORMAT[
    'BARCODE_' + ((type || 'EAN13').replace('-', '_').toUpperCase())
  ]);
  if (type === 'EAN13' || type === 'EAN8') {
    parityBit = utils.getParityBit(code);
  }
  if (type == 'CODE128' || type == 'CODE93') {
    codeLength = utils.codeLength(code);
  }
	console.log('codeLength:'+codeLength);
	console.log('code:'+code);
	console.log('includeParity:'+includeParity);
	console.log('parityBit:'+parityBit);
	const t = codeLength + code + (includeParity ? parityBit : '') + '0x00';
	console.log(t);
	let uint8Array = this._encoder.encode(code);
	console.log(JSON.stringify(uint8Array));
	let encoded = Array.from(uint8Array);
  this._enqueue(encoded) // Allow to skip the parity byte
	//this._enqueue((codeLength?codeLength:'') + code)
  if (this._model === 'qsprinter') {
		console.log(6666);
    this._enqueue(commands.MODEL.QSPRINTER.BARCODE_MODE.OFF);
  }
  return this;
};



/**
 * https://support.loyverse.com/hardware/printers/use-the-beeper-in-a-escpos-printers
 * 蜂鸣警报，需要打印机支持
 * @param  {number} n    蜂鸣次数,1-9
 * @param  {number} t 蜂鸣长短,1-9
 */
printerJobs.prototype.beep = function (n, t) {
  this._enqueue(commands.BEEP);
  this._enqueue([n, t]);
  return this;
};

/**
 * 清空任务
 */
printerJobs.prototype.clear = function () {
  this._queue = Array.from(commands.HARDWARE.HW_INIT);
  return this;
};

/**
 * 返回ArrayBuffer
 */
printerJobs.prototype.buffer = function () {
  return new Uint8Array(this._queue).buffer;
};

module.exports = printerJobs;