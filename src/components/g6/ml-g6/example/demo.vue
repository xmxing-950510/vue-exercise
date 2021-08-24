<template>
  <div class="graph-wrap">
    <h2>ml-g6</h2>
    <ml-graph
      ref="graph"
      :data="graphData"
      class="graph-demo"
    ></ml-graph>
  </div>
</template>
<script>
import MlGraph from '../index.vue'
import { data, colors, strokes } from './data'
export default {
  components: {
    MlGraph
  },
  data() {
    return {
      graphData: {
        nodes: [],
        edges: []
      }
    }
  },
  mounted() {
    this.initData()
  },
  methods: {
    initData() {
      const nodes = data.nodes;
      const relationshipMap = new Map();
      console.log('relationshipMap', relationshipMap);
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
      this.graphData = data
      this.$refs.graph.graph.read(this.graphData)
      this.$refs.graph.graph.render()
      console.log(this.graphData);

    }
  }

}
</script>
<style lang="scss" scoped>
  .graph-wrap {
    width: 100%;
    height: 100%;
    .graph-demo {
      height: calc(100% - 60px)
    }
  }
</style>