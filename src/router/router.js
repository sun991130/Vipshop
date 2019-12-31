import HotSell from '@/pages/hotSell_navrBar/hotSell-bar.vue'
import Home  from '@/pages/Home/Home.vue'


export default[

    //首页的路由
    {
      path:'/home',
      component:Home
    },


  {
    path:'/hotsellList',
    component:HotSell
  },
  {
    path:'/',
    redirect: '/hotsellList'
  }
 
]