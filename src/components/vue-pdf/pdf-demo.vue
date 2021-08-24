<template>
  <div>
    <h2>vue-pdf</h2>
    <div class="pdf-tab" id="pdf-box">
      <pdf 
        ref="pdf"
        :src="url"
        v-for="i in numPages" 
        :key="i"  
        :page="i"
      >
      </pdf>
    </div>
  </div>
</template>

<script>
import pdf from 'vue-pdf'
import Pdfh5 from 'pdfh5'
import axios from 'axios'
export default {
  name: 'pdfDemo',
  components:{
    pdf
  },
  data () {
    return {
      url: "http://localhost:8080/static/help/jianli.pdf",
      numPages: null, // pdf 总页数

    }
  },
  
  methods: {
    // 计算pdf页码总数
    getNumPages() {
      let loadingTask = pdf.createLoadingTask(this.url)
      loadingTask.promise.then(pdf => {
        console.log('pdf', pdf);
        this.numPages = pdf.numPages
        console.log(this.numPages);
      })
    },
    
    // pdfh5
    readPdf(){
      axios.get(this.url,{
        responseType:'arraybuffer'
      }).then(res=>{
        console.log('res', res)
        const pdf = new Pdfh5("#pdf-box",{
          data:res.data
        })
        console.log(pdf)
      })
    }
  },
  mounted(){
    this.getNumPages()
    // this.readPdf()
  },
}
</script>
<style>
  .pdf-tab {
    width: 950px;
    min-height: 400px;
  }
</style>

