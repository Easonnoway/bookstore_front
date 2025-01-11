<template>
  <div class="login-box">
    <h2>注册</h2>
    <form @submit.prevent="signUp">
      <div style="margin-bottom: 20px;">
        <el-radio-group v-model="identity">
          <el-radio :label="1">用户</el-radio>
          <el-radio :label="2">管理员</el-radio>
          <el-radio :label="3">商户</el-radio>
        </el-radio-group>
      </div>
      <div class="user-box">
        <input type="text" v-model="accountNumber" required />
        <label>账号</label>
      </div>
      <div class="user-box">
        <input type="password" v-model="password" required />
        <label>密码</label>
      </div>
      <div class="user-box">
        <input type="text" v-model="phoneNumber" required />
        <label>电话</label>
      </div>
      <div class="user-box">
        <input type="text" v-model="userName" required />
        <label>用户名</label>
      </div>
      <div class="user-box">
        <input type="email" v-model="email" required />
        <label>邮箱号</label>
      </div>
      <div class="button-container">
        <el-button type="primary" @click="signUp">注册</el-button>
      </div>
    </form>
    <a @click="gotoLogin" style="cursor: pointer">前往登录</a>
  </div>
  <Vcode :show="isShow" @success="success" @close="close" @fail="fail" :imgs="[Img]"></Vcode>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useApi } from '@/api'
import { ElMessage } from 'element-plus'
import Vcode from 'vue3-puzzle-vcode'
const isShow = ref(false)
const router = useRouter()
const accountNumber = ref('')
const userName = ref('')
const password = ref('')
const phoneNumber = ref('')
const email = ref('')
const identity = ref(1) // 默认选择用户身份

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
    const response = await api.user.registerUser({
      accountNumber: accountNumber.value,
      userName: userName.value,
      password: password.value,
      phoneNumber: phoneNumber.value,
      email: email.value,
      profilePhoto: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
      identity: identity.value
    })
    if (response.code !== 200) {
      console.error('注册失败:', response.data.data)
      ElMessage({
        type: 'error',
        message: response.data.data
      })
      throw new Error(response)
    }
    console.log('注册成功:', response)
    localStorage.setItem('user', JSON.stringify(response.data))
    router.push('/login') // 注册成功后跳转到登录页面
  } catch (error) {
    console.error('注册失败:', error)
  }
}
const signUp = () => {
  isShow.value = true
}

const gotoLogin = () => {
  router.push('/login')
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
