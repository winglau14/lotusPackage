import {utils} from "../../static/js/utils.js";
import {lotusPagination} from "../../static/js/lib/lotusPagination";
import "../../static/style/xyzCommon.css"
lotusPagination.init({
    index: 0, //翻页索引值
    totalNum: 50, //总数量
    showPageSize: 10, //一页显示多少个
    maxShowNum: 7, //分页最大显示数量
    parentDom: "lotus-pagination",
    leftPageTotal: "lotus-pagination-total-num",
    domItemList: "lotus-pagination-list-item",
    prevBtn: "lotus-pagination-list-prev",
    nextBtn: "lotus-pagination-list-next",
    enSureBtn: "lotus-pagination-list-ensure",
    curNum: "lotus-pagination-list-cur",
    rightPageTotal: "lotus-pagination-list-total",
    //hideLeftPageTotal:true,
    callback: function (res) {
    }
});