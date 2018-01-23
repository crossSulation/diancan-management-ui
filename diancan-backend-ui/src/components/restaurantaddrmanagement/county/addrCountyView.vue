<template>
  <el-form label-position="left" inline class="table-expand">
          <el-row :gutter="20">
            <el-col :span="12">
          <el-form-item label="代码">
            <span>{{ item.code }}</span>
          </el-form-item>
            </el-col>
            <el-col :span="12">
          <el-form-item label="名称">
            <span>{{ item.name }}</span>
          </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
          <el-form-item label="中文名称">
            <span>{{ item.namecn }}</span>
          </el-form-item>
            </el-col>
            <el-col :span="12">
          <el-form-item label="英文名称">
            <span>{{ item.nameen }}</span>
          </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
          <el-form-item label="描述">
            <span>{{ item.desc }}</span>
          </el-form-item>
            </el-col>
            <el-col :span="12">
          <el-form-item label="中文描述">
            <span>{{ item.desccn }}</span>
          </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
          <el-form-item label="英文描述">
            <span>{{ item.descen }}</span>
          </el-form-item>
            </el-col>
          </el-row>
        </el-form>
</template>
<script>
export default {
   name:'CountyView',
   props:{
      item: null
    },
    data() {
        return {

        }
    },
    created() {
     
    },
    computed:{

    }
}
</script>

<style lang="scss" scoped>
  .table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
  }
</style>
