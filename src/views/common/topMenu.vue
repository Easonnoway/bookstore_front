<template>
  <div class="menu-container">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1" @click="router.push('/')">主页</el-menu-item>
      <el-sub-menu index="2">
        <template #title>操作</template>
        <el-menu-item @click="router.push('/bookstore')">我的商铺</el-menu-item>
        <el-menu-item @click="router.push('/storemanage')">店铺管理页面</el-menu-item>
        <el-menu-item @click="router.push('/manage')">管理员页面</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="3" @click="handleOrderClick">订单</el-menu-item>
    </el-menu>
  </div>
  <div class="search-container">
    <el-input
      v-model="searchQuery"
      placeholder="搜索"
      :suffix-icon="Search"
      @keyup.enter="handleSearch"
    ></el-input>
  </div>
  <div class="user-container">
    <span class="text-large font-600 mr-3"> {{ accountNumber }} </span>
    <el-tag>用户</el-tag>
    <el-avatar
      class="mr-3"
      :size="42"
      style="cursor: pointer"
      @click="handleUserInfo"
      src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'

const accountNumber = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')!).accountNumber : ''
const router = useRouter()
const activeIndex = ref(
  location.href.endsWith('/')
    ? '1'
    : location.href.endsWith('/bookstore')
      ? '2-1'
      : location.href.endsWith('/storemanage')
        ? '2-2'
        : location.href.endsWith('/manage')
          ? '2-3'
          : location.href.endsWith('/order')
            ? '3'
            : '0'
)
const searchQuery = ref('')

const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const handleOrderClick = () => {
  router.push('/order')
}

const handleUserInfo = () => {
  router.push('/userInfo')
}

const handleSearch = () => {
  if (searchQuery.value) {
    router.push({ path: '/', query: { q: searchQuery.value } })
  }
}
</script>

<style>
.search-container {
  position: absolute;
  top: 15px;
  right: 35%;
  width: 30%;
}

.user-container {
  position: absolute;
  right: 0;
  top: 0;
  height: 60px;
  display: flex;
  align-items: center;
}

.user-container > * {
  margin-right: 20px;
}
</style>