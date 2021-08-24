<template>
  <div class="main-wrapper">
    <left-menu class="left-menu"></left-menu>
    <div class="main-content">
      <div class="content-wrapper">
        <router-view></router-view>
      </div>
    </div>    
  </div>
</template>

<script>
  import LeftMenu from './left-menu.vue'
  export default {
    components: {
      LeftMenu,
    },
    data() {
      return {
        title: ''
      }
    },
    methods: {
      
    }
  }
</script>
<style scoped lang="scss">
  .main-wrapper {
    width: 100%;
    height: 100%;
    .left-menu {
      width: 250px;
      height: 100%;
      float: left;
      background: #545c64;
    }
    .main-content {
      height: 100%;
      overflow: hidden;
      .content-wrapper {
        height: 100%
      }
    }
  }
</style>