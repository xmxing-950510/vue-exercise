<template>
  <div>
    <h2>demo-animate</h2>
    <div id="container">

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
              id: 'node1',
              x: 100,
              y: 100,
              label: 'Node 1',
              labelCfg: {
                position: 'top',
              }
            },
            {
              id: 'node2',
              x: 300,
              y: 200,
              color: '#40a9ff',
              label: 'Node 2',
              labelCfg: {
                position: 'left',
                offset: 10,
              }
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
      // G6注册边
      registerEdge() {
        G6.registerEdge(
          'circle-running',  // 自定义边的名称
          { // 自定义边时的配置项
            /**
             * afterDraw 会之后的附加操作
             * @param  {Object} cfg 边的配置项
             * @param  {G.Group} group 图形分组，边中的图形对象的容器
             */
            afterDraw(cfg, group) {
              console.log('afterDraw----------');
              console.log('group', group);
              // 获取组内第一个形状，它是边路径
              const shape = group.get('children')[0];
              // 边路径的起点
              const startPoint = shape.getPoint(0);
              // 添加红色原型
              const circle = group.addShape('circle', {
                attrs: {
                  x: startPoint.x,
                  y: startPoint.y,
                  fill: '#1890ff',
                  r: 3,
                },
                name: 'circle-shape1',
              });
              console.log('添加圆形后 group', group);

              // 给红色圆形添加动画
              circle.animate(
                (ratio) => {
                  // 动画每帧的操作，ratio的范围是0~1，表示动画的进行，返回修改后的配置
                  // 通过ratio 得到边的位置
                  const tmpPoint = shape.getPoint(ratio);
                  return {
                    x: tmpPoint.x,
                    y: tmpPoint.y,
                  };
                },
                {
                  repeat: true, // Whether executes the animation repeatly
                  duration: 3000, // the duration for executing once
                },
              );
            },
          },
          'cubic', // extend the built-in edge 'cubic'
        );
      },
      createGraph() {
        const container = document.getElementById('container');
        const width = container.scrollWidth;
        const height = container.scrollHeight || 500;
        const graph = new G6.Graph({
          container: 'container',
          width,
          height,
          defaultEdge: {
            type: 'circle-running',
            style: {
              lineWidth: 2,
              stroke: '#bae7ff',
            },
          },
        });

        graph.data(this.data)
        graph.render()

        if (typeof window !== 'undefined'){
          window.onresize = () => {
            if (!graph || graph.get('destroyed')) return;
            if (!container || !container.scrollWidth || !container.scrollHeight) return;
            graph.changeSize(container.scrollWidth, container.scrollHeight);
          };
        }
          
      }
    },
    mounted() {
      this.registerEdge()
      this.createGraph()
    }
  };
</script>
<style>
  
</style>