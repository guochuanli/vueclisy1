import axios from 'axios'
let service = axios.create({
    baseURL:'http://localhost:8080/',
    timeout:6000
})
service.interceptors.request.use(config => {
    // 展示 loading 效果
 
    console.log(config)
    // 这是固定写法
    return config
  })
  // 配置响应拦截器
  service.interceptors.response.use(response => {
    // 关闭 loading 效果
   
    return response
  })
  export default service