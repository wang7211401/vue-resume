<template>
  <div id="app" v-bind:class="{previewMode:previewMode}">
    <nav class="wrapper">
      <Topbar class="topbar" @preview="preview"></Topbar>
    </nav>
    <main class="main">
      <Editor v-bind:resume="resume" class="editor"></Editor>
      <Preview v-bind:resume="resume" class="perview"></Preview>
    </main>
    <el-button id="exitPreview" @click="exitPreview">退出预览</el-button>
  </div>
</template>

<script>
  import Topbar from './components/Topbar'
  import Editor from './components/Editor'
  import Preview from './components/Preview'
  import store from './store/index.js'
  import AV from './lib/leancloud'
  import getAVUser from './lib/getAVUser'

  export default {
    name:'app',
    store,
    data(){
        return {
            previewMode: false
        }
    },
    computed:{
      resume(){
        return this.$store.state.resume
      }
    },
    methods:{
        exitPreview(){
            this.previewMode = false
        },
        preview(){
            this.previewMode = true
        }
    },
    components: {
      Topbar,
      Editor,
      Preview
    },
    created(){
        let state = localStorage.getItem('state');
        if(state){
            state= JSON.parse(state)
        }
        this.$store.commit('initState',state);
        this.$store.commit('setUser',getAVUser())
    }
  }
</script>

<style>
.icon {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
body{
  background: #ECEEF3;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height:100vh;
  display: flex;
  flex-direction: column;
  background: #EAEBEC;
}
.wrapper{
  position:relative;
  z-index:1;
  box-shadow:0 0 5px rgba(0,0,0,.5);
  background: #FFFFFF;
}
.topbar{
  margin:0 auto;
}
.main{
  flex:1;
  display:flex;
  width:100%;
  max-width: 1440px;
  min-width:1024px;
  margin:0 auto;
}
main .editor{
  width:40em;
  margin:16px 8px 16px 16px;
  border-radius:5px;
  box-shadow:0 0 5px rgba(0,0,0,.5);
  overflow: hidden;
}
main .perview{
  flex:1;
  background: #fff;
  margin:16px 16px 16px 8px;
  border-radius:5px;
  box-shadow:0 0 5px rgba(0,0,0,.5);
  overflow: hidden;
}
.previewMode .wrapper{
  display:none;
}
.previewMode #editor{
  display:none;
}
.previewMode #preview{
  max-width:800px;
  margin:16px auto;
}
#exitPreview{
  display:none;
}
.previewMode #exitPreview{
  display:inline-block;
  position:fixed;
  right:16px;
  bottom:16px;
}
</style>
