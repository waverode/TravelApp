<template>
  <div class='icons'>
    <swiper :options="swiperOptions">
      <swiper-slide v-for='(page, index) of pages' :key='index'>
        <div class="icon" v-for='item of page' :key='item.id'>
          <div class="icon-image">
            <img :src='item.imgUrl' class='img-context'/>
          </div>
          <p class='icon-title'>{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default{
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOptions: {
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/mixins.styl'
  .icons >>> .swiper-container
    height : 0
    //百分比是等于父级宽度
    padding-bottom : 50%
  .icons
    margin-top: .2rem
    .icon
      position: relative
      float: left
      width : 25%//百分比是等于父级宽度
      height: 0
      padding-bottom : 25%//百分比是等于父级宽度
      .icon-image
        position: absolute
        top: 0
        left: 0
        right: 0
        bottom: .44rem
        box-sizing: border-box
        border: 1rem
        .img-context
          display: block
          margin: 0 auto
          height: 100%
      .icon-title
        position: absolute
        left: 0
        right: 0
        bottom: 0
        line-height: .44rem
        height: .44rem
        color: #333
        text-align: center
        ellipsis()
</style>
