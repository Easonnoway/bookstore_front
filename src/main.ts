import './assets/main.css'
import API from './api'



import { createApp } from 'vue'
import { createPinia } from 'pinia'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(ElementPlus)
app.use(router)

// 挂载API到全局属性
app.config.globalProperties.$api = API

app.mount('#app')
