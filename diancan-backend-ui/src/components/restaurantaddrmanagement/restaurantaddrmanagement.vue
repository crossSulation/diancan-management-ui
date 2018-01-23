
<template>
   <div class="map">
       <b-map v-bind:zoom="mapinfo.zoom" v-bind:addr="mapinfo.addr" v-bind:ak="mapinfo.apikey"></b-map>
           <el-card class="addr-opts">
               <div slot="header">
                   <span>地址维护</span>
               </div>
               <!-- 省市 -->
               <el-row :gutter="20">
                   <el-col :span="12">
                      <province-list></province-list>
                   </el-col>
                   <el-col :span="12">
                      <city-list></city-list>
                   </el-col>
               </el-row>
               <!-- 县，乡镇 -->
               <el-row :gutter="20">
                   <el-col :span="12">
                      <county-list></county-list>
                   </el-col>
                   <el-col :span="12">
                      <town-list></town-list>
                   </el-col>
               </el-row>
               <el-row :gutter="20">
                   <el-col :span="12">
                     <street-list></street-list>
                   </el-col>
               </el-row>
           </el-card>
   </div>
</template>

<script>
import BMap from '../map/baidumap.vue'
import ProvinceList from '../restaurantaddrmanagement/province/provinceList.vue'
import CityList  from '../restaurantaddrmanagement/city/addrCityList.vue'
import CountyList  from '../restaurantaddrmanagement/county/addrCountyList.vue'
import TownList  from '../restaurantaddrmanagement/town/addrTownList.vue'
import StreetList  from '../restaurantaddrmanagement/street/addrStreetList.vue'
export default {
  name :'restaurantaddrmanagement',
  data(){
      return {
          pageinfo:'this is restaurant address management page',
          mapinfo:{
              zoom:15,
              addr: {
               latitude:'',
               longitude:''
              },
              apikey: this.$appconfigs.appconfigs.baiduapikey
          },
          addrProvinceEditVisible:false,
          addrProvinceAddVisible :false,
          addrProvinceViewVisible :false,
          addrdata:{
             
              county:[{
                  code:'',
                  desc:'',
                  desccn:'',
                  descen:''
              }],
              town:[{
                  code:'',
                  desc:'',
                  desccn:'',
                  descen:''
              }],
              street:[{
                  code:'',
                  desc:'',
                  desccn:'',
                  descen:''
              }]
          }
      }
  },
  updated(){
    
  },
  methods: {
   
  },
  components:{
      BMap,
      ProvinceList,
      CityList,
      CountyList,
      TownList,
      StreetList
  }  
}
</script>

<style lang="scss" scoped>
  .addr-opts {
   margin:10px;
  }
  .card-item {
      margin-bottom:20px;
  }
  .el-dropdown {
      width: 100%;
      border: 1px solid gainsboro;
      border-radius: 40%;
      text-align: center
  }
  .el-dialog {
      margin-top: 350px !important;
  }
  .el-row {
      margin-bottom: 20px;
  }
</style>
