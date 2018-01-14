<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Login from './components/login/loginComponent.vue';
import Home from './components/framework/homeComponent.vue'
export default {
  name: 'app',
  data () {
    return {
      title:''
    }
  },
  components: {
    Login,
    Home
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  margin: 0;
  padding: 0;
}
</style>
