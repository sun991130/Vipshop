<template>
    <div>
      <div class="wrapper"  ref="wrapperItem">
        <ul class="content">
          <li class="itemList"   @click="indeShow(index)"  :class="{active:index === navIndex}" v-for="(item,index) in wrapperList" :key ='index'>
            {{item}}
          </li>
        </ul>
        <div class="right"></div>
   
    </div>
    <HotSell/>
  </div>  

</template>

<script type="text/ecmascript-6">

  import BScroll from 'better-scroll'
  export default {
      data() {
        return {
          navIndex:0,
          // lastNavIndex:navIndex,
          wrapperList:['女式皮裤','女式羽绒服','女士皮衣/皮草','女式大衣','百搭卫衣','连衣裙'],
           wrapperList11:['女式皮裤','女式羽绒服','女士皮衣/皮草','女式大衣','百搭卫衣','连衣裙']
        }
      },

     async mounted() {

        await this.$store.dispatch('gethotsell')
        //使用设置滚动的方向
        new BScroll(this.$refs.wrapperItem,{scrollX:true,click:true,startX:0,bounce:false})     
      },
      methods: {
          //点击获取边框颜色
        indeShow(index){

          //判断是否为重复点击
        if(this.navIndex === index) return
        this.navIndex = index

          if(this.navIndex === 0){
            this.$store.dispatch('gethotsell')
          }
          if(this.navIndex === 1){
             this.$store.dispatch('gethotslirt')
          }
          if(this.navIndex === 2){
              this.$store.dispatch('gethotslirtHalf')
          }
        },
      },  
     
  }
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
    .wrapper
      overflow hidden
      position relative
      height 50px
      background-color #fff
      display flex
      .content

        position fixed
        top 0 
        left 0
        z-index 10000
        background-color #fff
        white-space nowrap
        overflow hidden
        padding-bottom 5px
        display flex
        // &.isshow
        //   white-space pre-wrap
        .itemList
          display inline-block
          height 40px
          line-height 40px
          align-items center
          font-size 16px
          font-weight 400
          color #222
          padding 0 5px
          &:last-child
            margin-right 50px
          &.active
            border-bottom 2px solid red
      .right
        width 50px
        height 40px
        background #fff
        position fixed
        z-index 10001
        background-image url("../../comment/images/hotSell/xiala.png")
        background-repeat no-repeat  
        background-position center
        right 0
        top 0
        text-align center
        border-bottom  1px solid #eee
   
   
   
 
</style>
