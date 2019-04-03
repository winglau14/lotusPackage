//使用
//var wc = require('../../wcache.js')  
//var s=wc.get('k', 'xxx')、wc.put('k', 'xxx')
var postfix = '_deadtime';
function put(k, v, t) {
  // console.log(k);
  uni.setStorageSync(k, v)
  if (t != null && t != "") {
    var seconds = parseInt(t);
    if (seconds > 0) {
      var timestamp = Date.parse(new Date());
      timestamp = timestamp / 1000 + seconds;
      // console.log(timestamp);
      uni.setStorageSync(k + postfix, timestamp + "")
    } else {
      uni.removeStorageSync(k + postfix)
    }

  } else {
    uni.removeStorageSync(k + postfix)
  }

}

function get(k, def) {
  var time = uni.getStorageSync(k + postfix);
  if (time != null && time != "" && time != undefined && time != "undefined") {
    var deadtime = parseInt(time)
    if (parseInt(deadtime) < Date.parse(new Date()) / 1000) {
      if (def) {
        return def;
      } else {
        return;
      }
    }
  }
  var res = uni.getStorageSync(k);
  if (res != null && res != "" && res != undefined && res != "undefined") {
    return res;
  } else {
    return def;
  }
}

function remove(k) {
  uni.removeStorageSync(k);
  uni.removeStorageSync(k + postfix);
}

function clear() {
  uni.clearStorageSync();
}

module.exports = {
  put: put,
  get: get,
  remove: remove,
  clear: clear,
}