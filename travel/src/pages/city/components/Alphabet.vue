<template>
   <ul class="list">
       <li class="item" v-for="(vlaue, name) of cities" :key='name'>{{name}}</li>

   </ul>
</template>

<script>
export default{
  name: 'CityAlphabet',
  props: {
    cities: Object
  }
}
</script>

<style lang='stylus' scoped>
  @import '~styles/varibles.styl'
  .list
    position absolute
    top 1.58rem
    right 0
    bottom 0
    width .4rem
    display flex
    flex-direction column
    justify-content center
    .item
      line-height .4rem
      text-align center
      color cadetblue
</style>
