const menuList = [
  {
    key: '0',
    name: '基础组件',
    icon: 'icon-zujian',
    childen: [{
      key: '0-1',
      name: 'iconfont图标',
      menuUrl: '/basic/iconfont'
    },{
      key: '0-2',
      name: '表格',
      menuUrl: ''
    }]
  },
  {
    key: '1',
    name: 'd3',
    icon: 'icon-juxingshutu',
  },
  {
    key: '2',
    name: 'echart',
    icon: 'icon-pie-chart',
    childen: [{
      key: '2-1',
      name: '柱状图',
      menuUrl: '/echart/bar'
    },{
      key: '2-2',
      name: '饼图',
      menuUrl: '/echart/pie'
    }]
  },
  {
    key: '3',
    name: 'Antv | G6',
    icon: 'icon-iconfonticon4',
    childen: [{
      key: '3-1',
      name: 'demo',
      menuUrl: '/g6/demo'
    },
    {
      key: '3-2',
      name: 'demo-animate',
      menuUrl: '/g6/demo-animate'
    },
    {
      key: '3-3',
      name: 'tutorial2',
      menuUrl: '/g6/tutorial2'
    },{
      key: '3-4',
      name: 'ml-g6',
      menuUrl: '/g6/ml-g6'
    }]
  },
  {
    key: '4',
    name: 'Element-UI',
    icon: 'icon-shouye',
  }
]

export { menuList }