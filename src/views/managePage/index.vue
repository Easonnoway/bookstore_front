<template>
  <div class="store-header">
    <el-page-header @back="goBack" title="返回上一页">
      <template #breadcrumb>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: './' }"> 主页 </el-breadcrumb-item>
          <el-breadcrumb-item>管理员管理页面 </el-breadcrumb-item>
        </el-breadcrumb>
      </template>

    </el-page-header>
  </div>
  <div class="book-store-container">
    <manage-content />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import router from '@/router'
import manageContent from './components/manageContent.vue'   
const goBack = () => {
  router.go(-1)
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.store-header {
  position: fixed;
  padding: 10px 0 10px 30px;
  width: 100%;
  height: 80px;
  top: 0px;
  left: 0px;
  border-bottom: 1px solid #4890ce;
  z-index: 999;
  background-color: #fff;
}
.book-store-container {
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  height: calc(100% - 60px);
  background: #f0f0f0;
}
</style>
