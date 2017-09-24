<template>
  <div id="editor">
    <nav>
      <ol>
        <li class="active">
          <svg class="icon">
            <use xlink:href="#icon-shenfenzheng"></use>
          </svg>
        </li>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-work"></use>
          </svg>
        </li>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-book"></use>
          </svg>
        </li>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-c-project-copy"></use>
          </svg>
        </li>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-jiangbei"></use>
          </svg>
        </li>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-phone-line"></use>
          </svg>
        </li>
      </ol>
    </nav>
  </div>
</template>
<style>
  #editor{
    border:1px solid red;
    min-height:200px;
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
</style>
