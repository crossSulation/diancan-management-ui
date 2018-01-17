<template>
  <div id="topbar">
  <span class="profile-logo">点餐后台管理系统</span>
  <el-dropdown class="profile" @select="handleSelect">
     <span> {{username}}<i class="el-icon-arrow-down el-icon--right"></i></span>
    <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>设置</el-dropdown-item>
        <el-dropdown-item>消息中心<el-badge class="mark" :value="3" /></el-dropdown-item>
        <el-dropdown-item>登出</el-dropdown-item>
    </el-dropdown-menu>
    </el-dropdown>
    <img class="profile-img"/>
    <el-input class="topbar-search"  prefix-icon="el-icon-search" placeholder="搜索"/>
  </div>
</template>

<script>
export default {
  name:'topbar',
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      username: "laxliu"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    hiddenMenu(key,keypath) {
      console.log(key,keypath);
    }
  }
};
</script>

<style lang="scss" scoped>
#topbar {
  width: 100%;
  .profile {
    float: right;
    margin-right: 40px;
  }
  .topbar-search {
      width: 200px;
      float: right;
      margin-right: 40px;
  }
   span {
        height: 60px;
    }
}
.profile-img {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  border: 1px solid gainsboro;
  margin-top: 5px;
  margin-right: 10px;
  float: right;
}
.profile-logo {
  float: left;
  width: 200px;
}
</style>
