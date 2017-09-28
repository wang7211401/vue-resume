<template>
  <div id="editor">
    <nav>
      <ol>
        <li v-for="(i,index) in indexArray"
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
          <el-form-item label="电话">
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
      computed: {
        indexArray(){
            return this.$store.state.indexArray
        },
        currentType:{
          get(){
            return this.$store.state.currentType
          },
          set(value){
              return this.$store.commit('switchTab',value)
          }
        },
        icons(){
          return this.$store.state.icons
        },
        resume(){
            return this.$store.state.resume
        }
      },
      methods: {

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
  #editor nav li{
    margin-top:16px;
    width: 81px;
    height: 48px;
    display:flex;
    justify-content: center;
    align-items:center;
  }
  #editor nav li.active{
    background: #fff;
  }
  #editor nav li .icon{
    width:32px;
    height:32px;
    fill:#fff;
  }
  #editor nav li.active .icon{
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
