import user from './user'

class API {
  user: any
  constructor() {
    this.user = user
  }
}

const apiInstance = new API()

// 自定义组合式函数，用于在组件中访问全局API
export const useApi = () => {
  return apiInstance
}

// 导出API实例
export default apiInstance