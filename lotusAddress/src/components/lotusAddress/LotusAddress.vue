<template>
    <div>
        <lotus-picker :status="changeStatus" :lotusPickerData="items" @change="change" :flag="openFlag"></lotus-picker>
    </div>
</template>
<script>
    import LotusPicker from "./lotusPicker/LotusPicker.vue";
    import {lotusAddressJson} from  "./lotusAddressJson.js";
    export default {
        name: 'lotus-address',
        props: ["lotusAddressData","openFlag"],
        components: {
            LotusPicker
        },
        data () {
            return {
                items: [
                    {
                        values: [],
                        index: 0,
                        type: 'province',
                        linkage:true,
                    }, {
                        values: [],
                        index: 0,
                        type: 'city',
                    }, {
                        values:[],
                        index: 0,
                        type: 'town',
                    }
                ],
                province:[],
                city:[],
                town:[],
                provinceName:'',
                cityName:'',
                townName:'',
                status:false
            }
        },
        methods: {
            //获取change的值
            change(result){
                if(result[0].val&&result[0].act){
                    //操作省设置市区两列数据
                    const pid = this.getTarId(result[0].val);
                    //设置市的数据
                    this.items[1].values = this.getCityArr(pid);
                    this.items[2].values.length = 0;
                    //设置区的数据
                    const cid= this.getTarId(this.items[1].values[0]);
                    this.items[2].values = this.getTownArr(cid);
                }else if(result[1].val){
                    //操作市设置区单列数据
                    //设置区的数据
                    const cid= this.getTarId(result[1].val);
                    this.items[2].values = this.getTownArr(cid);
                }
                result.map((item,index)=>{
                    if(index === 0){
                        this.provinceName = item.val;
                    }else if(index === 1){
                        this.cityName = item.val;
                    }else if(index===2){
                        this.townName = item.val;
                    }
                });
                //回填已选省市区的值
                this.$emit('chosedVal',{
                    province:this.provinceName,
                    city:this.cityName,
                    town:this.townName
                });
            },
            openPicker(){
                //设置已选省市区
                this.setChosedVal();
            },
            //获取省市区value
            getTarId(name){
                let id = 0;
                lotusAddressJson.map((item,index)=>{
                    if(item.name === name){
                        id = item.value;
                    }
                });
                return id;
            },
            //获取市数据
            getCityArr(parentId){
                let city = [];
                lotusAddressJson.map((item,index)=>{
                    if(item.parent === parentId){
                        city.push(item.name);
                    }
                });
                return city;
            },
            //获取区数据
            getTownArr(parentId){
                let town = [];
                lotusAddressJson.map((item,index)=>{
                    if(index>34&&item.parent === parentId){
                        town.push(item.name);
                    }
                });
                return town;
            },
            //初始化数据
            initFn(){
                lotusAddressJson.map((item,index)=>{
                    if(index<=34){
                        this.province.push(item.name);
                    }
                });
                this.items[0].values = this.province;
                const pid = this.getTarId(this.items[0].values[0]);
                this.items[1].values = this.getCityArr(pid);
                const cid= this.getTarId(this.items[1].values[0]);
                this.items[2].values = this.getTownArr(cid);
            },
            //获取已选省市区index
            getTarIndex(arr,tarName){
                let cIndex = 0;
                arr.map((item,index)=>{
                    if(item === tarName){
                        cIndex = index;
                    }
                });
                return cIndex;
            },
            //设置已选省市区
            setChosedVal(){
                if(this.provinceName){
                    //设置选中的省index
                    this.items[0].index = this.getTarIndex(this.items[0].values,this.provinceName);
                    const pid = this.getTarId(this.provinceName);
                    this.items[1].values = this.getCityArr(pid);
                    //设置选中的市index
                    this.items[1].index = this.getTarIndex(this.items[1].values,this.cityName);
                    const cid= this.getTarId(this.cityName);
                    this.items[2].values = this.getTownArr(cid);
                    this.items[2].index = this.getTarIndex(this.items[2].values,this.townName);
                }
            }
        },
        computed: {
            changeStatus(){
                const _this = this;
                _this.status = this._props.openFlag.isShow;
            }
        },
        watch:{
            status(val,oldVal){
                //设置已选省市区
                this.setChosedVal();
            }
        },
        mounted() {
        },
        created(){
            //初始化数据
            this.initFn();
        }
    }
</script>