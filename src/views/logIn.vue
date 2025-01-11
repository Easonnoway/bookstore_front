<template>
  <div class="login-box">
    <h2>登录</h2>
    <form @submit.prevent="login">
      <div class="user-box">
        <input type="text" v-model="accountNumber" required />
        <label>账号</label>
      </div>
      <div class="user-box">
        <input type="password" v-model="password" required />
        <label>密码</label>
      </div>
      <div class="button-container">
        <el-button type="primary" @click="login">登录</el-button>
      </div>
    </form>
    <a @click="gotoSignUp" style="cursor: pointer">前往注册</a>
  </div>
   <Vcode :show="isShow" @success="success" @close="close" @fail="fail" :imgs="[Img]"></Vcode>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useApi } from '@/api' // 引入自定义组合式函数
import { ElMessage } from 'element-plus'
import Vcode from 'vue3-puzzle-vcode'
const isShow = ref(false)
const router = useRouter()
const accountNumber = ref('')
const password = ref('')

const api = useApi() // 使用自定义组合式函数获取全局API
const success = (msg) => {
  isShow.value = false
  submitForm()
}
const fail = (msg) => {
  ElMessage({
    type: 'error',
    message: '验证码错误，请重试'
  })
}
const close = () => {
  isShow.value = false
}
const submitForm = async () => {
  try {
    const response = await api.user.loginUser({
      accountNumber: accountNumber.value,
      password: password.value
    })
    if (response.data.code !== 1) {
      console.error('登录失败:', response.data.data)
      ElMessage({
        type: 'error',
        message: response.data.data
      })
      throw new Error(response)
    }
    console.log('登录成功:', response)
    const user = await api.user.getUserInfo(accountNumber.value)
    localStorage.setItem('user', JSON.stringify(user.data.data))
    router.push('/') // 登录成功后跳转到主页
  } catch (error) {
    console.error('登录失败:', error)
  }
}
const login = () => {
  isShow.value = true
}

const gotoSignUp = () => {
  router.push('/signUp')
}
</script>

<style scoped>
html {
  height: 100%;
}

.login-box {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
}

.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.login-box h2 {
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
}

.login-box .user-box {
  position: relative;
}

.login-box .user-box input {
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
}

.login-box .user-box label {
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  pointer-events: none;
  transition: 0.5s;
}

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
  top: -20px;
  left: 0;
  color: #03e9f4;
  font-size: 12px;
}

.login-box form a {
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #03e9f4;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  margin-top: 40px;
  letter-spacing: 4px;
}

.el-radio {
  color: #fff;
}
</style>
