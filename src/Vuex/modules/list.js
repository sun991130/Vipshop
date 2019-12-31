// Assort组件
import { 
  GET_SHOP_LEFT_NAV ,
  GET_SHOP_WPMEN,
  GET_SHOP_YURONG,
  GET_UNDER_WEAR,
  GET_SHOP_MEN,
  GET_PRODUCT_CLOTHS
} 
from "../mutationsType";
import {
  reqGetShopLeftNav,
  reqGetShopWoman,
  reqGetYuRong,
  reqGetShopUnderwear,
  reqGetShopMan,
  reqGetProductList
} from '@/Api'

export default {
  state:{
    shopLeftNav:[],
    shopWomen:{},
    produceYuRong:{},
    
  },
  mutations:{
    [GET_SHOP_LEFT_NAV] (state,shopLeftNav) {
      state.shopLeftNav = shopLeftNav
    },
    [GET_SHOP_WPMEN](state,shopWomen){
      state.shopWomen = shopWomen
    },
    [GET_SHOP_YURONG](state,produceYuRong){
      state.produceYuRong = produceYuRong
    },
    
    [GET_UNDER_WEAR](state,shopWomen){
      state.shopWomen = shopWomen
    },
    [GET_SHOP_MEN](state,shopWomen){
      state.shopWomen = shopWomen
    },
    [GET_PRODUCT_CLOTHS](state,produceYuRong){
      state.produceYuRong = produceYuRong
    },
      
  },
  actions:{
    // Assort组件左侧列表
    async getShopLeftNav ({commit, state}) {
      // 发异步请求
      const result = await reqGetShopLeftNav()
      // 请求成功后, 提交给mutation
      if (result.code===0) {
        const shopLeftNav = result.data
        commit(GET_SHOP_LEFT_NAV, shopLeftNav)
      }
    },
    // Assort组件女装
    async getShopWomen ({commit, state}) {
      // 发异步请求
      const result = await reqGetShopWoman()
      // 请求成功后, 提交给mutation
      if (result.code===0) {
        const shopWomen = result.data
        commit(GET_SHOP_WPMEN, shopWomen)
      }
    },
    // Assort右侧羽绒服
    async getProductYuRong ({commit, state}) {
      // 发异步请求
      const result = await reqGetYuRong()
      // 请求成功后, 提交给mutation
      if (result.code===0) {
        const produceYuRong = result.data
        commit(GET_SHOP_YURONG, produceYuRong)
      }
    },
    // 男女内衣
    async getShopUnderWear ({commit, state}) {
      // 发异步请求
      const result = await reqGetShopUnderwear()
      // 请求成功后, 提交给mutation
      if (result.code===0) {
        const shopWomen = result.data
        commit(GET_UNDER_WEAR, shopWomen)
      }
    },
    async getShopMen ({commit, state}) {
      // 发异步请求
      const result = await reqGetShopMan()
      // 请求成功后, 提交给mutation
      if (result.code===0) {
        const shopWomen = result.data
        commit(GET_SHOP_MEN, shopWomen)
      }
    },
    async getShopCloths ({commit, state}) {
      // 发异步请求
      const result = await reqGetProductList()
      // 请求成功后, 提交给mutation
      if (result.code===0) {
        const produceYuRong = result.data
        commit(GET_PRODUCT_CLOTHS, produceYuRong)
      }
    },
                  
  },
  getters:{}
}