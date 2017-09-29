<template>
  <div id="editor">
    <nav>
      <ol>
        <li v-for="(item,index) in resume.config"
          :class="{active:item.field === selected}" @click="selected = item.field">
          <svg class="icon">
            <use :xlink:href="`#icon-${item.icon}`"></use>
          </svg>
        </li>
      </ol>
    </nav>
    <ol class="panes">
      <li v-for="item in resume.config" :class="{active:item.field === selected}">
        <h2>{{item[item.field]}}</h2>
        <div v-if="resume[item.field] instanceof Array">
          <div class="subitem" v-for="(subitem,i) in resume[item.field]">
            <div class="resumeField" v-for="(value,key) in subitem">
              <label>{{item[key]}}</label>
              <el-form>
                  <el-input :value="value" @input="changeResumeField(item.field,key,$event.target.value)"></el-input>
              </el-form>
            </div>
            <i class="el-icon-circle-close" @click="removeResumeSubfield(resume[item.field],i,`${item.field}`)"></i>
            <hr>
          </div>
          <el-button class="addButton" type="primary" @click="addResumeSubfield(item.field)">添加一项</el-button>
        </div>
        <div v-else class="resumeField" v-for="(value,key) in resume[item.field]">
          <label>{{item[key]}}</label>
          <el-form>
              <el-input :value="value" @input="changeResumeField(item.field,key,$event.target.value)"></el-input>
          </el-form>
        </div>
      </li>
    </ol>
  </div>
</template>
<script>
  export default {
      computed: {
        selected:{
          get(){
            return this.$store.state.selected
          },
          set(value){
              return this.$store.commit('switchTab',value)
          }
        },
        resume(){
            return this.$store.state.resume
        }
      },
      methods: {
        addResumeSubfield(field){
          this.$store.commit('addResumeSubfield',{field})
        },
        removeResumeSubfield(item,i){
          this.$store.commit('removeResumeSubfield',{
              item,
              i
          })
        },
        changeResumeField(field,subfield,value){
            this.$store.commit('updateResume',{
                field,
                subfield,
                value
            });

        }
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
  .subitem{
    position:relative;
  }
  .resumeField{
    margin-bottom:10px;
  }
  .resumeField label{
    display: block;
    margin-top:10px;
    margin-bottom:10px;
    font-size:16px;
  }
  .addButton{
    margin-top:10px;
  }
  .el-icon-circle-close{
    position:absolute;
    top:0;
    right:0;
  }
</style>
