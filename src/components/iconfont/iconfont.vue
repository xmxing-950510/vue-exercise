<template>
  <div class="iconfont-page">
    <h1>iconfont</h1>
    <div class="icon-container">
      <div class="item-container" v-for="item in icons" :key="item.name">
        <div><span :class="'iconfont ' + item.name + ' icon'"></span> </div>
        <div>{{item.name}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import data from './iconfont-data'
export default {
  name: 'HelloWorld',
  data () {
    return {
      icons: data
    }
  },
  methods: {
    
  }
}
</script>
<style lang="scss" scoped>
  .iconfont-page {
    height: 100%;
    .icon-container {
      display: flex;
      flex-wrap: wrap;
      .item-container {
        width: 160px;
        height: 80px;
        .icon {
          text-align: center;
          font-size: 40px;
        }
      }
    }

  }
</style>


