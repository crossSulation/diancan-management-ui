
<template>
   <div class="map">
       {{pageinfo}}
       <div class="addr-opts"></div>
   </div>
</template>

<script>
import BMap from '../map/baidumap.vue'
export default {
  name :'restaurantaddrmanagement',
  data(){
      return {
          pageinfo:'this is restaurant address management page'
      }
  },
  components:{
      BMap
  }  
}
</script>

<style lang="scss" scoped>

</style>
