<template>
  <div id="preview">
    <h1>{{resume.profile.name || '请填写姓名'}}</h1>
    <p>{{resume.profile.city || '请填写城市'}} | {{resume.profile.birth || '请填写出生年月'}}</p>
    <hr>
    <section v-if="filter(resume.workHistory).length > 0">
      <h2>工作经历</h2>
      <ul>
        <li v-for="work in filter(resume.workHistory)">
          {{work.company}}
          {{work.content}}
        </li>
      </ul>
    </section>
    <section v-if="filter(resume.studyHistory).length > 0">
      <h2>学习经历</h2>
      <ul>
        <li v-for="study in filter(resume.studyHistory)">
          {{study.school}}
          {{study.duration}}
          {{study.degree}}
        </li>
      </ul>
    </section>
    <section v-if="filter(resume.projects).length > 0">
      <h2>项目经历</h2>
      <ul>
        <li v-for="project in filter(resume.projects)">
          {{project.name}}
          {{project.content}}
        </li>
      </ul>
    </section>
    <section v-if="filter(resume.awards).length > 0">
      <h2>获奖情况</h2>
      <ul>
        <li v-for="award in filter(resume.awards)">
          {{award.name}}
        </li>
      </ul>
    </section>
    <section v-if="!isEmpty(resume.contacts)">
      <h2>联系方式</h2>
      <p>QQ：{{resume.contacts.qq}}</p>
      <p>微信：{{resume.contacts.wechat}}</p>
      <p>邮箱：{{resume.contacts.email}}</p>
      <p>电话：{{resume.contacts.phone}}</p>
    </section>
  </div>
</template>
<script>
  export default{
      props:['resume'],
      methods:{
          filter(array){ // 找出非空对象
              return array.filter(item=>!this.isEmpty(item))
          },
          isEmpty(object){ //只要有一个 value 不是空，就返回false
              let empty = true;
              for(let key in object){
                  if(object[key]){
                      empty = false;
                      break
                  }
              }
              return empty
          }
      }
  }
</script>
<style>
</style>
