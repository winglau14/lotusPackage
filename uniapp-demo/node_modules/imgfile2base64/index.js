(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.imgfile2base64 = factory());
}(this, (function () { 'use strict';

/**
 * Created by b5156 on 2017/8/18.
 */

function imgfile2base64(file, complete, opt) {

    var defaultOpt = {
        width: null,
        height: null,
        quality: 1,
        fileTypes: ["image/gif", "image/png", "image/jpeg", "image/bmp", "image/webp"],
        targetFileType: 'image/jpeg'
    };
    if (!opt) {
        opt = defaultOpt;
    } else {
        for (var k in defaultOpt) {
            if (!opt[k]) {
                opt[k] = defaultOpt[k];
            }
        }
    }
    if (file instanceof File === false) {
        throw new Error('not a File');
    }
    if (opt.fileTypes.indexOf(file.type) < 0) {
        throw new Error('unsupported image type');
    }
    if (!FileReader) {
        throw new Error('unsupported FileReader');
    }
    if (typeof complete !== 'function') {
        throw new Error('complete should be a function');
    }
    if (typeof opt.quality !== 'number' || opt.quality > 1 || opt.quality < 0) {
        throw new Error('quality should be between 0 and 1');
    }
    if (opt.width && typeof opt.width !== 'number') {
        throw new Error('width should be a number');
    }
    if (opt.height && typeof opt.height !== 'number') {
        throw new Error('height should be a number');
    }

    var reader = new FileReader();
    reader.onload = function (e) {
        var img = new Image();
        img.src = e.target.result;
        img.onload = function () {
            var scale = img.width / img.height;
            var w = opt.width || img.width;
            var h = opt.height || (w / scale);
            var canvas = document.createElement('canvas');
            var ctx = canvas.getContext('2d');
            var anw = document.createAttribute("width");
            anw.nodeValue = w;
            var anh = document.createAttribute("height");
            anh.nodeValue = h;
            canvas.setAttributeNode(anw);
            canvas.setAttributeNode(anh);
            ctx.drawImage(img, 0, 0, w, h);
            var base64 = canvas.toDataURL(opt.targetFileType, opt.quality);
            complete(base64);
        };
    };
    reader.readAsDataURL(file);
}

return imgfile2base64;

})));
