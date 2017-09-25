<template>
  <div>
    <h2>工作经历</h2>
    <el-form>
      <div class="work-container" v-for="(work,index) in this.workHistory">
        <el-form-item label="公司">
          <el-input v-model="work.company"></el-input>
        </el-form-item>
        <el-form-item label="工作内容">
          <el-input v-model="work.content"></el-input>
        </el-form-item>
        <i class="el-icon-circle-close" @click="removeWorkHistory(index)"></i>
        <hr>
      </div>
      <el-button type="primary" @click="addWorkHistory">添加工作经历</el-button>
    </el-form>
  </div>
</template>
<script>
  export default{
      props:['workHistory'],
      methods:{
        addWorkHistory(){
          this.workHistory.push({
            company:'',
            content:''
          })
        },
        removeWorkHistory(index){
          this.workHistory.splice(index,1)
        }
      }
  }
</script>
