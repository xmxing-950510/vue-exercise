import Vue from 'vue'
import Router from 'vue-router'

import MainContainer from '@/components/main.vue'

import HelloWorld from '@/components/HelloWorld'
import LifeCycleDemo from '@/components/life-cycle/index'

//********** 
//g6
import G6Demo from '@/components/g6/demo'
import DemoAnimate from '@/components/g6/demo-animate'
import Tutorial2 from '@/components/g6/tutorial2'
import MlG6 from '@/components/g6/ml-g6/example/demo'

//********** 
//echart
import Bar from '@/components/echart/bar.vue'
import Pie from '@/components/echart/pie.vue'


//********************
//element-ui
 
// import ElementUIDemo from '@/components/element-ui/transfer'
// import ElementUIDemo from '@/components/element-ui/tree'
// import ElementUIDemo from '@/components/element-ui/form'
import ElementUIDemo from '@/components/element-ui/tree-select-demo'
// import ElementUIDemo from '@/components/element-ui/el-tree-transfer'
// import ElementUIDemo from '@/components/element-ui/table'
// import ElementUIDemo from '@/components/element-ui/asyn-table'

//********************
// d3js
 
// import D3Example from '@/components/d3js/example'
// import D3Example from '@/components/d3js/force-directed'

//*********************
//iconfont
import Icon from '@/components/iconfont/iconfont'

//*********************
// markdown
import MarkdownDemo from '@/components/markdown/marked-demo'

//*********************
// vue-pdf
import Pdf from '@/components/vue-pdf/pdf-demo'

//*********************
//ace
import AceEditor from '@/components/ace-edit/index.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/g6/ml-g6'
    },
    {
      path: '/basic',
      name: 'MainContainer',
      component: MainContainer,
      children: [
        {path: 'iconfont', component: Icon},
        {path: 'pie', component: Pie},
      ]
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/echart',
      name: 'Echart',
      component: MainContainer,
      children: [
        {path: 'bar', component: Bar},
        {path: 'pie', component: Pie},
      ]
    },
    {
      path: '/marked',
      name: 'MarkdownDemo',
      component: MarkdownDemo
    },
    {
      path: '/pdf',
      name: 'Pdf',
      component: Pdf
    },
    {
      path: '/ace',
      name: 'AceEditor',
      component: AceEditor
    },
    {
      path: '/iconfont',
      name: 'Icon',
      component: Icon
    },
    {
      path: '/element-ui',
      name: 'ElementUIDemo',
      component: ElementUIDemo
    },
    {
      path: '/life-cycle',
      name: 'LifeCycleDemo',
      component: LifeCycleDemo
    },
    {
      path: '/g6',
      name: 'G6Demo',
      component: MainContainer,
      children: [
        {path: 'demo', component: G6Demo},
        {path: 'tutorial2', component: Tutorial2},
        {path: 'ml-g6', component: MlG6},
        {path: 'demo-animate', component: DemoAnimate},
      ]
    },
    // {
    //   path: '/d3',
    //   name: 'D3Example',
    //   component: D3Example
    // }
  ]
})
