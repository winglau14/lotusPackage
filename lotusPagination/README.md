# lotus-pagination

> pc端分页组件<br/>
> <br/>
1.how to use <br/>
```$xslt
<div class="lotus-pagination" id="lotus-pagination">
        <div class="lotus-pagination-list" id="lotus-pagination-list">
         <a id="lotus-pagination-list-prev" href="javascript:void(0);">< 上一页</a>
       <div class="lotus-pagination-list-item" id="lotus-pagination-list-item"></div>
                  <a id="lotus-pagination-list-next" href="javascript:void(0);">下一页 ></a>
               <span class="lotus-pagination-list-total" id="lotus-pagination-list-total"></span>
         <span class="lotus-pagination-list-go">到第 <input id="lotus-pagination-list-cur" value="1" type="text"> 页</span>
     <span class="lotus-pagination-list-ensure" id="lotus-pagination-list-ensure">确定</span>
   </div>
</div>
<script type="text/javascript" src="/lotusPagination.js"></script>
<script type="text/javascript">
lotusPagination.init({
        index: 0,//翻页索引值
        totalNum: 100,//总数量
        showPageSize: 10,//一页显示多少个
        maxShowNum: 7,//分页最大显示数量
        callback:function(response){
            console.log('选择第'+(response+1)+'页');
            test(response);
        }
    });
    //回调函数
    function test(obj){

    }
</script>	
```
2.参数介绍 <br/>
```$xslt
 * index:0 //翻页索引值，可修改
 * totalNum: 40 //总数量，可修改
 * showPageSize: 3 //每一页显示多少个，可修改
 * maxShowNum:7 //分页页码展示最大数量默认是7，可修改，建议设置的值>=5
 * callback 回调函数 返回当前点击index
```
<br/>
3.演示 <br/>
![lotusPicker](https://raw.githubusercontent.com/winglau14/lotusPackage/master/lotusPagination/1.gif)


