<template>
  <div>
    <h2>tree-select-demo</h2>
    <tree-select 
      :height="400" 
      :width="200" 
      size="small"  
      :data="treeData" 
      :defaultProps="defaultProps" 
      multiple   
      clearable   
      collapseTags   
      :checkStrictly="false"
      :nodeKey="nodeKey"   
      :checkedKeys="defaultCheckedKeys"  
      @popoverHide="popoverHide"> 
    </tree-select>

    <!-- <h2>select</h2>
    <div>
      <el-select v-model="value1" multiple placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div> -->
  </div>
</template>

<script>
import TreeSelect from './tree-select.vue'

var menus = [
  {
    'menuId': 1,
    'menuName': '系统管理',
    'childrenList': [
      {
        'menuId': 100,
        'menuName': '用户管理',
        'childrenList': [
          {
            'menuId': 1000,
            'menuName': '用户查询'
          },
          {
            'menuId': 1001,
            'menuName': '用户新增'
          },
          {
            'menuId': 1002,
            'menuName': '用户修改'
          },
          {
            'menuId': 1003,
            'menuName': '用户删除'
          }
        ]
      },
      {
        'menuId': 101,
        'menuName': '角色管理',
        'childrenList': [
          {
            'menuId': 1006,
            'menuName': '角色查询'
          },
          {
            'menuId': 1007,
            'menuName': '角色新增'
          },
          {
            'menuId': 1008,
            'menuName': '角色修改'
          },
          {
            'menuId': 1011,
            'menuName': '删除角色'
          }
        ]
      }
    ]
  }
];

export default {
  name: 'FormDemo',
  data () {
    return {
      treeData: menus,
      defaultProps: {
        children: 'childrenList',
        label: 'menuName'
      },
      nodeKey: 'menuId',
      defaultCheckedKeys: [],
      options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value1: [],
    }
  },
  components: {
    TreeSelect
  },
  methods: {
    // 改变默认选中的节点数据
    popoverHide(checkedIds, checkedData) {
      // console.log(checkedIds);
      // console.log(checkedData);
    }
  },
  mounted(){
    this.defaultCheckedKeys = [1006, 1007];
  },
}
</script>

