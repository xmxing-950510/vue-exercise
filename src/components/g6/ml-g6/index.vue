<template>
  <div class="ml-g6-wrap">
    <!-- 图形容器 -->
    <div :id="containerId" style="width: 100%; height: 100%"></div>
    <!-- 几点右键菜单 -->

  </div>
</template>
<script>
import G6 from '@antv/g6'
// import G6 from './g6'
import { initOptions } from './config/index'

export default {
  name: 'g6',
  props: {
    containerId: {
      type: String,
      default: function () {
        return "g6-entity"
      }
    },
    data: {
      type: Object,
      default: function() {
        return {
          nodes: [],
          edges: []
        }
      }
    },
    disabledMenu: {
      type: Boolean,
      default: function() {
        return false
      }
    },
    handler: {
      type: Array,
      default: function() {
        return ['详情', '删除', '反选删除']
      }
    }
  },
  data() {
    return {
      left: 0,
      top: 0,
      showMenu: false,
      activeNode: null,
    }
  },
  created() {
  },
  mounted() {
    this.initG6()
    this.graphEvent()
  },
  methods: {
    // 初始化图
    initG6() {
      const container = document.getElementById(this.containerId)
      const width = container.scrollWidth
      const height = container.scrollHeight
      this.graph = new G6.Graph({
        container,
        width,
        height,
        ...initOptions,
      })
      if(this.graph) {
        this.graph.read(this.data)
        this.graph.render()
      }
    },
    // 给图挂载事件
    graphEvent() {
      console.log('给节点绑定事件');
      const self = this

      //节点点击事件，
      //选中的节点和边高亮显示，且有数据流动动画
      this.graph.on('node:click', function (evt) {
        console.log('node:click-------', evt);
        const { originalEvent: { ctrlKey } } = evt
        if(ctrlKey) { // 点击鼠标选中节点时是否按下ctrl键
          console.log('ctrlKey true--------------');
          const selectedNodes = this.findAllByState('node', 'selected')
          console.log('selectedNodes', selectedNodes);
          let edges = []
          for(let i = 0, len = selectedNodes.length; i < len; i++) {
            if (selectedNodes[i]) {
              edges = edges.concat(selectedNodes[i].getEdges())
            }
          }
          console.log('edges', edges);
          const keys = {}
          const arr = [] // 选中的无重复的边
          // 过滤重复的边
          for(let i = 0,len = edges.length; i < len; i++) {
            if(!keys[edges[i].get('id')]) {
              arr.push(edges[i])
              keys[edges[i].get('id')] = 1
            }
          }
          const allEdges = this.getEdges();
          const selectedArr =  arr.map((i) => i.get('id'))
          const notSelectedArr = [] // 没有被选中的边
          for(let i = 0, len = allEdges.lenght; i < len; i++) {
            if(!selectedArr.includes(allEdges[i].get('id'))) {
              notSelectedArr.push(allEdges[i])
            }
          }
          for(let i = 0, len = notSelectedArr.length; i < len; i++) {
            this.setItemState(notSelectedArr[i], 'running', false)
          }
          for(let i = 0, len = arr.length; i < len; i++) {
            this.setItemState(arr[i], 'running', true)
          }
        } else {
          // 给选中节点相关联的边设置running状态
          const [node] = this.findAllByState('node', 'selected')
          const edges = node ? node.getEdges() : []
          const allEdges = this.getEdges()
          const seleEdgeId = edges.map( (itr) => itr.get('id'))
          for(let i = 0, len = allEdges.length; i < len; i++) {
            if(seleEdgeId.includes(allEdges[i].get('id'))) {
              this.setItemState(allEdges[i], "running", true)
            } else {
              this.setItemState(allEdges[i], "running", false)
            }
          }
        }
      })

      //点击事件（节点、画布）让原本高亮的节点失去高亮
      // 右键菜单隐藏
      this.graph.on('click', function (evt) {
        console.log('点击了 click 节点或canvas');
        if (evt.name === 'click') {
          const selectEdges = this.findAllByState('edge', 'running')
          for(let i = 0, len = selectEdges.length; i < len; i++) {
            this.setItemState(selectEdges[i], 'running', false)
          }
        }
        self.showMenu = false
      })
    }
  }
  
}
</script>
<style lang="scss" scoped>
  .ml-g6-wrap {
    width: 100%;
    height: 100%;
    position: relative;
  }
</style>