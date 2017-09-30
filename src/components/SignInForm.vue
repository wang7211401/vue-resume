<template>
  <div>
    <form @submit.prevent="signIn">
      <div class="row">
        <label>账号</label>
        <input type="text" required v-model="formData.username">
      </div>
      <div class="row">
        <label>密码</label>
        <input type="password" required v-model="formData.password">
      </div>
      <div class="actions">
        <input type="submit" value="提交">
        <span>{{errorMessage}}</span>
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
