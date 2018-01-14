<template>
      <el-menu default-active="1-4-1" class="el-menu-vertical-container" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span slot="title">Dashboard</span>
          </template>
          <el-menu-item-group>
            <span slot="title">分组一</span>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <span slot="title">选项4</span>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">餐厅管理</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-setting"></i>
          <span slot="title">设置</span>
        </el-menu-item>
      </el-menu>
</template>

<script>
var vm = this;
export default {
  name: "side-menu-bar",
  data() {
    return {
      isCollapse:false
    };
  },
  created() {
    this.getMenuitems();
  },
  methods: {
    getMenuitems: function() {
      this.$api
        .get("src/components/framework/menu/apps.json")
        .then(function(resp) {
          vm.menuitems = resp.data.apps;
          console.log(vm.menuitems);
        })
        .catch(function(eror) {
          console.log(eror);
        });
    },
    handleOpen:function() {

    },
    handleClose:function() {

    }
  }
};
</script>

<style lang="scss">
  .el-menu-vertical-container:not(.el-menu--collapse) {
    min-height: 700px;
  }
</style>

