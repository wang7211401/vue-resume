<template>
  <div class="dialog-wrapper" v-show="visible">
    <div class="dialog">
      <header>
        <h2>{{title}}</h2>
        <span class="close" @click="close">X</span>
      </header>
      <main>
        <slot></slot>
      </main>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'MyDialog',
    props: ['title', 'visible'],
    methods: {
      close(){
        this.$emit('close')
      }
    }
  }
</script>

<style>
  .dialog-wrapper{
    position: fixed;
    background: hsla(0, 0%,0%,0.25);
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .dialog {
    background: white;
    min-height: 4em;
    min-width: 10em;
  }
  .dialog > header{
    padding: 18px 20px;
    display: flex;
    justify-content: space-between;
    border:1px solid #d1dbe5;
  }
  .dialog header h2{
    font-weight: normal;
  }
  .dialog header .close{
    font-size:20px;
  }
  .dialog > main{
    padding: 20px;
    min-width:400px;
    min-height:230px;
  }
</style>
