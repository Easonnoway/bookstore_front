import user from './user'
import ukey from './ukey'
import home from './home'
import store from './store'
import order from './order'

class API {
  user: any
  ukey: any
  home: any
  store: any
  order: any
  constructor() {
    this.user = user
    this.ukey = ukey
    this.home = home
    this.store = store
    this.order = order
  }
}

const apiInstance = new API()

// 自定义组合式函数，用于在组件中访问全局API
export const useApi = () => {
  return apiInstance
}

// 导出API实例
export default apiInstance
