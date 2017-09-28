<template>
  <div>
    <h2>{{title}}</h2>
    <el-form>
      <div class="container" v-for="(item,index) in items">
        <el-form-item v-for="(key,i) in keys" v-bind:label="labels[key] || key" v-bind:key="key">
            <el-input v-model="item[key]" ></el-input>
        </el-form-item>
        <i class="el-icon-circle-close" @click="removeWorkHistory(index)"></i>
        <hr>
      </div>
      <el-button type="primary" @click="addWorkHistory()">添加一项</el-button>
    </el-form>
  </div>
</template>
<script>
  export default{
      props:['items','labels','title'],
      computed:{
        resume(){
          return this.$store.state.resume
        },
        keys(){
          return Object.keys(this.items[0])
        },
      },
      methods:{
        addWorkHistory(i){
          const empty = {};
          if(this.keys){
            this.keys.map((key)=>{
              empty[key] = ''
            });
            this.items.push(empty)
          }else{
            console.log(1)
          }
        },
        removeWorkHistory(index){
          this.items.splice(index,1)
        }
      }
  }
</script>
