<template>
  <div id="topbar">
    <div class="topbar-wrapper">
      <span class="logo">VueResumer</span>
      <div class="actions">
        <div v-if="logined" class="userActions">
          <span>你好，{{user.username}}</span>
          <el-button type="primary" @click.prevent="signOut">退出</el-button>
        </div>
        <div v-else class="userActions">
          <el-button type="primary" @click="signUpDialogVisible = true">注册</el-button>
          <el-button @click="signInDialogVisible = true">登录</el-button>
        </div>
        <el-button class="actions-preview" @click="preview">预览</el-button>
      </div>
    </div>
    <MyDialog title="注册" :visible="signUpDialogVisible" @close="signUpDialogVisible = false">
      <SignUpForm @success="signIn($event)"></SignUpForm>
    </MyDialog>
    <MyDialog title="登录" :visible="signInDialogVisible" @close="signInDialogVisible = false">
      <SignInForm @success="signIn($event)"></SignInForm>
    </MyDialog>
  </div>
</template>
<script>
  import MyDialog from './MyDialog'
  import SignUpForm from './SignUpForm'
  import SignInForm from './SignInForm'
  import AV from 'leancloud-storage'

  export default{
      name:'Topbar',
      data(){
          return {
              signUpDialogVisible:false,
              signInDialogVisible:false
          }
      },
      computed:{
          user(){
              return this.$store.state.user
          },
          logined(){
              return this.user.id
          }
      },
      components:{
          MyDialog,
          SignUpForm,
          SignInForm
      },
      methods:{
          signOut(){
              AV.User.logOut();
              this.$store.commit('removeUser')
          },
          signIn(user){
              this.signUpDialogVisible = false;
              this.signInDialogVisible = false;
              this.$store.commit('setUser',user);
          },
          preview(){
              this.$emit('preview')
          }
      }
  }
</script>
<style>
  #topbar{
    background:#ffffff;
  }
  #topbar > .topbar-wrapper{
    margin:0 auto;
    max-width: 1440px;
    min-width: 1024px;
    height:64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
  }
  .logo{
    font-size:26px;
    color:#000;
  }
  .actions{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .actions .userActions span{
    font-size:16px;
    margin-right:5px;
  }
  .actions-preview{
    margin-left:12px;
  }
</style>
