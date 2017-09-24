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
      <li :class="{active: currentType === 0}">tab1</li>
      <li :class="{active: currentType === 1}">tab2</li>
      <li :class="{active: currentType === 2}">tab3</li>
      <li :class="{active: currentType === 3}">tab4</li>
      <li :class="{active: currentType === 4}">tab5</li>
      <li :class="{active: currentType === 5}">tab6</li>
    </ol>
  </div>
</template>
<script>
  export default {
      data(){
          return {
            currentType:0,
            icons:['shenfenzheng','work','book','c-project-copy','jiangbei','phone-line']
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
  }
  .panes li{
    display: none;
  }
  .panes li.active{
    display:block;
  }
</style>
