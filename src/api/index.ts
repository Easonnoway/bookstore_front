import user from './user'
import ukey from './ukey'
import home from './home'

class API {
  user: any
  ukey: any
  home: any
  constructor() {
    this.user = user
    this.ukey = ukey
    this.home = home
  }
}

const apiInstance = new API()

// 自定义组合式函数，用于在组件中访问全局API
export const useApi = () => {
  return apiInstance
}

// 导出API实例
export default apiInstance