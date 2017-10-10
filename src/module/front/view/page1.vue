<template>
  <div>
    <p>page1</p>
    <img src="~@/assets/Desert.jpg">
    <p class="testfont">heheda</p>
  </div>

</template>

<style lang="scss" scoped>
  @import '../../../style/public';
  img{
    width:10rem
  }
  .testfont{
    @include font-dpr(22px)
  }
</style>
<script></script>
