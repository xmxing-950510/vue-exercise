<template>
  <div>
    <h2>bar</h2>
    <div id="bar-container"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'FormDemo',
  data () {
    return {
      
    }
  },
  
  methods: {
      
      initBar() {
        var dom = document.getElementById("bar-container");
        var myChart = echarts.init(dom);
        const option = {
          dataset: [{
            dimensions: ['name', 'age', 'profession', 'score', 'date'],
            source: [
              [' Hannah Krause ', 41, 'Engineer', 314, '2011-02-12'],
              ['Zhao Qian ', 20, 'Teacher', 351, '2011-03-01'],
              [' Jasmin Krause ', 52, 'Musician', 287, '2011-02-14'],
              ['Li Lei', 37, 'Teacher', 219, '2011-02-18'],
              [' Karle Neumann ', 25, 'Engineer', 253, '2011-04-02'],
              [' Adrian Groß', 19, 'Teacher', null, '2011-01-16'],
              ['Mia Neumann', 71, 'Engineer', 165, '2011-03-19'],
              [' Böhm Fuchs', 36, 'Musician', 318, '2011-02-24'],
              ['Han Meimei ', 67, 'Engineer', 366, '2011-03-12'],
            ]}, {
            transform: {
                type: 'sort',
                config: { dimension: 'score', order: 'desc' }
            }
          }],
          
          xAxis: {},
          yAxis: {
              type: 'category',
              axisLabel: { interval: 0, rotate: 30 },
          },
          series: {
              type: 'bar',
              encode: { x: 'score', y: 'name' },
              datasetIndex: 1
          }
        }
        if (option && typeof option === 'object') {
            myChart.setOption(option);
        }
      }
  },
  mounted(){
    this.initBar()
  },
}
</script>
<style lang="css">
  #bar-container{
    width: 400px;
    height: 500px;
  }
</style>

