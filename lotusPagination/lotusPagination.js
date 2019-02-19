/**created by winglau14
 * index:0 //翻页索引值，可修改
 * totalNum: 40 //总数量，可修改
 * showPageSize: 3 //每一页显示多少个，可修改
 * maxShowNum:7 //分页页码展示最大数量默认是7，可修改，建议设置的值>=5
 * callback 回调函数 返回当前点击index
 **/

;(function(window, document, undefined) {
    var lotusPagination = {
        init: function (options) {
            var parentDom = document.getElementById(options.parentDom);
            var showPageTotalNum = document.getElementById(options.leftPageTotal);
            var dom = document.getElementById(options.domItemList);
            var prev = document.getElementById(options.prevBtn);
            var next = document.getElementById(options.nextBtn);
            var enSureBtn = document.getElementById(options.enSureBtn);
            var showTotalNum = document.getElementById(options.rightPageTotal);
            var curNum = document.getElementById(options.curNum);
            //计算翻页的页数
            var totalPage = Math.ceil(options.totalNum / options.showPageSize);
            //是否隐藏左侧共有多少记录模块
            if(options.hideLeftPageTotal){
                showPageTotalNum.parentNode.style.display = 'none';
            }
            if(totalPage>0){
                parentDom.style.display = 'block';
            }else{
				parentDom.style.display = 'none';
			}
			//console.log(lotusPagination);
            //前台页面共有多少条数据显示
            showPageTotalNum.innerText = options.totalNum;
            showTotalNum.innerText = '共' + totalPage + '页';
            curNum.value = options.index + 1;
            //console.log(totalPage);
            //生成翻页item
            function createDom(page) {
                //console.log(page, lotusPagination.index);
                //console.log(`显示...需要减去item的个数：${page - 7}`);
                //`显示...需要减去item的个数：${page - 7}`
                var removeItem = page - options.maxShowNum;
                //页码字符串拼接
                var str = '';
                var tempItemArr = [];
                for (var i = 0; i <= page; i++) {
                    if (i === options.index) {
                        str += '<span data-index="' + i + '" class="active">' + (i + 1) + '</span>';
                    } else {
                        if (i <= page - 1) {
                            str += '<a data-index="' + i + '" href="javascript:void(0);">' + (i + 1) + '</a>';
                        } else {
                            //显示最后面...
                            if (i !== totalPage) {
                                str += '<i>...</i>';
                            }
                        }
                    }
                    if (removeItem > 0) {
                        var obj = {
                            val: i,
                            flag: i === options.index
                        };
                        tempItemArr.push(obj);
                    }
                }

                //数据重组
                if (tempItemArr.length > 0) {
                    //console.log('removeItem:' + removeItem);
                    //去除对应页码
                    tempItemArr.splice(2, removeItem);
                    //去除掉的对应页码替换为...
                    tempItemArr.splice(2, 0, '...');
                    //去除最后一个页码
                    tempItemArr.splice(tempItemArr.length - 1, 1);
                    var newStr = '';
                    for (var i = 0; i < tempItemArr.length; i++) {
                        if (typeof tempItemArr[i] === 'object') {
                            if (tempItemArr[i].flag) {
                                newStr += '<span class="active">' + (tempItemArr[i].val + 1) + '</span>';
                            } else {
                                newStr += '<a data-index="' + i + '" href="javascript:void(0);">' + (tempItemArr[i].val + 1) + '</a>';
                            }
                        } else {
                            newStr += '<i>' + tempItemArr[i] + '</i>';
                        }
                        //显示最后面...
                        if (i === tempItemArr.length - 1 && totalPage - (options.index + 1) > 2) {
                            newStr += '<i>...</i>';
                        }
                    }
                    dom.innerHTML = newStr;
                } else {
                    dom.innerHTML = str;
                }
                //上一页按钮显示状态
                prevOrNextChange(options.prevBtn, options.index, 'prev');
                //只有一页隐藏下一页按钮
                if (dom.childNodes.length === 1) {
                    next.style.display = 'none';
                }else{
                    next.style.display = 'inline-block';
                }
                //页码数据重组公共函数
                var pageCommonFn = function () {
                    if (options.index <= options.maxShowNum - 2) {
                        if (totalPage > options.maxShowNum) {
                            createDom(page = options.maxShowNum);
                        } else {
                            createDom(totalPage);
                        }
                    } else {
                        if (options.index + 4 > totalPage) {
                            createDom(totalPage);
                        } else {
                            createDom(options.index + 3);
                        }
                    }
                    //点击到最后一页隐藏下一页
                    if (options.index === tarDom.length) {
                        prevOrNextChange(options.nextBtn, options.index, 'next', totalPage);
                    } else {
                        //点击其他显示下一页
                        prevOrNextChange(options.nextBtn, options.index, 'next', totalPage);
                    }
                };
                //给item绑定click事件
                var tarDom = dom.getElementsByTagName('a');
                for (var i = 0; i < tarDom.length; i++) {
                    tarDom[i].onclick = function () {
                        //console.log(this.innerText);
                        options.index = parseInt(this.innerText) - 1;
                        curNum.value = options.index + 1;
                        //console.log(`剩余：${totalPage - (lotusPagination.index + 1)}`);
                        //页码数据重组
                        pageCommonFn();
                        //回调函数
                        if (options) {
                            options.callback(options.index);
                        }
                    }
                }
                //点击上一页
                prev.onclick = function () {
                    options.index -= 1;
                    curNum.value = options.index + 1;
                    //页码数据重组
                    pageCommonFn();
                    //回调函数
                    if (options) {
                        options.callback(options.index);
                    }
                };
                //点击下一页
                next.onclick = function () {
                    options.index += 1;
                    curNum.value = options.index + 1;
                    //页码数据重组
                    pageCommonFn();
                    //回调函数
                    if (options) {
                        options.callback(options.index);
                    }
                };
                //确定跳转
                enSureBtn.onclick = function () {
                    //判断options.index === parseInt(curNum.value)-1 相等不用执行回调函数
                    if(options.index === parseInt(curNum.value)-1){
                        return false;
                    }
                    options.index = parseInt(curNum.value) - 1;
                    //页码数据重组
                    pageCommonFn();
                    //回调函数
                    if (options) {
                        options.callback(options.index);
                    }
                };
                //输入框判断
                curNum.onkeyup = function (event) {
                    var reg = /^[1-9]$|^[1-9]\d{1,}$/g;
                    if(!reg.test(this.value)){
                        this.value = 1;
                    }
                    if (this.value > totalPage) {
                        this.value = totalPage;
                    }
                    //按enter键执行回调函数
                    if(event.keyCode === 13){
                        options.index = parseInt(curNum.value) - 1;
                        //页码数据重组
                        pageCommonFn();
                        //回调函数
                        if (options) {
                            options.callback(options.index);
                        }
                    }
                };
            }
            //初始化页码数据
            createDom(totalPage > options.maxShowNum ? options.maxShowNum : totalPage);
            //上一页or下一页按钮切换
            function prevOrNextChange(id, index, type, pageLength) {
                var obj = document.getElementById(id);
                if (type === 'prev') {
                    //上一页按钮切换
                    index === 0 ? obj.style.display = 'none' : obj.style.display = 'inline-block';
                } else {
                    //下一页按钮切换
                    pageLength - (options.index + 1) > 0 ? obj.style.display = 'inline-block' : obj.style.display = 'none';
                }
            }
        }
    };
    window.lotusPagination = lotusPagination;
})(window, document);

if (typeof module !== 'undefined' && module.exports) {
    module.exports = lotusPagination;
}