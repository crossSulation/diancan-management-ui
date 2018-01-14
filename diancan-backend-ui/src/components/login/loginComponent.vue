<template>
   <div class="login">
     <div class="profile"></div>
     <div class="login-container">
         <div class="login-form">
             <section class="form-input"></section>
             <section class="form-input"></section>
         </div>
     </div>
   </div>
</template>

<script>
export default {
  name:'login',
  data() {
      return {
          message:'login page'
      }
  }
}
</script>

<style lang="scss" scoped>
   .login{
       width:400px;
       height: 500px;
       position: absolute;
       top: 50%;
       left: 50%;
       border: 1px solid rgb(238, 229, 229);
       transform: translate(-50%,-50%)
   }
</style>
