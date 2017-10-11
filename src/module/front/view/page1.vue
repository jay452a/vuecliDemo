<template>
  <div>
    <p>page1</p>
    <img src="~@/assets/Desert.jpg" >
    <p class="testfont">heheda</p>
    <div class="boxSizing1" data-ratio="16:9">content box</div>
    <div class="boxSizing2">border box</div>
    <router-link to="/page2">go to page2</router-link>
  </div>

</template>

<style lang="scss" scoped>
  @import '../../../style/public';
  img{
    width:px2rem(750px)
  }
  .testfont{
    @include font-dpr(22px)
  }
  .boxSizing1{
    margin: 1rem;
    width: 5rem;
    padding: 1rem;
    background: red;
    border:0.5rem solid;
    box-sizing:content-box; // w3c盒子模型
  }
  .boxSizing2{
    margin: 1rem;
    width: 5rem;
    padding: 1rem;
    background: red;
    border:0.5rem solid;
    box-sizing: border-box;// IE盒子模型
  }
</style>
<script>
  export default{
    activated () { //用了keepAlive之后的生命周期，激活组件
      console.log(11)
    }
  }
</script>
