<template>
  <div>
    <form @submit.prevent="signUp" class="register-form">
      <div class="register-row">
        <label>账号</label>
        <input type="text" v-model="formData.username" required>
      </div>
      <div class="register-row">
        <label >密码</label>
        <input type="password" v-model="formData.password" required>
      </div>
      <div class="actions">
        <input type="submit" value="注册">
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
    name:'SignUpForm',
    data(){
      return {
        formData: {
          username: '',
          password: ''
        },
        errorMessage:''
      }
    },
    created(){
    },
    methods:{
      signUp(){
        if( !this.formData.username || !this.formData.password){alert('账号或密码不能为空!'); return false;}
        var user = new AV.User();
        user.setUsername(this.formData.username);
        user.setPassword(this.formData.password);
        user.signUp().then(() =>{
//          this.$emit('success', {
//             username: loginedUser.attributes.username,
//             id: loginedUser.id
//          })
          this.$emit('success', getAVUser())
        }, (error)=> {
            console.log(error);
            this.errorMessage = getErrorMessage(error)
        });
      }
    }
  }
</script>
<style>
  .register-form{
    margin-top:24px;
  }
  .register-form > .register-row{
    margin-bottom:22px;
    text-align:center;
  }
  .register-form > .register-row label{
    font-size:16px;
    margin-right:10px;
    vertical-align: middle;
  }
  .register-form > .register-row input{
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
  .register-form > .register-row input:focus{
    outline:0;
    border-color:#20a0ff;
  }
  .register-form > .actions{
    display: flex;
    justify-content:center;
    align-items:center;
  }
  .register-form > .actions input{
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
  .register-form > .actions input:focus{
    background: #4db3ff;
    border-color: #4db3ff;
    color: #fff;
  }
  .register-form > .actions .errorMessage{
    margin-left:5px;
    font-size:14px;
    color:red;
  }
</style>
