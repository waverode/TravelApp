<template>
  <header>
    <div class='header-left'>
      <span class="iconfont backicon">&#xe600;</span>
    </div>
    <div class='header-input'>
      <span class="iconfont">&#xe633;</span>
      输入书名、作者或关键字</div>
    <router-link to='/city'>
      <div class='header-right'>登录
        <span class="iconfont downicon">&#xe67c;</span>
      </div>
    </router-link>
  </header>
</template>

<script>
export default{
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
  @import'~styles/varibles.styl'
  header
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
      display flex
      justify-context center
      align-item center
      margin-left .2rem
      .downicon
        font-size .44rem
</style>
