<template>
 <div>
    <el-container class="container">
    <el-aside>
      <side-menu-bar></side-menu-bar>
    </el-aside>
    <el-container>
        <el-header>
          <topbar></topbar>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer>
          <footerbar></footerbar>
        </el-footer>
    </el-container>
  </el-container>
 </div>
</template>

<script>
import footerbar from "./footer/footerComponent.vue";
import sideMenuBar from "./menu/sideMenuBarComponent.vue";
import topbar from "./topbar/topbarComponent.vue";
export default {
  name: "home",
  data() {
    return {
    
    };
  },
  components: {
    footerbar,
    sideMenuBar,
    topbar
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin: 20px;
  width: 80%;
  border: 1px solid #eee;
  margin-left: auto;
  margin-right: auto;
}
.el-header, .el-footer {
    color: #B3C0D1;
    text-align: center;
    line-height: 60px;
    padding:0;
  }
  .el-footer {
    line-height: 10px;
    height: 45px;
  }
  .el-aside {
    color: #333;
    text-align: left;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
