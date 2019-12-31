import HotSell from '@/pages/hotSell_navrBar/hotSell-bar.vue'  //热搜榜中的导航
import Home  from '@/pages/Home/Home.vue' //主页路由
import Snap from '@/pages/snap/snap.vue' //主页最后疯抢页面
import Assort from '@/pages/Assort/Assort.vue'
import Product from '@/pages/Product/Product.vue'


export default[

    //首页的路由
    {
      path:'/home',
      component:Home,
      children:[
      
      ]
    },
    //最后疯抢页面
    {
      path:'/snap',
      component:Snap
    },
    //热搜路由
    {
      path:'/hotsellList',
      component:HotSell
    },
   
    // 商城路由路由  马文静
    {
      path:'/list',
      component:Assort,
    },
    //
    {
      path:'/product',
      component:Product
    }











    , //默认路由
    {
      path:'/',
      redirect: '/list'
    },
    
 
]