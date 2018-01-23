<template>
  <el-dialog title="Edit City" :visible.sync="isShow" top="50vh">
      <el-form :model="formdata">
        <el-form-item label="代码" :label-width="formLabelWidth">
          <el-input v-model="formdata.code" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="名称" :label-width="formLabelWidth">
          <el-input v-model="formdata.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="中文名称" :label-width="formLabelWidth">
          <el-input v-model="formdata.namecn" auto-complete="off"></el-input>
        </el-form-item>
         <el-form-item label="英文名称" :label-width="formLabelWidth">
          <el-input v-model="formdata.nameen" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="描述" :label-width="formLabelWidth">
          <el-input v-model="formdata.desc" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="中文描述" :label-width="formLabelWidth">
          <el-input v-model="formdata.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="英文描述" :label-width="formLabelWidth">
          <el-input v-model="formdata.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item :label-width="formLabelWidth">
          <el-button @click="handlesubmit">确定</el-button>
          <el-button @click="Show=false">取消</el-button>
        </el-form-item>
      </el-form>
   </el-dialog>
</template>
<script>
export default {
   props:{
       showdialog:{
           type:Boolean,
           default:false
       }
   },
   name:'city-edit',
   data(){
       return {
         formLabelWidth: '100px',
         formdata: {
            code : '',
            name : '',
            namecn:'',
            nameen:'',
            desc : '',
            desccn: '',
            descen :''
         },
         show: this.showdialog || false,
       }
   },
   computed:{
      isShow: {
      get:function() {
         return this.showdialog;
      },
      set:function(newVal) {
         this.show =newVal;
      }
    }
   },
   methods: {
      handlesubmit:function() {

      }
   }
}
</script>
<style lang="scss" scoped>

</style>
