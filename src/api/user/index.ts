import axios from '../request' // axios 实例引入（第五节封装的）

const user = {
  // 登录
  loginUser: (data: any) =>
    axios({
      url: `/login`,
      method: 'post',
      data
    }),

  getUserInfo: (accountNumber: string) =>
    axios({
      url: `/customer/info/${accountNumber}`,
      method: 'get'
    }),

  registerUser: (data: any) =>
    axios({
      url: `/register`,
      method: 'post',
      data
    }),

  // 修改用户信息
  updateUser: (data: any) =>
    axios({
      url: `/customer/alter`,
      method: 'put',
      data
    }),

  // 新增用户地址
  updateUserAddress: (data: any) =>
    axios({
      url: `/customer/address`,
      method: 'post',
      data
    }),

  // 查询用户地址
  getUserAddress: (id: any) =>
    axios({
      url: `/address/${id}`,
      method: 'get'
    }),

  // 获取所有用户信息
  getAllUsers: (data: any) =>
    axios({
      url: `/admin/getAllUsers`,
      method: 'get',
      data
    })
}

export default user

// 用例
// export default defineComponent({
//   name: 'LoginComponent',
//   methods: {
//     async login() {
//       try {
//         const response = await this.$api.login({ username: 'test', password: '123456' })
//         console.log('登录成功:', response)
//       } catch (error) {
//         console.error('登录失败:', error)
//       }
//     }
//   }
