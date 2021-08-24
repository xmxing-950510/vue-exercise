<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%;margin-bottom: 20px;"
      row-key="id"
      border
      default-expand-all
      ref="multipleTable"
      @selection-change="handleSelectionChange"
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
    >
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column min-width="130" label="Name" show-overflow-tooltip>
        <template slot-scope="scopes" width>
          <span v-if="scopes.row.id">{{scopes.row.id}}</span>
        </template>
      </el-table-column>
      <el-table-column min-width="100" prop="type" label="类型"></el-table-column>
      <el-table-column min-width="150" label="开始时间" show-overflow-tooltip>
        <template slot-scope="scopes">
          <span>{{scopes.row.startTime | formatTime}}</span>
        </template>
      </el-table-column>
      <el-table-column min-width="150" label="结束时间" show-overflow-tooltip>
        <template slot-scope="scopes">
          <span>{{scopes.row.endTime | formatTime}}</span>
        </template>
      </el-table-column>
      <el-table-column
        min-width="80"
        label="elapsed"
        prop="elapsed"
        show-overflow-tooltip
      ></el-table-column>
      <el-table-column min-width="130" prop="status" label="Status" class="btnstatus">
        <template slot-scope="scope">
          {{scope.row.status}}
        </template>
      </el-table-column>
    </el-table>
    <div style="margin-top: 20px">
      <el-button @click="toggleSelection([tableData[1], tableData[2]])">切换第二、第三行的选中状态</el-button>
      <el-button @click="toggleSelection()">取消选择</el-button>
    </div>
  </div>
</template>

<script>
import data from './table-data.js'
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
          status: 'failed',
          children: [{
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
          }]
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
    this.initTableDate()
    this.initTableCheck()
  },
  methods: {
      initTableDate() {
        const initTabledata= data.data
        console.log('data', initTabledata)
        let tableData = []
        tableData = initTabledata.map((item, index) => {
          item.ids = index + 1
          if(item.nodes){
            item.children = item.nodes
          }
          return item
        })
        console.log('tableData', tableData)
        this.tableData = tableData
        
      },
      initTableCheck(){
        console.log('initTableCheck')
        console.log('data', data)
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
        this.multipleSelection = checkedArr
        this.toggleSelection(checkedArr)
      },
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        console.log('check变化', val)
        this.multipleSelection = val;
        
        // 将勾选的数据格式化 按照父子嵌套
        
      }
    }
}
</script>

