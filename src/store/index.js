import Vuex from 'vuex'
import Vue from 'vue'
import objectPath from 'object-path'
import AV from 'leancloud-storage'

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    selected:'profile',
    user:{
      id:'',
      username:''
    },
    resume:{
      config: [
        { field: 'profile',icon:'shenfenzheng',name:'姓名',city:'城市',birth:'出生年月',profile:'个人信息'},
        { field: 'workHistory',icon:'work',company:'公司',content:'工作内容',workHistory:'工作经历',keys: ['company','content']},
        { field: 'studyHistory',icon:'book',school:'学校',duration:'时间',degree:'学位',studyHistory:'学习经历',keys: ['school','duration','degree']},
        { field: 'projects',icon:'c-project-copy',name:'项目名称',content:'内容',projects:'项目经历',keys: ['name','content']},
        { field: 'awards',icon:'jiangbei',name:'奖励详情',awards:'获奖情况',keys: ['name']},
        { field: 'contacts',icon:'phone-line',qq:'QQ',wechat:'微信',email:'邮箱',phone:'电话',contacts:'联系方式'}
      ],
      profile:{
        name:'',
        city:'',
        birth:''
      },
      workHistory:[
        {company:'',content:''}
      ],
      studyHistory:[
        {school:'',duration:'',degree:''}
      ],
      projects:[
        {name:'',content:''}
      ],
      awards:[
        {name:''}
      ],
      contacts: {
        qq:'',wechat:'',email:'',phone:''
      }
    }
  },
  mutations: {
    initState(state,payload){
      Object.assign(state,payload)
    },
    switchTab(state,payload){
      state.selected = payload
      localStorage.setItem('state',JSON.stringify(state))
    },
    updateResume(state, {path, value}){
      objectPath.set(state.resume, path, value)
      localStorage.setItem('state',JSON.stringify(state))
    },
    removeResumeSubfield(state,{item,i}){
      item.splice(i,1)
      localStorage.setItem('resumer',JSON.stringify(state))
    },
    addResumeSubfield(state,{field}){
      let empty = {}
      state.resume[field].push(empty)
      state.resume.config.filter((i)=> i.field === field)[0].keys.map((key)=>{
        Vue.set(empty,key,'')
      })
    },
    setUser(state,payload){
      Object.assign(state.user,payload)
    },
    removeUser(state){
      state.user.id = null
    }
  }
})
