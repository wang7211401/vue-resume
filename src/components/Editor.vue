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
        <ProfileEditor :profile="resume.profile"></ProfileEditor>
      </li>
      <li :class="{active: currentType === 1}">
        <ArrayEditor v-bind:items="resume.workHistory" v-bind:labels="{company:'公司',content:'工作内容'}" title="工作经历"></ArrayEditor>
      </li>
      <li :class="{active: currentType === 2}">
        <ArrayEditor v-bind:items="resume.studyHistory" v-bind:labels="{school:'学校',duration:'时间',degree:'学位'}" title="学习经历"></ArrayEditor>
      </li>
      <li :class="{active: currentType === 3}">
        <ArrayEditor v-bind:items="resume.projects" v-bind:labels="{name:'项目名称',content:'内容'}" title="项目经历"></ArrayEditor>
      </li>
      <li :class="{active: currentType === 4}">
        <ArrayEditor v-bind:items="resume.awards" v-bind:labels="{name:'奖励详情'}" title="获奖情况"></ArrayEditor>
      </li>
      <li :class="{active: currentType === 5}">
        <h2>联系方式</h2>
        <el-form>
          <el-form-item label="QQ">
            <el-input v-model="resume.contacts.qq"></el-input>
          </el-form-item>
          <el-form-item label="微信">
            <el-input v-model="resume.contacts.wechat"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input v-model="resume.contacts.email"></el-input>
          </el-form-item>
          <el-form-item label="手机">
            <el-input v-model="resume.contacts.phone"></el-input>
          </el-form-item>
        </el-form>
      </li>
    </ol>
  </div>
</template>
<script>
  import ProfileEditor from './ProfileEditor'
  import ArrayEditor from './ArrayEditor.vue'
  export default {
      components:{ProfileEditor,ArrayEditor},
      props:['resume'],
      data(){
          return {
            currentType:0,
            icons:['shenfenzheng','work','book','c-project-copy','jiangbei','phone-line']
          }
      },
      methods:{

      },
      created(){

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
  .container{
    position:relative;
  }
  .el-icon-circle-close{
    position:absolute;
    top:0;
    right:0;
  }
</style>
