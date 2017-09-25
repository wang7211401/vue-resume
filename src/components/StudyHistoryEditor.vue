<template>
  <div>
    <h2>学习经历</h2>
    <el-form>
      <div class="work-container" v-for="(item,index) in this.studyHistory">
        <el-form-item label="学校">
          <el-input v-model="item.school"></el-input>
        </el-form-item>
        <el-form-item label="学位">
          <el-input v-model="item.degree"></el-input>
        </el-form-item>
        <el-form-item label="时间">
          <el-input v-model="item.duration"></el-input>
        </el-form-item>
        <i class="el-icon-circle-close" @click="removeItem(index)"></i>
        <hr>
      </div>
      <el-button type="primary" @click="addItem">添加学习经历</el-button>
    </el-form>
  </div>
</template>
<script>
  export default{
    props:['studyHistory'],
    methods:{
      addItem(){
        this.studyHistory.push({
          company:'',
          content:''
        })
      },
      removeItem(index){
        this.studyHistory.splice(index,1)
      }
    }
  }
</script>
