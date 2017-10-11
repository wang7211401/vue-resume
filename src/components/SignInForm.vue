<template>
  <div>
    <form @submit.prevent="signIn" class="signIn-form">
      <div class="row">
        <label>账号</label>
        <input type="text" required v-model="formData.username">
      </div>
      <div class="row">
        <label>密码</label>
        <input type="password" required v-model="formData.password">
      </div>
      <div class="actions">
        <input type="submit" value="登录">
        <span class="errorMessage">{{errorMessage}}</span>
      </div>
    </form>
  </div>
</template>

<script>
  import AV from 'leancloud-storage'
  import getErrorMessage from '../lib/getErrorMessage'
  import getAVUser from '../lib/getAVUser'
  export default {
    name: 'SignInForm',
    data(){
      return {
        formData: {
          username: '',
          password: ''
        },
        errorMessage: ''
      }
    },
    methods: {
      signIn(){
        AV.User.logIn(this.formData.username,this.formData.password).then(()=> {
//          this.$emit('success', {
//            username: loginedUser.attributes.username,
//            id: loginedUser.id
//          });
          this.$emit('success', getAVUser())
        }, (error)=> {
          this.errorMessage = getErrorMessage(error)
        });
      }
    }
  }
</script>
<style>
  .signIn-form{
    margin-top:24px;
  }
  .signIn-form > .row{
    margin-bottom:22px;
    text-align:center;
  }
  .signIn-form > .row label{
    font-size:16px;
    margin-right:10px;
    vertical-align: middle;
  }
  .signIn-form > .row input{
    width:60%;
    border-radius:4px;
    border:1px solid #bfcbd4;
    color:#1f2d3d;
    font-size:inherit;
    height:36px;
    line-height:1;
    outline:0;
    padding:3px 10px;
  }
  .signIn-form > .row input:focus{
    outline:0;
    border-color:#20a0ff;
  }
  .signIn-form > .actions{
    display: flex;
    justify-content:center;
    align-items:center;
  }
  .signIn-form > .actions input{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    margin: 0;
    padding: 10px 15px;
    border-radius: 4px;
    color:#fff;
    background:#20a0ff;
    border: 1px solid #20a0ff;
    outline:0;
  }
  .signIn-form > .actions input:focus{
    background: #4db3ff;
    border-color: #4db3ff;
    color: #fff;
  }
  .signIn-form > .actions .errorMessage{
    margin-left:5px;
    font-size:14px;
    color:red;
  }
</style>
