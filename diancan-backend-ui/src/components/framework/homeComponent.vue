<template>
 <div class="container">
       <header class="el-header">
        <topbar></topbar>
      </header>
      <aside class="el-aside">
      <side-menu-bar></side-menu-bar>
    </aside>
    <main class="el-content">
      <router-view></router-view>
    </main>
     <footer class="el-footer">
        <footerbar></footerbar>
    </footer>
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
  margin-top: 20px;
  width: 80%;
  border: 1px solid #eee;
  box-shadow: #B3C0D1;
  position:absolute;
  left: 50%;
  transform: translateX(-50%);
  box-shadow:0 0 25px #cac6c6;
}
.el-content{
  margin-left:201px;
  min-height: 1200px;
}
.el-header, .el-footer {
    color: #B3C0D1;
    text-align: center;
    line-height: 60px;
    padding:0;
    height: 60px;
  }
  .el-footer {
    line-height: 10px;
    height: 45px;
  }
  .el-aside {
    color: #333;
    text-align: left;
    line-height: 200px;
    width: 200px;
    float: left;
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
  
</style>
