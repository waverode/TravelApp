<template>
    <div>
        <div class="recommend-title">热销推荐</div>
        <ul>
            <li class="item border-bottom" v-for='item of recommendList' :key='item.id'>
                <img :src="item.imgUrl" class="item-img">
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default{
  name: 'HomeRecommend',
  data () {
    return {
          recommendList: [{
          id: '0001',
          imgUrl: '//bookcover.yuewen.com/qdbimg/349573/1012902516/150',
          title: '天降我才必有用',
          desc: '不减肥就得死！一部被贬仙人在凡间的奋斗史！群号：832476624'
      },
      {
          id: '0002',
          imgUrl: '//bookcover.yuewen.com/qdbimg/349573/1012902516/150',
          title: '天降我才必有用',
          desc: '不减肥就得死！一部被贬仙人在凡间的奋斗史！群号：832476624'
      },
      {
          id: '0003',
          imgUrl: '//bookcover.yuewen.com/qdbimg/349573/1012902516/150',
          title: '天降我才必有用',
          desc: '不减肥就得死！一部被贬仙人在凡间的奋斗史！群号：832476624'
      },
      {
          id: '0004',
          imgUrl: '//bookcover.yuewen.com/qdbimg/349573/1012902516/150',
          title: '天降我才必有用',
          desc: '不减肥就得死！一部被贬仙人在凡间的奋斗史！群号：832476624'
      },
      {
          id: '0005',
          imgUrl: '//bookcover.yuewen.com/qdbimg/349573/1012902516/150',
          title: '天降我才必有用',
          desc: '不减肥就得死！一部被贬仙人在凡间的奋斗史！群号：832476624'
      }
      ]
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
    .item
        display  flex
        height 1.9rem
        overflow hidden
        .item-img
            width:1.7rem
            height 1.7rem
            padding .1rem
        .item-info
            flex 1
            padding .1rem
            min-width 0
            .item-title
                line-height .54rem
                font-size .32rem
                ellipsis()
            .item-desc
                line-height .4rem
                color #ccc
                ellipsis()
            .item-button
                line-height .44rem
                background-color #ff9300
                padding 0 .2rem
                border-radius .06rem
                color #fff
                font-size .25rem
</style>
