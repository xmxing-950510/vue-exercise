<template>
  <div>
    <h2>g6</h2>
    <div id="mountNode">

    </div>
  </div>
  
</template>


<script>
  import G6 from '@antv/g6';
  export default {
    data() {
      return {
        // 点集
        data: {
          nodes: [
            {
              id: 'node1', // String，该节点存在则必须，节点的唯一标识
              x: 100, // Number，可选，节点位置的 x 值
              y: 200, // Number，可选，节点位置的 y 值
              label: 'n0'
            },
            {
              id: 'node2', // String，该节点存在则必须，节点的唯一标识
              x: 300, // Number，可选，节点位置的 x 值
              y: 200, // Number，可选，节点位置的 y 值
              label: 'n1'
            },
          ],
          // 边集
          edges: [
            {
              source: 'node1', // String，必须，起始点 id
              target: 'node2', // String，必须，目标点 id
            },
          ],
        }
      }
    },
    methods: {
      createGraph() {
        const graph = new G6.Graph({
          container: 'mountNode', // String | HTMLElement，必须，在 Step 1 中创建的容器 id 或容器本身
          width: 800, // Number，必须，图的宽度
          height: 500, // Number，必须，图的高度
          // 默认节点的配置
          defaultNode: {
            size: 42,
          },
          defaultEdge: {
            // type: 'flowing',
            color: '#546ce9',
            style: {
              lineWidth: 2,
              endArrow: {
                path: 'M 0,0 L 10,5 Q 7,0,10,-5 z',
                fill: '#546ce9'
              }
            }

          }
        });
        graph.data(this.data)
        graph.render()
      }
    },
    mounted() {
      this.createGraph()
    }
  };
</script>
<style>
  
</style>