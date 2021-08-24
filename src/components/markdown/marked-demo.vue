<template>
  <div>
    <h2>marked</h2>
    <div v-html="markdownData">
      
    </div>
  </div>
</template>

<script>
import marked from 'marked'
import axios from 'axios'

export default {
  name: 'HelloWorld',
  data () {
    return {
      markdownData: ''
    }
  },
  methods: {
    getPageData(){
      axios.get('/markdown/aaa.md')
      .then(res => {
        // console.log('data', res);
        if(res.status == 200) {
          this.handleData(res.data)
        }
      })
    },
    handleData(data) {
      console.log('data', data);
      const dom = marked(data)
      this.markdownData = dom

    },
    getMardownFileContent(data) {
		//处理markdown数据，data为markdown文件读出的字符串
      this.readmeContent = marked(data || '', {
        sanitize: true
      }); 
    }
  },
  mounted() {
    this.getPageData()
  }
}
</script>


