<template>
  <div class="home">
    <div class="main">
      <div>
        <v-header></v-header>
      </div>
      <div class="left">
        <v-menu></v-menu>
      </div>
      <div class="content">
        <transition name="el-zoom-in-top">
          <router-view v-show="show"></router-view>
        </transition>
      </div>
    </div>


  </div>
</template>
<script type="text/ecmascript-6">
  import header from  '../components/common/header.vue'
  import leftMenu from '../components/common/leftMenu.vue'
  import jwt from 'jsonwebtoken'
  export default{
    data(){
      return {
        show: true
      }
    },
    components: {
      'v-header': header,
      'v-menu': leftMenu
    },
    created(){
      let token=sessionStorage.getItem('demo-token')
      if(token){
        let decoded=jwt.decode(token,'vue-koa-demo');
        console.log(decoded)
        this.$store.commit('setUserInfo',decoded)
      }
    }
  }

</script>
<style lang="scss">
  $commonColor: '#20a0ff';
  .home {
    .content {
      position: absolute;
      left: 200px;
      top:70px;
      width: 85%;
      /*overflow: hidden;*/
      /*overflow-y: scroll;*/
    }

  }

</style>
