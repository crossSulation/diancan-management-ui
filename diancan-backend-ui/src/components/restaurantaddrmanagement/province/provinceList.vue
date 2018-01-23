<template>
<div>
    <el-card  class="card-item">
            <div slot="header">
                <span>省</span>
            </div>
            <div>
              <el-table
                  height="350"
                  :data="provincedata">
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
     <edit-province v-bind:showdialog="addrProvinceEditVisible"></edit-province>
     <add-province :showdialog="addrProvinceAddVisible"></add-province>
</div>
</template>
<script>
import AddProvince from "../province/addrProvinceAdd.vue";
import EditProvince from "../province/addrProvinceEdit.vue";
import ViewProvince from "../province/addrProvinceView.vue";
export default {
  name: "province-list",
  data() {
    return {
      addrProvinceEditVisible: false,
      addrProvinceAddVisible: false,
      provincedata: [
        {
          code: "SH",
          name: "上海市",
          namecn: "上海市",
          nameen: "shanghai",
          desc: "上海市",
          desccn: "上海市",
          descen: "shanghai"
        },
        {
          code: "JX",
          name: "江西省",
          namecn: "江西省",
          nameen: "jiang xi province",
          desc: "江西省",
          desccn: "江西省",
          descen: "jiang xi province"
        },
        {
          code: "HB",
          name: "湖北省",
          namecn: "湖北省",
          nameen: "hu bei province",
          desc: "湖北省",
          desccn: "湖北省",
          descen: "hu bei province"
        },
        {
          code: "BJ",
          name: "北京市",
          namecn: "北京市",
          nameen: "bei jing city",
          desc: "北京市",
          desccn: "北京市",
          descen: "bei jing city"
        }
      ]
    };
  },
  computed: {},
  methods: {
    editprovince: function(index, row) {
      this.addrProvinceEditVisible = true;
    },
    addnewprovince: function(index, row) {
      this.addrProvinceAddVisible = true;
    },
    delprovince: function(index, row) {}
  },
  components:{
      AddProvince,
      EditProvince,
      ViewProvince
  }
};
</script>
<style lang="scss" scoped>
 .el-table {
      text-align: left;
  }
.el-button {
      padding:10px;
  }
</style>
