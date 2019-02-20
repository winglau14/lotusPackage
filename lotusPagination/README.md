# lotus-pagination

> pc端分页组件<br/>

1.how to use <br/>
```$xslt
<link rel="stylesheet" href="./lotusPagination.css">
<div class="lotus-pagination" id="lotus-pagination">
    <div class="lotus-pagination-total" id="lotus-pagination-total">共有<span id="lotus-pagination-total-num"></span>条记录</div>
    <div class="lotus-pagination-list" id="lotus-pagination-list">
        <a id="lotus-pagination-list-prev" href="javascript:void(0);">< 上一页</a>
        <div class="lotus-pagination-list-item" id="lotus-pagination-list-item"></div>
        <a id="lotus-pagination-list-next" href="javascript:void(0);">下一页 ></a>
        <span class="lotus-pagination-list-total" id="lotus-pagination-list-total"></span>
        <span class="lotus-pagination-list-go">到第 <label><input id="lotus-pagination-list-cur" value="1" type="text"></label> 页</span>
        <span class="lotus-pagination-list-ensure" id="lotus-pagination-list-ensure">确定</span>
    </div>
</div>
<div class="lotus-pagination" id="lotus-pagination1">
    <div class="lotus-pagination-total" id="lotus-pagination-total1">共有<span id="lotus-pagination-total-num1"></span>条记录</div>
    <div class="lotus-pagination-list" id="lotus-pagination-list1">
        <a id="lotus-pagination-list-prev1" href="javascript:void(0);">< 上一页</a>
        <div class="lotus-pagination-list-item" id="lotus-pagination-list-item1"></div>
        <a id="lotus-pagination-list-next1" href="javascript:void(0);">下一页 ></a>
        <span class="lotus-pagination-list-total" id="lotus-pagination-list-total1"></span>
        <span class="lotus-pagination-list-go">到第 <label><input id="lotus-pagination-list-cur1" value="1" type="text"> 页</label></span>
        <span class="lotus-pagination-list-ensure" id="lotus-pagination-list-ensure1">确定</span>
    </div>
</div>
<script src="./lotusPagination.js"></script>
<script type="text/javascript">
    lotusPagination.init({
        index: 0,//翻页索引值
        totalNum: 100,//总数量
        showPageSize: 10,//一页显示多少个
        maxShowNum: 7,//分页最大显示数量
        parentDom:'lotus-pagination',
        leftPageTotal:'lotus-pagination-total-num',
        domItemList:'lotus-pagination-list-item',
        prevBtn:'lotus-pagination-list-prev',
        nextBtn:'lotus-pagination-list-next',
        enSureBtn:'lotus-pagination-list-ensure',
        curNum:'lotus-pagination-list-cur',
        rightPageTotal:'lotus-pagination-list-total',
        hideLeftPageTotal:true,
        callback:function(response){
            console.log('选择第'+(response+1)+'页');
            test(response);
        }
    });
    //回调函数
    function test(res){
        console.log(`执行了回调：当前点击页码:${res+1}`);
    }
    lotusPagination.init({
        index: 0,//翻页索引值
        totalNum: 210,//总数量
        showPageSize: 10,//一页显示多少个
        maxShowNum: 7,//分页最大显示数量
        parentDom:'lotus-pagination1',
        leftPageTotal:'lotus-pagination-total-num1',
        domItemList:'lotus-pagination-list-item1',
        prevBtn:'lotus-pagination-list-prev1',
        nextBtn:'lotus-pagination-list-next1',
        enSureBtn:'lotus-pagination-list-ensure1',
        curNum:'lotus-pagination-list-cur1',
        rightPageTotal:'lotus-pagination-list-total1',
        callback:function(response){
            console.log('选择第'+(response+1)+'页');
            test(response);
        }
    });
</script>
```
2.参数介绍 <br/>
```$xslt
 * index:0 //翻页索引值，可修改
 * totalNum: 40 //总数量，可修改
 * showPageSize: 3 //每一页显示多少个，可修改
 * maxShowNum:7 //分页页码展示最大数量默认是7，可修改，建议设置的值>=5
 *hideLeftPageTotal:true//是否隐藏左侧共有多少条记录，可不传
 *以下都是dom节点元素，都是必填参数
 parentDom:'lotus-pagination1',
 leftPageTotal:'lotus-pagination-total-num1',
 domItemList:'lotus-pagination-list-item1',
 prevBtn:'lotus-pagination-list-prev1',
 nextBtn:'lotus-pagination-list-next1',
 enSureBtn:'lotus-pagination-list-ensure1',
 curNum:'lotus-pagination-list-cur1',
 rightPageTotal:'lotus-pagination-list-total1'
 * callback 回调函数 返回当前点击index
```

3.演示 

![lotusPagination](https://raw.githubusercontent.com/winglau14/lotusPackage/master/lotusPagination/1.gif)


