<template>
  <div id="topbar">
    <div class="logo">
      VueResumer
    </div>
    <div class="actions">
      <el-button type="primary">注册</el-button>
      <el-button>登录</el-button>
      <el-button @click="preview">预览</el-button>
    </div>
  </div>
</template>
<script>
  export default{
      methods:{
          preview(){
              this.$emit('preview')
          }
      }
  }
</script>
<style>
  #topbar{
    display:flex;
    justify-content: space-between;
    padding:16px;
  }
  .logo{
    font-size:26px;
  }
</style>
