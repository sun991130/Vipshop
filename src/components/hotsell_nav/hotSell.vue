<template>
    <div class="main-content"  v-if="hotSell.data">
        <div class="main-container" v-for="(item,index) in hotSell.data.items" :key="index">
          <div class="left-content">
            <img class="sample" :src="item.goodsImageTags.image5.image"  alt="">
            <div class="numList"></div>
          </div>
          <div class="main">
            <div class="header">
              <img :src="item.goodsImageTags.brandLogo1.image" alt="">
              <span>进入专场></span>  
            </div>
            <div class="cotent">
              {{item.goodsName}}
            </div>
            <div class="hotcars">
              <span class="left"></span>
              <span class="right">热销指数99.75%</span>
              <div class ="options"></div>
              </div>
            <div class="money">
              <div class="left">
                <div class="left-color">
                  <span class="sell">{{item.goodsPriceTag.pricePrefix}}</span>
                  <span class="num_money">${{item.goodsPriceTag.salePrice}}</span>
                </div>
                <div class="botton-money">
                  <span class="botton-money1">唯品价${{item.goodsPriceTag.referPrice}}</span>
                  <span class="botton-money2">${{item.goodsPriceTag.marketPrice}}</span>
                  <span class="botton-money3">{{item.goodsPriceTag.discount}}</span>
                </div>
              </div>
              </div>
            <span class="right1"></span>
              </div>
          <div class ="flooat">
          <p  class="flooat-img" >
            <img src="../../comment/images/hotSell/flooat.png" alt="">
          </p>
          <p class="flooat-content" v-if="item.goodsSellTags.comment">
            {{item.goodsSellTags.comment.msg}}
          </p>
        </div>
      </div>
    </div>      
</template>

<script type="text/ecmascript-6">
import {mapState} from 'vuex'
  export default {
    data() {
      return {
        isShow:false,
      }
    },
    methods: {
      pullList(isShow){
        //判断类名换行  当类名为特定的时候实现换行功能
        this.isShow = !isShow
        console.log('你点击了',isShow)
      }
    },
    computed: {
      ...mapState(['hotSell'])
    },
    mounted() {
      
    },   
  }
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
    .main-container
      position relative
      margin-left 5px
      background-color #fff
      padding 5px 0
      &:nth-child(1)
        .left-content
          .numList
            background-image url(https://h2.appsimg.com/a.appsimg.com/upload/upimg2/u/9c173261efbf252b6b4cee86e06b656a.png)
      &:nth-child(2)
        .left-content
          .numList
            background-image url(https://h2.appsimg.com/a.appsimg.com/upload/upimg2/u/27e720b3b9218bcacc19f0adbac8f76e.png)
      &:nth-child(3)
        .left-content
          .numList
            background-image url(https://h2.appsimg.com/a.appsimg.com/upload/upimg2/u/6146b5e5027c95596d23095cf079ef40.png)
      .left-content
        display inline-block
        .sample
          width 120px
          height 150px
          border-radius 10px
        .numList
          width 27px
          height 32px
          background-size 27px 32px
          position absolute
          left 0px
          top 5px
          z-index 3

      .main
        width 210px
        height 150px
        margin-left 10px
        position absolute
        top 0
        left 130px
        .header
          line-height 25px
          img
            width 40px
            height 20px
            vertical-align middle
            border 1px solid #eee
          span 
            float right
            vertical-align middle
            text-align center
            font-size 10px
        .cotent
          margin-top 6px
          white-space nowrap
          overflow hidden
          text-overflow ellipsis
          font-size 12px
          line-height 12px
        .hotcars
          width 135px
          height 12px
          border-radius 30px
          margin-top 15px
          text-align center
          line-height 10px
          position relative
          overflow hidden
          border 1px solid #ff2947
          font-size 10px
          .left
            display inline-block
            margin-right 3px
            width 10px
            height 10px
            background-image url('../../comment/images/hotSell/hot.png')
          .right
            font-size 10px
          .options
            background-color #ff2947
            opacity .1
            width 100%
            height 100%
            position absolute
            top 0
            left 0 
        .money
          position absolute
          bottom 0
          width 100%
          .left
            .left-color 
              .sell
                display inline-block
                background linear-gradient(90deg,#de3d96,#cb78dc)
                border-radius 5px
                margin-right 5px
                padding 2px
                color #fff
                font-size 9px
                line-height 9px
              .num_money
                font-size 14px
                font-weight bold
            .botton-money
              margin-top 3px
              span
                display inline-block
                margin-right 3px
                color #98989f
                &.botton-money2
                  text-decoration line-through

        .right1
          position absolute
          width 25px
          height 25px
          background-image url('../../comment/images/hotSell/shop.png')
          background-color rgb(255, 36, 186)
          background-size 20px 20px
          background-position center 
          background-repeat no-repeat
          border-radius 50%
          right 0
          right 0
          bottom 0
    .flooat
      display flex 
      width 345px
      background-color #eee
      border-radius 10px
      margin-top 5px
      padding 10px
      .flooat-img
        margin  0 10px
        img
          width 16px
          height 16px
          vertical-align:top
      .flooat-content
        color #98989f
        display inline-block
        float left
        text-align: justify;
        word-break: break-all;
        text-overflow: ellipsis;
        display: -webkit-box;
        /*! autoprefixer: off */
        -webkit-box-orient: vertical;
        /* autoprefixer: on */
        -webkit-line-clamp: 2;
        overflow: hidden;





        



</style>
