<template>
  <div id="app">
    <Topbar class="topbar"></Topbar>
    <main>
      <Editor class="editor"></Editor>
      <Perview class="perview"></Perview>
    </main>
  </div>
</template>

<script>
  import Topbar from './components/Topbar'

  import Editor from './components/Editor'
  import Perview from './components/Perview'

  export default {
    name: 'app',
    components: {
      Topbar,
      Editor,
      Perview
    }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height:100vh;
  display: flex;
  flex-direction: column;
}
main{
  flex:1;
  display:flex;
  width:100%;
}
main .editor{
  width:300px;
}
main .perview{
  flex:1;
}
</style>
