<template>
    <div>
        <div class="recommend-title">精选主题</div>
        <ul>
            <li class="item border-bottom" v-for='item of list' :key='item.id'>
                <div class='image-wrapper'>
                    <img :src="item.imgUrl" class="item-img">
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default{
  name: 'HomeWeekend',
  props: {
    list: Array
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl'
    .recommend-title
        margin-top : .2rem
        line-height : .8rem
        background : #eee
        text-indent : .2rem
    .image-wrapper
        overflow hidden
        height 0
        padding-bottom 37.09%
        .item-img
            width 100%
    .item-info
        padding .1rem
        .item-title
            line-height .54rem
            font-size .32rem
            ellipsis()
        .item-desc
            line-height .4rem
            color #ccc
            ellipsis()
</style>
