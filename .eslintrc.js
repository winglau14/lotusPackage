module.exports = {
    "env": {
        "browser": true,
        "commonjs": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 5
    },
    "rules": {
        "indent": [
            0,
            "error",
            "tab"
        ],
        "linebreak-style": [
            0,
            "error",
            "windows"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-debugger": "off",//忽略debugger校验
        "no-console": "off",//忽略console校验
        "no-multiple-empty-lines": [1, {"max": 2}],//空行最多不能超过2行
        "no-spaced-func": 2,//函数调用时 函数名与()之间不能有空格
        "no-delete-var": 2,//不能对var声明的变量使用delete操作符
        "no-dupe-args": 2,//函数参数不能重复
        "no-else-return": 2,//如果if语句里面有return,后面不能跟else语句
        "no-empty": 2,//块语句中的内容不能为空
        "no-eq-null": 2,//禁止对null使用==或!=运算符
        "no-undef": 1,//不能有未定义的变量
        "no-undef-init": 2,//变量初始化时不能直接给它赋值为undefined
        "no-undefined": 2,//不能使用undefined
        "no-unexpected-multiline": 2,//避免多行表达式
        "no-unused-expressions": 2,//禁止无用的表达式
        "no-use-before-define": 2,//未定义前不能使用
        "camelcase": 2,//强制驼峰法命名
        "comma-dangle": [2, "never"],//对象字面量项尾不能有逗号
        "comma-spacing": 0,//逗号前后的空格
        "init-declarations": 0,//声明时必须赋初值
        "id-match": 0,//命名检测
    }
};