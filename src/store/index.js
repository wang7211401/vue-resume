import Vuex from 'vuex'
import Vue from 'vue'
import objectPath from 'object-path'

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    count: 0,
    currentType:0,
    icons:['shenfenzheng','work','book','c-project-copy','jiangbei','phone-line'],
    indexArray:[0,1,2,3,4,5],
    resume:{
      config: [
        { field: 'profile' },
        { field: 'workHistory'},
        { field: 'studyHistory' },
        { field: 'projects'},
        { field: 'awards'},
        { field: 'contacts'},
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
      contacts:{
        qq:'',wechat:'',email:'',phone:''
      }
    }
  },
  mutations: {
    switchTab(state,payload){
      state.currentType = payload
    },
    updateResume(state,{field,subfield,value}){
      field[subfield] = value
    }
  }
})
