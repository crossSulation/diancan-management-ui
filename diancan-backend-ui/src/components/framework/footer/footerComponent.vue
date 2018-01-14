<template>
   <ul class="footer-container">
       <li v-for="item in footerbaritems"
           v-bind:key="item.id">
           <span>{{item.desc}}</span>
       </li>
   </ul>
</template>

<script>
var footerbaritems =[
           {id:1,name:"cpustatus",desc:"cpu status"},
           {id:2,name:"space",desc:"space status"},
           {id:3,name:"contacinfo",desc:"contact info"},
           {id:4,name:"copyright",desc:"@Copy right,LLC enterprise"}
       ];
export default {
   name:"footerbar",
   data() {
       return {
           footerbaritems : footerbaritems
       };
   }
}
</script>

<style lang="scss" scoped>
  ul{
      display: inline-block;
      margin-left: 0px
  }
  li{
      text-decoration: none;
      list-style-type: none;
      list-style: none;
      float: left;
      display: block;
      margin-left: 20px
  }
</style>
