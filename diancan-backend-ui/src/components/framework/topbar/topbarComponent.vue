<template>
  <div id="topbar">
  <el-menu :default-active="activeIndex" class="profile" mode="horizontal" @select="handleSelect">
    <el-submenu index="1">
        <template slot="title">
            <span>{{username}}</span>
            <div class="profile-img"></div>
        </template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
    </el-submenu>
</el-menu>
  </div>
</template>

<script>
export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        username:'laxliu'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style lang="scss" scoped>
    #topbar {
        height: 60px;
        width: 100%;
        .profile {
            float: right;
            width: 150px;
        }
    }
    .profile-img {
        border-radius: 50%;
        width: 50px;
        height: 50px;
        float: right;
        border: 1px solid gainsboro;
        margin-top: 5px;
    }
</style>
