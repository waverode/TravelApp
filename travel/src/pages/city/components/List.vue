<template>
   <div class="list" ref="wrapper">
      <div>
        <div class="aera">
            <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wrapper">
                        <div class='button'>
                            北京
                        </div>
                    </div>
                </div>
        </div>
        <div class="aera">
            <div class="title border-topbottom">热门城市</div>
            <div class="button-list">
                    <div class="button-wrapper" v-for="item of hot" :key='item.id'>
                        <div class='button' >
                            {{item.name}}
                        </div>
                    </div>
                </div>
        </div>
        <div class="aera" v-for='(value, name) of cities' :key='name'>
           <div class="title border-topbottom">{{name}}</div>
            <div class="item-list">
                <div class="item border-bottom" v-for='item of value' :key='item.id'>
                    {{item.name}}
                </div>
            </div>
       </div>
      </div>
   </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default{
  name: 'CityList',
  props: {
    cities: Object,
    hot: Array
  },
  mounted () {
    this.srcoll = new Bscroll(this.$refs.wrapper)
  }
}
</script>

<style lang='stylus' scoped>
    @import '~styles/varibles.styl'
    .border-topbottom
        &:before
            border-color #aaa
        &:after
            border-color #aaa
    .border-bottom
        &:before
            border-color #aaa
    .list
        overflow hidden
        position absolute
        top 1.58rem
        left 0
        right 0
        bottom 0
        .title
            line-height .44rem
            padding-left .2rem
            background-color #eeeeee
            color #666
            font-size .26rem
        .button-list
            overflow hidden
            padding .1rem .6rem .1rem .1rem
            .button-wrapper
                float left
                width 33.33%
                .button
                    margin .1rem
                    padding .1rem 0
                    text-align center
                    border .02rem solid #ccc
                    border-radius .06rem
        .item-list
            .item
                line-height .76rem
                padding-left .2rem
</style>
