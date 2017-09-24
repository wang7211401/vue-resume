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
.icon {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height:100vh;
  display: flex;
  flex-direction: column;
}
.topbar{
  position:relative;
  z-index:1;
  box-shadow:0 0 5px rgba(0,0,0,.5);
}
main{
  flex:1;
  display:flex;
  width:100%;
  background:#eee;
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
</style>
