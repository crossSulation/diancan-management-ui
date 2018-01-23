<template>
  <div>
    <el-card  class="card-item">
            <div slot="header">
                <span>City</span>
            </div>
            <div>
              <el-table
                  height="350"
                  :data="citydata">
                     <el-table-column type="expand">
                        <template scope="props">
                          <view-city :cityrow="props.row"></view-city>
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
                     label="操作">
                     <template slot-scope="scope">
                        <el-button size="small" @click="editprovince(scope.$index,scope.row)">编辑</el-button>
                        <el-button size="small" @click="addnewprovince(scope.$index,scope.row)">添加</el-button>
                        <el-button size="small" type="danger" @click="delprovince(scope.$index,scope.row)">删除</el-button>
                    </template>
                  </el-table-column>
                </el-table>
            </div>
        </el-card>
     <edit-city v-bind:showdialog="addrCityEditVisible"></edit-city>
     <add-city :showdialog="addrCityAddVisible"></add-city>
</div>
</template>
<script>
import AddCity  from "../city/addrCityAdd.vue";
import EditCity  from '../city/addrCityEdit.vue';
import ViewCity  from "../city/addrCityView.vue";
export default {
   name:'city-list',
   data(){
       return {
          addrCityEditVisible:false,
          addrCityAddVisible :false,
          citydata:[
                {
                  code:'NC',
                  name:'南昌市',
                  namecn:'南昌市',
                  nameen:'City Nan Chang',
                  desc:'南昌市',
                  desccn:'南昌市',
                  descen:'City Nan Chang'
               },
               {
                  code:'GZ',
                  name:'赣州市',
                  namecn:'赣州市',
                  nameen:'City Gan Zhou',
                  desc:'赣州市',
                  desccn:'赣州市',
                  descen:'City Gan Zhou'
               },
               {
                  code:'SL',
                  name:'上饶市',
                  namecn:'上饶市',
                  nameen:'City Shang Rao',
                  desc:'上饶市',
                  desccn:'上饶市',
                  descen:'City Shang Rao'
               },
               {
                  code:'JDZ',
                  name:'景德镇市',
                  namecn:'景德镇市',
                  nameen:'City Jing de zhen',
                  desc:'景德镇市',
                  desccn:'景德镇市',
                  descen:'City Jing de zhen'
               }
            ],
       }
   },
   computed:{

   },
   methods:{
        editprovince: function(index, row) {
        this.addrCityEditVisible = true;
        },
        addnewprovince: function(index, row) {
        this.addrCityAddVisible = true;
        },
        delprovince: function(index, row) {

        }
  },
  components:{
     AddCity,
     EditCity,
     ViewCity
  }
}
</script>
<style lang="scss" scoped>
  .el-table {
      text-align: left;
  }
  .el-button {
      padding:10px;
  }
</style>
