<template>
  <div class="hello">
    <h1>vue-cron</h1>
    <el-popover v-model="cronPopover">
            <vue-cron @change="changeCron" @close="cronPopover=false" i18n="cn"></vue-cron>
            <el-input slot="reference" @click="cronPopover=true" v-model="cron" placeholder="请输入定时策略"></el-input>
    </el-popover>
    <div class="logo"></div>
  </div>
</template>

<script>

export default {
  name: 'HelloWorld',
  data () {
    return {
      cronPopover:false,
      cron:''
    }
  },
  methods: {
    changeCron(val){
        this.cron=val
    },
  }
}
</script>
<style>
  .logo {
    width: 200px;
    height: 50px;
    background: url(../assets/haitong-logo.svg);
  }
</style>


