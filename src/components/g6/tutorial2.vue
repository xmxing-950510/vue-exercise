<template>
  <div class="hello">
    <h1>g6/tutorial2</h1>
    <div id="mountNode"></div>
  </div>
</template>

<script>
import G6 from '@antv/g6'
import { data, colors, strokes} from './tutorial-data2'

export default {
  name: 'firstDemo',
  data(){
    return {
      tutorialData:{
        
      }
    }
  },
  methods: {

    // 初始化节点数据
    initData() {
      const nodes = data.nodes;
      const relationshipMap = new Map();
      // 节点初始化style
      nodes.forEach(function (node) {
        if (node.class && relationshipMap.get(node.class) === undefined) {
          relationshipMap.set(node.class, parseInt(node.class));
        }
        const cid = relationshipMap.get(node.class);
        if (!node.style) node.style = {};
        node.style.fill = colors[cid % colors.length];
        node.style.stroke = strokes[cid % strokes.length];
      });
      this.tutorialData = data
      console.log(this.tutorialData);
    },

    // 创建图
    createGragh() {
      this.initData()
      // 实例化 minimap 插件
      const minimap = new G6.Minimap({
        size: [100, 100],
        className: 'minimap',
        type: 'delegate',
      });

      const graph = new G6.Graph({
        container: 'mountNode', // String | HTMLElement，必须，在 Step 1 中创建的容器 id 或容器本身
        width: 1200, // Number，必须，图的宽度
        height: 700, // Number，必须，图的高度
        layout: {
          // type: 'force',
          // preventOverlap: true,
          // linkDistance: 100, // 指定边距离为100
          type: 'dendrogram', // 生态树布局
          direction: 'LR', // 自左至右布局
          nodeSep: 50, // 节点之间间距
          rankSep: 100, //每个层级之间的间距

        },
        fitView: true,
        fitViewPadding: [20, 40, 50, 20],
        modes: {
          default: [
            // 允许拖拽画布、放缩画布、拖拽节点
            'drag-canvas', 
            'zoom-canvas', 
            'drag-node',
            {
              type: 'tooltip', // 提示框
              formatText(model) {
                // 提示框文本内容
                const text = 'label: ' + model.label + '<br/> class: ' + model.class;
                return text;
              }
            },
            {
              type: 'edge-tooltip', // 边提示框
              formatText(model) {
                // 边提示框文本内容
                const text =
                  'source: ' +
                  model.source +
                  '<br/> target: ' +
                  model.target +
                  '<br/> weight: ' +
                  model.weight;
                return text;
              }
            }
          ] 
        },
        plugins: [minimap], // 将 minimap 实例配置到图上
        // 节点不同状态下的样式集合
        nodeStateStyles: {
          // 鼠标 hover 上节点，即 hover 状态为 true 时的样式
          hover: {
            fill: 'lightsteelblue',
          },
          // 鼠标点击节点，即 click 状态为 true 时的样式
          click: {
            stroke: '#000',
            lineWidth: 3,
          },
        },

        // 边不同状态下的样式集合
        edgeStateStyles: {
          // 鼠标点击边，即 click 状态为 true 时的样式
          click: {
            stroke: 'steelblue',
          },
        },

        // fitView: true,
        // fitViewPadding: [20, 40, 50, 20],
        defaultNode: {
          size: 30, // 节点大小
          // 节点样式配置
          style: {
            fill: 'steelblue', // 节点填充色
            stroke: '#666', // 节点描边色
            lineWidth: 1, // 节点描边粗细
          },
          // 节点上的标签文本配置
          labelCfg: {
            // 节点上的标签文本样式配置
            style: {
              fill: '#fff', // 节点标签文字颜色
            },
          },
        },
        // 边在默认状态下的样式配置（style）和其他配置
        defaultEdge: {
          // ...                 // 边的其他配置
          // 边样式配置
          style: {
            opacity: 0.6, // 边透明度
            stroke: 'grey', // 边描边颜色
          },
          // 边上的标签文本配置
          labelCfg: {
            autoRotate: true, // 边上的标签文本根据边的方向旋转
          },
        },
      });

      const { edges } = data

      edges.forEach((edge) => {
        if (!edge.style) {
          edge.style = {};
        }
        edge.style.lineWidth = edge.weight;
        edge.style.opacity = 0.6;
        edge.style.stroke = 'grey';
      });

      graph.data(this.tutorialData); // 读取 Step 2 中的数据源到图上
      graph.render(); // 渲染图

      // 鼠标进入节点
      graph.on('node:mouseenter', (e) => {
        const nodeItem = e.item; // 获取鼠标进入的节点元素对象
        graph.setItemState(nodeItem, 'hover', true); // 设置当前节点的 hover 状态为 true
      });

      // 鼠标离开节点
      graph.on('node:mouseleave', (e) => {
        const nodeItem = e.item; // 获取鼠标离开的节点元素对象
        graph.setItemState(nodeItem, 'hover', false); // 设置当前节点的 hover 状态为 false
      });

      // 点击节点
      graph.on('node:click', (e) => {
        // 先将所有当前是 click 状态的节点置为非 click 状态
        const clickNodes = graph.findAllByState('node', 'click');
        clickNodes.forEach((cn) => {
          graph.setItemState(cn, 'click', false);
        });
        const nodeItem = e.item; // 获取被点击的节点元素对象
        graph.setItemState(nodeItem, 'click', true); // 设置当前节点的 click 状态为 true
      });

      // 点击边
      graph.on('edge:click', (e) => {
        // 先将所有当前是 click 状态的边置为非 click 状态
        const clickEdges = graph.findAllByState('edge', 'click');
        clickEdges.forEach((ce) => {
          graph.setItemState(ce, 'click', false);
        });
        const edgeItem = e.item; // 获取被点击的边元素对象
        graph.setItemState(edgeItem, 'click', true); // 设置当前边的 click 状态为 true
      });

    }
  },
  mounted(){
    this.tutorialData = data
    this.createGragh()
    
  }

}
</script>


<style scoped>
  /* 提示框的样式 */
  .g6-tooltip {
    border: 1px solid #e2e2e2;
    border-radius: 4px;
    font-size: 12px;
    color: #545454;
    background-color: rgba(255, 255, 255, 0.9);
    padding: 10px 8px;
    box-shadow: rgb(174, 174, 174) 0px 0px 10px;
  }
</style>
