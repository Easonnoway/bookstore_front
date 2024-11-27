<template>
  <div class="login-box">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div class="user-box">
        <input type="text" v-model="username" required />
        <label>Username</label>
      </div>
      <div class="user-box">
        <input type="password" v-model="password" required />
        <label>Password</label>
      </div>
      <div class="button-container">
        <el-button type="primary" @click="login">登录</el-button>
      </div>
    </form>
    <a @click="gotoSignUp" style="cursor: pointer">go to sign up</a>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useApi } from '@/api' // 引入自定义组合式函数

const router = useRouter()
const username = ref('')
const password = ref('')

const api = useApi() // 使用自定义组合式函数获取全局API

const login = async () => {
  try {
    const response = await api.user.loginUser({
      username: username.value,
      password: password.value
    })
    console.log('登录成功:', response)
    router.push('/') // 登录成功后跳转到主页
  } catch (error) {
    console.error('登录失败:', error)
  }
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
</style>