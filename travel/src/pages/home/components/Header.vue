<template>
  <div class='header'>
    <div class='header-left'>
      <span class="iconfont backicon">&#xe600;</span>
    </div>
    <div class='header-input'>
      <span class="iconfont">&#xe633;</span>
      输入城市、景点、游玩主题</div>
    <div class='header-right'>城市
      <span class="iconfont downicon">&#xe601;</span>
    </div>
  </div>
</template>

<script>
export default{
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  @import'~styles/varibles.styl'
  .header
    line-height: 0.86rem
    display: flex
    background-color: $bgColor
    color: #FFFFFF
    .header-left
      width: .64rem
      float: left
      .backicon
        display : block
        text-align : center
        font-size : .4rem
    .header-input
      flex: 1
      line-height : .64rem
      background-color : #FFFFFF
      color: gray
      border-radius : .1rem
      margin-top : .12rem
      padding-left : .2rem
      height : .64rem
      margin-left : .2rem
    .header-right
      width: 1.24rem
      float: right
      text-align : center
      .downicon
        font-size : .24rem

</style>
