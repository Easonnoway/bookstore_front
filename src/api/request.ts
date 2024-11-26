// 这里是对axios的封装处理
import axios from 'axios'

const service = axios.create({
  baseURL: 'http://120.26.3.145:8888/demo', // 添加协议部分
  timeout: 10 * 1000
})

service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

export default service