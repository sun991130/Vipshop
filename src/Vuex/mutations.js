import {HOTSELL_LIST,HOTSELL_SKITR,HOTSELL_SKITR_HALF} from './mutationsType'
export default{
  [HOTSELL_LIST](state,hotsell){
    state.hotSell = hotsell
  },
  [HOTSELL_SKITR](state,hotsell){
    state.hotSell = hotsell
  },
  [HOTSELL_SKITR_HALF](state,hotsell){
    state.hotSell = hotsell
  }
}