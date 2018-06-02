const xlsx = require('node-xlsx');//读取xlsx
const exportToExcel = require('export-to-excel');//导出xlsx

//读取文件内容
//const obj = xlsx.parse(__dirname + '/2018-05-31.xlsx');
const obj = xlsx.parse(__dirname + '/工作簿1.xlsx');
const excelObj = obj[0].data;
const s = +new Date();
//处理批准文号排序
const adjustFn = (str) => {
    if (str) {
        const reg = /-\d{1,}px;">.?/g;
        const arr = str.match(reg);
        let arr2 = [];
        let arr3 = [];
        let arr4 = [];
        let arr5 = [];
        let tarStr = '';
        if(arr.length > 0){
            arr.map((item) => {
                item = item.replace(/px;">/g, ':').replace(/-/g, '');
                arr2.push(item);
            });
        }
        if(arr2.length > 0){
            arr2.map((item) => {
                arr3.push(item.split(":")[0]);
                arr5.push(item.split(":")[1]);
            });
        }
        if(arr3.length > 0){
            arr3.map((item, index) => {
                let obj = {
                    val: item,
                    index: index,
                    tar: arr5[index]
                };
                arr4.push(obj);
            });
            let temp = arr3.sort(function (a, b) {
                return b - a;
            });
            temp.map((item) => {
                arr4.map((cur) => {
                    if (item === cur.val) {
                        tarStr += cur.tar;
                    }
                });
            });
        }
        return tarStr;
    }
};

let tempStr = [];//存储html
excelObj.map((item, index) => {
    if (index > 0) {
        if(item.length){
            const tar = adjustFn(item[6]);
            const obj = {'a': item[0], 'b': item[1], 'c': item[2], 'd': item[3], 'e': item[4], 'f': item[5], 'name': tar};
            tempStr.push(obj);
        }
    }
});

exportToExcel.exportXLSX({
    filename: '工作簿1校正',
    sheetname: '工作簿1校正',
    title: [
        {
            'fieldName': 'a',
            'displayName': '药品'
        },
        {
            'fieldName': 'b',
            'displayName': '功能主治'
        },
        {
            'fieldName': 'c',
            'displayName': '生产企业'
        },
        {
            'fieldName': 'd',
            'displayName': '字段1'
        },
        {
            'fieldName': 'e',
            'displayName': '字段2'
        },
        {
            'fieldName': 'f',
            'displayName': '字段3'
        },
        {
            'fieldName': 'name',
            'displayName': '字段4'
        }
    ],
    data: tempStr
});
console.log(`导出完成！\n 共${tempStr.length}; ${+new Date()}-${s}`);