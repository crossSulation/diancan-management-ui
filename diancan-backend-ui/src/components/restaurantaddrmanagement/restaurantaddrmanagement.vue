
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
                        <el-card  class="card-item">
                            <div slot="header">
                                <span>省</span>
                            </div>
                            <div>
                                <el-table
                                height="350"
                                :data="addrdata.province">
                                  <el-table-column type="expand">
                                     <template scope="props">
                                      <view-province :item="props.row"></view-province>
                                     </template>
                                  </el-table-column>
                                  <el-table-column
                                   width="80" 
                                   prop="code"
                                   label="代码"
                                  ></el-table-column>
                                   <el-table-column
                                    width="120"
                                   prop="name"
                                   label="名称"
                                  ></el-table-column>
                                  <el-table-column
                                   width="120"
                                   prop="desc"
                                   label="描述"
                                  ></el-table-column>
                                  <el-table-column
                                   label="操作"
                                  >
                                    <template slot-scope="scope">
                                       <el-button size="small" @click="editprovince(scope.$index,scope.row)">编辑</el-button>
                                       <el-button size="small" @click="addnewprovince(scope.$index,scope.row)">添加</el-button>
                                       <el-button size="small" type="danger" @click="delprovince(scope.$index,scope.row)">删除</el-button>
                                    </template>
                                  </el-table-column>
                                </el-table>
                            </div>
                        </el-card>
                   </el-col>
                   <el-col :span="12">
                        <el-card  class="card-item">
                            <div slot="header">
                                <span>市</span>
                            </div>
                        </el-card>
                   </el-col>
               </el-row>
               <!-- 县，乡镇 -->
               <el-row :gutter="20">
                   <el-col :span="12">
                         <el-card  class="card-item">
                            <div slot="header">
                                <span>县</span>
                            </div>
                        </el-card>
                   </el-col>
                   <el-col :span="12">
                      <el-card  class="card-item">
                            <div slot="header">
                                <span>乡镇</span>
                            </div>
                     </el-card>
                   </el-col>
               </el-row>
               <el-row :gutter="20">
                   <el-col :span="12">
                     <el-card class="card-item">
                        <div slot="header">
                            <span>街道</span>
                        </div>
                    </el-card>
                   </el-col>
               </el-row>
           </el-card>
           <edit-province v-bind:showdialog="addrProvinceEditVisible"></edit-province>
           <add-province :showdialog="addrProvinceAddVisible"></add-province>
   </div>
</template>

<script>
import BMap from '../map/baidumap.vue'
import AddProvince from '../restaurantaddrmanagement/addrProvinceAdd.vue'
import EditProvince from '../restaurantaddrmanagement/addrProvinceEdit.vue'
import ViewProvince from "../restaurantaddrmanagement/addrProvinceView.vue";
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
              province:[{
                  code:'SH',
                  name:'上海市',
                  namecn:'上海市',
                  nameen:'shanghai',
                  desc:'上海市',
                  desccn:'上海市',
                  descen:'shanghai'
              },
              {
                  code:'JX',
                  name:'江西省',
                  namecn:'江西省',
                  nameen:'jiang xi province',
                  desc:'江西省',
                  desccn:'江西省',
                  descen:'jiang xi province'
              },
              {
                  code:'HB',
                  name:'湖北省',
                  namecn:'湖北省',
                  nameen:'hu bei province',
                  desc:'湖北省',
                  desccn:'湖北省',
                  descen:'hu bei province'
              },
              {
                  code:'BJ',
                  name:'北京市',
                  namecn:'北京市',
                  nameen:'bei jing city',
                  desc:'北京市',
                  desccn:'北京市',
                  descen:'bei jing city'
              }
              ],
              city:[{
                  code:'',
                  desc:'',
                  desccn:'',
                  descen:''
              }],
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
    editprovince:function(index,row) {
       this.addrProvinceEditVisible =true;
    },
    addnewprovince:function(index,row) {
      this.addrProvinceAddVisible =true;
    },
    delprovince:function(index,row) {

    }
  },
  components:{
      BMap,
      AddProvince,
      EditProvince,
      ViewProvince
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
  .el-button {
      padding:10px;
  }
  .el-table {
      text-align: left;
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
</style>
