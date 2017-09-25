<template>
  <div id="editor">
    <nav>
      <ol>
        <li v-for="i in [0,1,2,3,4,5]"
          :class="{active:currentType === i}" @click="currentType = i">
          <svg class="icon">
            <use :xlink:href="`#icon-${icons[i]}`"></use>
          </svg>
        </li>
      </ol>
    </nav>
    <ol class="panes">
      <li :class="{active: currentType === 0}">
        <ProfileEditor :profile="profile"></ProfileEditor>
      </li>
      <li :class="{active: currentType === 1}">
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
      </li>
      <li :class="{active: currentType === 2}">
        <h2>学习经历</h2>
      </li>
      <li :class="{active: currentType === 3}">
        <h2>项目经历</h2>
      </li>
      <li :class="{active: currentType === 4}">
        <h2>获奖经历</h2>
      </li>
      <li :class="{active: currentType === 5}">
        <h2>联系方式</h2>
      </li>
    </ol>
  </div>
</template>
<script>
  import ProfileEditor from './ProfileEditor'
  export default {
      components:{ProfileEditor},
      data(){
          return {
            currentType:0,
            icons:['shenfenzheng','work','book','c-project-copy','jiangbei','phone-line'],
            profile:{
                name:'',
                city:'',
                birth:''
            },
            workHistory:[
              {company:'',content:''}
            ]
          }
      },
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
      },
      created(){
        console.log(this.profile)
        setTimeout(()=>{
            console.log(this.profile)
        },1000)
      }

  }
</script>
<style>
  #editor{
    display: flex;
  }
  #editor nav{
    width:80px;
    height:100%;
    background: black;
  }
  #editor ol{

  }
  #editor ol li{
    padding:16px;
    text-align: center;
  }
  #editor ol li.active{
    background: #fff;
  }
  #editor ol li .icon{
    width:24px;
    height:24px;
    fill:#fff;
  }
  #editor ol li.active .icon{
    fill: #000;
  }
  .panes{
    width: 100%;
    height: 100%;
    background: #fff;
    overflow:auto;
  }
  .panes li{
    display: none;
    padding:32px;
  }
  .panes li.active{
    display:block;
  }
  .panes li h2{
    margin-top:20px;
  }
  .work-container{
    position:relative;
  }
  .el-icon-circle-close{
    position:absolute;
    top:0;
    right:0;
  }
</style>
