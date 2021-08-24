<template>
  <div>
    <el-form ref="form" :model="formData" label-width="80px">
      <el-form-item label="活动名称">
        <el-select :multiple="true" v-model="formData.selected" placeholder="请选择">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

export default {
  name: 'FormDemo',
  data () {
    return {
      formData: {
        selected: []
      }
      
    }
  },
  
  methods: {
      
      
  },
  mounted(){
    
  },
}
</script>

