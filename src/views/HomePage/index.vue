<template>
  <div class="home-header">
    <div class="menu-container">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">主页</el-menu-item>
        <el-sub-menu index="2">
          <template #title>操作</template>
          <el-menu-item index="2-1">item one</el-menu-item>
          <el-menu-item index="2-2">item two</el-menu-item>
          <el-menu-item index="2-3">item three</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="4">订单</el-menu-item>
      </el-menu>
    </div>
    <div class="search-container">
      <el-input placeholder="搜索" :suffix-icon="Search"></el-input>
    </div>
    <div class="user-container">
      <span class="text-large font-600 mr-3"> Easonnoway </span>
      <el-tag>用户</el-tag>
      <el-avatar
        class="mr-3"
        :size="42"
        style="cursor: pointer"
        @click="handleUserInfo"
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      />
    </div>
  </div>
  <div class="content-container">
    <search-list v-if="searchIndex === true" />
    <book-list v-else />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
import bookList from './components/bookList.vue'
import searchList from './components/searchList.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const activeIndex = ref('1')
const searchIndex = ref(false)

const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const handleUserInfo = () => {
  router.push('/userInfo')
}
</script>

<style lang="css" scoped>
.home-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  z-index: 999;
  background: #409eff;
}

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

.content-container {
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  height: calc(100% - 60px);
  /* background: #f0f0f0; */
}
</style>
