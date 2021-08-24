<template>
  <div>
    <div>异步加载</div>
    <el-table
      :data="tableData"
      style="width: 100%;margin-bottom: 20px;"
      row-key="id"
      border
      default-expand-all
      ref="multipleTable"
      @selection-change="handleSelectionChange"
      lazy
      :load="load"
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
    >
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        prop="date"
        label="日期"
        sortable
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        sortable
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态">
      </el-table-column>
    </el-table>
    <div style="margin-top: 20px">
      <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
      <el-button @click="toggleSelection()">取消选择</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EchartDemo',
  data () {
    return {
      tableData: [{
          id: 1,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          status: 'success'
        }, {
          id: 2,
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          status: 'skipped'
        }, {
          id: 3,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          hasChildren: true,
          status: 'failed',
        }, {
          id: 4,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          status: 'cancled'
        }],
      multipleSelection: []
    }
  },
  mounted(){
    console.log('mounted')
    this.initTableCheck()
  },
  // updated(){
    //  是对改变 一个数组的项的属性检查不到改变？
  //   console.log('updated-----------')
  //   console.log('tableData', this.tableData)
  //   this.initTableCheck()
  // },
  // watch: {
  //   tableData: function(val) {
  //     console.log('tableData', val)
  //   }
  // },
  methods: {
      load(tree, treeNode, resolve) {
        // 困惑，改变this.tableData undated中的函数并没有执行。watch也没有执行
        console.log('load')
        console.log('tree', tree) // 为什么这里打印的tree 就有子节点了
        console.log('treeNode', treeNode)
        
        setTimeout(() => {
          const data = [
            {
              id: 31,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄',
              status: 'failed'
            }, {
              id: 32,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄',
              status: 'success'
            }
          ]
          for(let i=0; i< this.tableData.length; i++){
            if(this.tableData[i].id === tree.id) {
              this.tableData[i].children = data
              break
            }
          }
          resolve([])
          this.initTableCheck()
        }, 1000)
      },
      initTableCheck(){
        console.log('initTableCheck')
        let checkedArr = [];
        function checkStatus (arr) {
          console.log('arr', arr)
          for(let item of arr) {
            if(item.status !== 'success') {
              checkedArr.push(item)
            }
            if(item.children && item.children.length > 0) {
              checkStatus(item.children)
            }
          }
        }
        checkStatus(this.tableData)
        console.log('checkedArr', checkedArr)
        this.multipleSelection = checkedArr
        this.toggleSelection(checkedArr)
      },
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row, true);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        console.log('check变化', val)
        this.multipleSelection = val;
        
        // 将勾选的数据格式化 按照父子嵌套
        console.log('handleSelectionChange tableData',this.tableData)
      }
    }
}
</script>

