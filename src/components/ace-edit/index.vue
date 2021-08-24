<template>
  <div class="hello">
    <code-editor 
      ref="_firstRefs" 
      class="editor h-100" 
      v-model="editorContent"
      readonly 
      language="javascript" 
      theme="tomorrow">
    </code-editor>
  </div>
</template>

<script>
import CodeEditor from './codeEditor.vue'

export default {
  name: 'HelloWorld',
  components: {
    CodeEditor
  },
  data () {
    return {
      editorContent: "hello world"
    }
  },
  methods: {
    
  }
}
</script>
