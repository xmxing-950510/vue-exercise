<template>
  <div class="left-menu-wrap">
    <el-menu 
      background-color="#545c64" 
      text-color="#ffffff"
      active-text-color="#ffd04b"
      >
      <el-submenu 
        v-for="item in menuList" 
        :key="item.key" 
        :index="item.key"
      >
        <template slot="title">
          <span :class="'iconfont ' + item.icon + ' icon-style'"></span>
          <span>{{item.name}}</span>
        </template>
        <router-link
          v-for="subItem in item.childen" 
          :key='subItem.key'
          :to='subItem.menuUrl'
        >
            <el-menu-item >
              {{subItem.name}}
            </el-menu-item>
        </router-link>
      </el-submenu>
    </el-menu>  
  </div>
</template>

<script>
  import { menuList } from '@/router/router-data.js'

  export default {
    data() {
      return {
        // 菜单数据
        menuList
      }
    },
    methods: {
      
    }
  }
</script>

<style lang="scss" scope>
  .left-menu-wrap {
    .icon-style {
      padding-right: 5px;
    }
    .router-link-exact-active {
      .el-menu-item {
        color: #ffd04b !important
      }
    }
  }
</style>