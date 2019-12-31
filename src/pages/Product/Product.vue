<template>
  <div class="productContainer" ref="productList">
    
    <div class="product-list" v-if="shopLeftNav.data">
      <div class="product-item" v-for="(item,index) in shopLeftNav.data.items">
        <div class="product-img">
          <img :src="item.goodsImageTags.image5.image" alt="">
        </div>
        <div class="product-info">
          <span class="tag">疯抢价</span>
          <span class="price">{{item.goodsPriceTag.salePrice}}</span>
          <span class="oldPrice">{{item.goodsPriceTag.marketPrice}}</span>
          <span class="discount">{{item.goodsPriceTag.discount}}</span>
        </div>
        <div class="product-name">{{item.goodsName}}</div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import { mapState } from "vuex";
  import BScroll from 'better-scroll'
  export default {
     mounted(){
      this.$store.dispatch('getProductYuRong')   
    },
    computed:{
      ...mapState({
        shopLeftNav : state => state.list.produceYuRong,     
      })
      
    },
    watch:{
      shopLeftNav(){
        this.$nextTick(()=>{
          new BScroll(this.$refs.productList,{bounce:false})
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
// product组件外层
  .productContainer
    background-color #F3F4F5
    height 100vh
    overflow hidden
    // 每个较大的部分,如热销分类
    .product-list
      display flex
      justify-content space-around
      flex-wrap wrap
      // 每个单独的部分
      .product-item
        height 278px
        border-radius 5px
        overflow hidden
        margin-top 5px
        .product-img
          img 
            width 176px
            height 176px
        .product-info
          margin-top 10px
          .tag
            display inline-block
            width 45px
            height 15px
            background-color #CC77DA
            border-radius 4px
            text-align center
            color #FFFFFF
            margin  0 5px
          .price 
            font-size 15px
            font-weight bold
            color #222222
          .oldPrice
            text-decoration line-through
            margin 0px 5px
            color #9C9CA3
          .discount
            color #9C9CA3
        .product-name
          width 160px
          margin-top 10px
          margin-left 8px
          line-height 15px

        
</style>
