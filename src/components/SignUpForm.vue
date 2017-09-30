<template>
  <div>
    <form @submit.prevent="signUp">
      <div class="row">
        <label>账号</label>
        <input type="text" v-model="formData.username" required>
      </div>
      <div class="row">
        <label >密码</label>
        <input type="password" v-model="formData.password" required>
      </div>
      <div class="actions">
        <input type="submit" value="提交">
        <span class="errorMessage">{{errorMessage}}</span>
      </div>
    </form>
  </div>
</template>

<script>
  import AV from 'leancloud-storage'
  import getErrorMessage from '../lib/getErrorMessage'

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
