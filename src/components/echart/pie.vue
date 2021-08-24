<template>
  <div>
    <h2>pie</h2>
    <div id="container"></div>
  </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'FormDemo',
  data () {
    return {
      dataSource: [
            {
              value: 2000,
              batchCount: "0000",
              cn: 150,
              createTime: "2021-07-01 14:14:53",
              etlDate: "2021-01-24",
              id: 1,
              labelId: 2,
              name: "标签2"
            },{
              value: 1072,
              batchCount: "0000",
              cn: 150,
              createTime: "2021-07-01 14:14:53",
              etlDate: "2021-01-24",
              id: 1,
              labelId: 3,
              name: "标签3"
            },{
              value: 2072,
              batchCount: "0000",
              cn: 150,
              createTime: "2021-07-01 14:14:53",
              etlDate: "2021-01-24",
              id: 1,
              labelId: 4,
              name: "标签4"
            }

          ]
    }
  },
  
  methods: {
      
      initChart() {
        var dom = document.getElementById("container");
        var myChart = echarts.init(dom);
        const option = {
          title: {
            text: '某站点用户访问来源',
            left: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: function(params) {
              const detail = params.data
              let tip = `<div>标签名：${detail.name}</div></br>
                <div>平均任务时长：${detail.value}</div></br>
                <div>数据日期：${detail.etlDate}</div></br>
                <div>批次：${detail.batchCount}</div></br>
                <div>任务数：${detail.cn}</div></br>
                `
              return tip
            }
          },
          legend: {
            orient: 'vertical',
            left: 'left',
          },
          series: [
              {
                  name: '访问来源',
                  type: 'pie',
                  radius: '50%',
                  data: this.dataSource,
                  emphasis: {
                      itemStyle: {
                          shadowBlur: 10,
                          shadowOffsetX: 0,
                          shadowColor: 'rgba(0, 0, 0, 0.5)'
                      }
                  }
              }
          ]
        }
        if (option && typeof option === 'object') {
            myChart.setOption(option);
        }
      }
  },
  mounted(){
    this.initChart()
  },
}
</script>
<style lang="css">
  #container{
    width: 400px;
    height: 500px;
  }
</style>

