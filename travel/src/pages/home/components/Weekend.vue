<template>
    <div>
        <div class="recommend-title">精选主题</div>
        <ul>
            <li class="item border-bottom" v-for='item of recommendList' :key='item.id'>
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
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: '//bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/8ec38ff3b3c2baf9a4fa520faa4a3543.jpg',
        title: '天降我才必有用',
        desc: '不减肥就得死！一部被贬仙人在凡间的奋斗史！群号：832476624'
      },
      {
        id: '0002',
        imgUrl: '//bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/8ec38ff3b3c2baf9a4fa520faa4a3543.jpg',
        title: '天降我才必有用',
        desc: '不减肥就得死！一部被贬仙人在凡间的奋斗史！群号：832476624'
      },
      {
        id: '0003',
        imgUrl: '//bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/8ec38ff3b3c2baf9a4fa520faa4a3543.jpg',
        title: '天降我才必有用',
        desc: '不减肥就得死！一部被贬仙人在凡间的奋斗史！群号：832476624'
      },
      {
        id: '0004',
        imgUrl: '//bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/8ec38ff3b3c2baf9a4fa520faa4a3543.jpg',
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
    .image-wrapper
        overflow hidden
        height 0
        padding-bottom 40.3%
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
