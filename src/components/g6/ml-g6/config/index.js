// 图默认配置
export const initOptions = {
  animate: true, //开启全局动画
  // enabledStack: true, //启用操作栈
  // linkCenter: true, // 指定边是否连入节点的中心
  fitView: true, // 画布自适应，开启后图自动适配画布大小
  fitViewpadding: 20, // 画布开启自适应时四周留白

  // 画布的交互模式
  modes: {
    // 默认交互模式
    default: [
      // {
      //   type: 'zoom-canvas',
      //   enableOptimize: true, // 开启性能优化
      //   optimizeZoom: 0.9
      // },
      {
        type: 'drag-canvas',
        enableOptimize: true, // 开启性能优化
      },
      // 允许拖拽画布、放缩画布、拖拽节点
      'drag-canvas',
      'zoom-canvas',
      'drag-node',
      'click-select'
    ],

    // 框选模式
    // brushSelect: [
    //   {
    //     type: 'brush-select',
    //     trigger: 'drag'
    //   },
    //   'drag-node',
    //   'zoom-canvas',
    //   'click-select'
    // ]

  },

  // 默认节点配置
  defaultNode: {
    size: 30,
    style: {
      fill: 'steelblue', // 节点填充色
      stroke: '#666', // 节点描边色
      lineWidth: 1, // 节点描边粗细
    }
  },

  // 默认边配置
  defaultEdge: {
    type: 'flowing',
    color: '#546ce9',
    style: {
      lineWidth: 2,
      endArrow: {
        path: 'M 0,0 L 10,5 Q 7,0,10,-5 z',
        fill: '#546ce9',
        d: -30,
      }
    },
    labelCfg: {
      autoRotate: true, // 边上的标签文本根据边的方向旋转
      style: {
        fill: '#000',
        fontSize: 14
      }
    }
  },

  // 布局配置项
  layout: {
    // type: 'dendrogram', // 生态树布局（有特定的数据结构）
    // direction: 'LR', // 自左至右布局
    // nodeSep: 50, // 节点之间间距
    // rankSep: 100, //每个层级之间的间距
    type: 'dagre', // 一般布局，层次布局
    rankdir: 'LR',
    preventOverlap: true,
    linkDistance: function(cfg) {
      if(cfg.linkDistance) {
        return cfg.linkDistance
      }
      return 100
    }
  },

  // 节点不同状态下的样式集合
  nodeStateStyles: {
    // 选中样式
    selected: {
      stroke: '#ffcc00',
      lineWidth: 2,
      shadowBlur: 0,
    }
  },
  // 边不同状态下的样式集合
  edgeStateStyles: {
    selected: {
      type: 'flowing',
      stroke: '#ffcc00',
      lineWidth: 2,
      shadowBlur: 0,
      endArrow: {
        path: 'M 0,0 L 10,5 Q 7,0,10,-5 z',
        fill: '#ffcc00'
      }
    }
  }
}