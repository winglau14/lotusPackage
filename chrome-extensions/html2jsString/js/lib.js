var btn = document.querySelector('#btn'), btn2 = document.querySelector('#btn2'),
    textArea = document.querySelectorAll('textarea');
btn.onclick = function () {
    changeFn("'");
};
btn2.onclick = function () {
    changeFn("\"");
};
//textarea val selected
for(var i = 0;i<=textArea.length-1;i++){
    textArea[i].onmouseover = function(){
        this.focus();
        this.select();
    }
}
function changeFn(strType2) {
    var initData = document.querySelector('#init-data').value;
    var strType = document.querySelector('#str-type').value ? document.querySelector('#str-type').value : 'str';
    if (!initData.replace(/^\s{1,}$/g, '')) {
        alert('请贴入要转换的HTML代码，嗷呜！！！');
        return false;
    }
    //html注释代码正则匹配
    var reg1 = /<!-*.{1,}->\n?/g;
    var tempArr = [];
    var tempArr2 = initData.replace(reg1, '').split('\n');
    //过滤掉空字符
    for (var i = 0; i <= tempArr2.length - 1; i++) {
        if (tempArr2[i].replace(/\s{1,}\s/g, '')) {
            tempArr.push(tempArr2[i]);
        }
    }

    //console.log(tempArr);

    var str = '\n';
    for (var i = 0; i <= tempArr.length - 1; i++) {
        //单引号双引号转义
        if (tempArr[i].indexOf(strType2)) {
            //双引号转义
            if (strType2 === '"') {
                tempArr[i] = tempArr[i].replace(/\"/g, '\\' + strType2);
            }
            //单引号转义
            if (strType2 === '\'') {
                tempArr[i] = tempArr[i].replace(/\'/g, '\\' + strType2);
            }

        }
        if (i === 0) {
            if (i != tempArr.length - 1) {
                str += strType + '+=' + strType2 + tempArr[i] + strType2 + '+' + '\n';
            } else {
                str += strType + '+=' + strType2 + tempArr[i] + strType2;
            }

        } else {
            if (i != tempArr.length - 1) {
                str += strType2 + tempArr[i] + strType2 + '+' + '\n';
            } else {
                str += strType2 + tempArr[i] + strType2;
            }
        }
    }
    //console.log(str);
    str += ';';
    document.querySelector('#change-data').value = 'var ' + strType + '="";' + str.replace(/\s{1,}\s/g, '');
}