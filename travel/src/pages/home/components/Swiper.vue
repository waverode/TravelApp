<template>
  <div class="wrapper">
    <swiper  :options="swiperOptions">
       <swiper-slide v-for='item of swiperList' :key='item.id'>
         <img :src="item.imgUrl" />
       </swiper-slide>
       <div class="swiper-pagination" slot="pagination"></div>
     </swiper>
  </div>
</template>

<script>
export default{
  name: 'HomeSwiper',
  data: function () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: '//bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/6e497a731a5087d7884c2e9a20b0d761.jpg'
      },
      {
        id: '0002',
        imgUrl: '//bossaudioandcomic-1252317822.image.myqcloud.com/activity/document/2bd34673f82d1cef2cc77b5cc84859a5.jpg'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
    // >>> 代表强制设定，只要.wrapper下有.swiper-pagination-bullet-active，就会应用以下的样式，不受scoped影响
    .wrapper >>> .swiper-pagination-bullet-active
      background-color : #F0F0F0 !important
    .wrapper
      width: 100%
      height : 0
      overflow : hidden
      //height为0，本身就是0高度；padding-bottom作用就是内边距向下撑开34.72%（相对于宽），按照图片宽高比算的
      padding-bottom : 34.72%
      background-color : grey
      img
        width : 100%
</style>
