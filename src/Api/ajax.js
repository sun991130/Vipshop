//二次封装  发ajax请求

import axios from 'axios'
import qs from 'qs'
import {Indicator,MessageBox } from 'mint-ui'
import 'mint-ui/lib/style.css'
const instance =axios.create({
  baseURL:'/api',

  //配置请求超时的时间
  timeout:20000
})

//请求拦截器
instance.interceptors.request.use((config)=>{

  Indicator.open()

  const data =config.data
  if(data instanceof Object){
    const data = qs.stringify(data)
  }
  return config
})

//响应拦截器
instance.interceptors.response.use(


  //成功的回调
  response => {

    Indicator.close()
    return response.data
  },

  error => {

    //统一处理异常
    MessageBox('提示','请求出错' +error.message)
    return new Promise(()=>{})
  }

)

export default instance