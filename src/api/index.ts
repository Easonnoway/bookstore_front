
import user from './user'

class API {
  user: any
  constructor() {
    this.user = user
  }
}

// 导出使用
export default new API()
