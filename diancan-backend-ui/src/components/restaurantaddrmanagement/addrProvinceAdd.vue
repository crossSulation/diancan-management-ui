<template>
   <el-dialog title="省编辑" :visible.sync="isShow" top="50vh">
      <el-form :model="formdata">
        <el-form-item label="代码" :label-width="formLabelWidth">
          <el-input v-model="formdata.code" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="名称" :label-width="formLabelWidth">
          <el-input v-model="formdata.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="描述" :label-width="formLabelWidth">
          <el-input v-model="formdata.desc" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="中文描述" :label-width="formLabelWidth">
          <el-input v-model="formdata.desccn" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="英文描述" :label-width="formLabelWidth">
          <el-input v-model="formdata.descen" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth">
          <el-button @click="handlesubmit">确定</el-button>
          <el-button @click="isShow=false">取消</el-button>
        </el-form-item>
      </el-form>
   </el-dialog>
</template>
<script>
export default {
 name :'AddProvince',
 props:{
   showdialog:{
       type:Boolean,
       default:false
   }
 },
 data() {
     return {
         formdata: {
             code:'',
             name:'',
             desc:'',
             desccn:'',
             descen:''
         },
         formLabelWidth:'180px'
     }
 },
 methods:{
    handlesubmit:function() {

    }
 },
 computed:{
     isShow:{
         set:function(newVal) {
            this.showdialog =newVal;
         },
         get:function() {
           return this.showdialog;
         }
     }
 }  
}
</script>
<style lang="scss" scoped>

</style>
