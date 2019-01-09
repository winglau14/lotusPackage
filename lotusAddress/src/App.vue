<template>
    <div id="app">
        <p style="text-align: center;font-size: 0.5rem;" @click="openPicker">
            open picker选择省市区:<br/>{{provinceName ? provinceName : ''}} {{cityName ? cityName : ''}} {{townName ? townName : ''}}
        </p>
        <lotus-address @chosedVal="chosedVal" :lotusAddressData="lotusAddressData" :openFlag="openFlag"></lotus-address>
    </div>
</template>

<script>
    import LotusAddress from "./components/lotusAddress/LotusAddress.vue";

    export default {
        components: {LotusAddress},
        name: 'App',
        data() {
            return {
                provinceName: '',
                cityName: '',
                townName: '',
                openFlag: {
                    isShow: false
                },
                lotusAddressData: {
                    provinceName: '',
                    cityName: '',
                    townName: ''
                }
            }
        },
        methods: {
            //打开picker
            openPicker() {
                this.openFlag.isShow = true;
            },
            //获取最后选择的省市区的值
            chosedVal(result) {
                if (!this.openFlag.isShow) {
                    this.provinceName = result.province;
                    this.cityName = result.city;
                    this.townName = result.town;
                    this.lotusAddressData.provinceName = result.province;
                    this.lotusAddressData.cityName = result.city;
                    this.lotusAddressData.townName = result.town;
                }
            }
        },
        computed: {},
        created() {
        }
    }
</script>
