<template>
      <el-menu default-active="/home/dashboard" class="el-menu-vertical-container" @open="handleOpen" @close="handleClose" :collapse="isCollapse" :router="true">
        <el-menu-item class="menu-item" index="/home/dashboard">
          <div>
          <icon name="dashboard" scale="2"></icon>
          </div>
          <span slot="title">Dashboard</span>
        </el-menu-item>
        <el-menu-item  class="menu-item" index="/home/restaurantmanagement">
        <div>
          <icon name="hotel" scale="2"></icon>
        </div>
          <span  slot="title">餐厅管理</span>
        </el-menu-item>
        <el-menu-item  class="menu-item" index="/home/restaurantmanagementaddr">
        <div>
          <icon name="location-arrow" scale="2"></icon>
        </div>
          <span  slot="title">餐址管理</span>
        </el-menu-item>
        <el-menu-item class="menu-item" index="/home/echart">
          <div>
            <icon name="pie-chart" scale="2"></icon>
          </div>
          <span slot="title">图表</span>
        </el-menu-item>
        <el-menu-item class="menu-item" index="/home/users">
          <div>
            <icon name="users" scale="2"></icon>
          </div>
          <span slot="title">用户管理</span>
        </el-menu-item>
        <el-menu-item  class="menu-item" index="/home/configs">
          <div>
            <icon name="cogs" scale="2">
            </icon>
          </div>
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
      isCollapse: false
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
    handleOpen: function() {},
    handleClose: function() {}
  }
};
</script>

<style lang="scss">
.el-menu-vertical-container:not(.el-menu--collapse) {
  min-height: 900px;
}
.el-menu {
  border-right: transparent;
  text-align: center;
  margin-left: 10px;
}
.menu-item {
  text-align: center;
  height: 120px;
  margin-bottom: 50px;
}
</style>

