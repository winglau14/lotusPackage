const utils = {
    fromJson: obj => JSON.parse(obj),//字符串转json
    toJson: obj => JSON.stringify(obj),//json转字符串
    regPhone: /^(13|15|18|14|17)[0-9]{9}$/g,//手机号正则匹配
    regSixCode: /^\d{6}$/g,//六位验证码正则匹配
    regIntegral: /^[0-9]*$/g,//积分数字正则匹配
    //日期格式化
    dateFormat(val) {
        const time = val.split('-');
        time.map((item, index) => {
            if (item < 10) {
                time[index] = '0' + item
            }
        });
        return `${time[0]}-${time[1]}-${time[2]}`
    }
};
export default utils;



