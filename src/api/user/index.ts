import axios from '../request' // axios 实例引入（第五节封装的）

const user = {
// 登录
  loginUser: (data:any) =>
    axios({
      url: ``,
      method: 'post',
      data,
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
