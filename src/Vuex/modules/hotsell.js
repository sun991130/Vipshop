import {HOTSELL_LIST,HOTSELL_SKITR,HOTSELL_SKITR_HALF} from "../mutationsType";
import {reqhotSellList,reqhotSellskitr,reqhotSellskitrHalf} from '@/Api/index.js'

export default{

  state:{
    hotSell:{}
  },
  mutations:{
    [HOTSELL_LIST](state,hotsell){
      state.hotSell = hotsell
    },
    [HOTSELL_SKITR](state,hotsell){
      state.hotSell = hotsell
    },
    [HOTSELL_SKITR_HALF](state,hotsell){
      state.hotSell = hotsell
    }
  },
  actions:{
    async gethotsell({commit}){
      const result = await reqhotSellList()
      if(result.code ===0){
        const hotsell = result.data
        commit(HOTSELL_LIST,hotsell)
      }
    },
  
    async gethotslirt({commit}){
      const result = await reqhotSellskitr()
      if(result.code ===0){
        const hotsell = result.data
        commit(HOTSELL_SKITR,hotsell)
      }
    },
  
    async gethotslirtHalf({commit}){
      const result = await reqhotSellskitrHalf()
      if(result.code ===0){
        const hotsell = result.data
        commit(HOTSELL_SKITR_HALF,hotsell)
      }
    }
  },
  getters:{}
 
}