import user from './user'
import ukey from './ukey'

class API {
  user: any
  ukey: any
  constructor() {
    this.user = user
    this.ukey = ukey
  }
}

const apiInstance = new API()

// 自定义组合式函数，用于在组件中访问全局API
export const useApi = () => {
  return apiInstance
}

// 导出API实例
export default apiInstance