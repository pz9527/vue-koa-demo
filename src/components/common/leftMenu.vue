<template>
  <div class="leftMenu">
    <el-menu :default-active="onRoutes" theme="dark" class="el-menu-vertical-demo" @open="handleOpen"
             @close="handleClose" router>
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-menu"></i><span>订餐</span></template>
        <el-menu-item-group>
          <el-menu-item index="/Home/Ordering">预约订餐</el-menu-item>
          <el-menu-item index="">订餐记录</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="/Home/BaseTable"><i class="el-icon-message"></i>管理员</el-menu-item>
      <el-menu-item index="/home/BaseTable1"><i class="el-icon-edit"></i>报表统计</el-menu-item>
    </el-menu>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
    computed: {
      onRoutes() {
        return this.$route.path.replace('/', '');
      }
    }
  }
</script>
<style lang="scss">
  .leftMenu {
    display: block;
    position: fixed;
    bottom: 0;
    top: 60px;
    width: 190px;
    left: 0;
    z-index: 999;
    ul {
      height: 100%;
      border-radius: 0;
    }
  }
</style>
